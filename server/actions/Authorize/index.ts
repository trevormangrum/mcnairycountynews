const ApiContracts = require("authorizenet").APIContracts;
const ApiControllers = require("authorizenet").APIControllers;
import urls from "utils/urls";

const prod = process.env.NODE_ENV === "production";
export default class Authorize {
  merchantAuthenticationType;
  constructor() {
    this.merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
    this.merchantAuthenticationType.setName(prod ? process.env.AUTHORIZE_PROD_LOGIN_ID : process.env.AUTHORIZE_LOGIN_ID);
    this.merchantAuthenticationType.setTransactionKey( prod ? 
      process.env.AUTHORIZE_PROD_TRANSACTION_KEY : process.env.AUTHORIZE_TRANSACTION_KEY, 
    );
  }

  generateAcceptPage(price: string, cb: any) {
    const transactionRequestType = new ApiContracts.TransactionRequestType();
    transactionRequestType.setTransactionType(
      ApiContracts.TransactionTypeEnum.AUTHCAPTURETRANSACTION
    );
    transactionRequestType.setAmount(price);

    const setting1 = new ApiContracts.SettingType();
    setting1.setSettingName("hostedPaymentButtonOptions");
    setting1.setSettingValue('{"text": "Pay"}');
   
    const setting2 = new ApiContracts.SettingType();
    setting2.setSettingName("hostedPaymentOrderOptions");
    setting2.setSettingValue('{"show": false}');

    const setting3 = new ApiContracts.SettingType();
    setting3.setSettingName("hostedPaymentReturnOptions");
    setting3.setSettingValue(`{"showReceipt": true, "url": "${urls.baseUrl}", "urlText": "Return to MCN", "cancelUrl": "${urls.baseUrl}"  }`)
    
    const setting4 = new ApiContracts.SettingType();
    setting4.setSettingName("hostedPaymentCustomerOptions");
    setting4.setSettingValue(`{"showEmail": true, "requiredEmail": false}`);


    const settingList = [setting1, setting2, setting3, setting4];
    const alist = new ApiContracts.ArrayOfSetting();
    alist.setSetting(settingList);

    const getRequest = new ApiContracts.GetHostedPaymentPageRequest();
    getRequest.setMerchantAuthentication(this.merchantAuthenticationType);
    getRequest.setTransactionRequest(transactionRequestType);
    getRequest.setHostedPaymentSettings(alist);

    var ctrl = new ApiControllers.GetHostedPaymentPageController(
      getRequest.getJSON()
    );

    ctrl.execute(function () {
      const apiResponse = ctrl.getResponse();
      const response = new ApiContracts.GetHostedPaymentPageResponse(
        apiResponse
      );
      if (response != null) {
        if (
          response.getMessages().getResultCode() ==
          ApiContracts.MessageTypeEnum.OK
        ) {
          console.log("Hosted payment page token :");
          console.log(response.getToken());
        } else {
          //console.log('Result Code: ' + response.getMessages().getResultCode());
          console.log(
            "Error Code: " + response.getMessages().getMessage()[0].getCode()
          );
          console.log(
            "Error message: " + response.getMessages().getMessage()[0].getText()
          );
        }
      } else {
        console.log("Null response received");
      }
      cb(response);
    });
  }
}
