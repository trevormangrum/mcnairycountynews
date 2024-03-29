const ApiContracts = require("authorizenet").APIContracts;
const ApiControllers = require("authorizenet").APIControllers;
import urls from "utils/urls";

const prod = process.env.NODE_ENV === "production";
export default class Authorize {
  merchantAuthenticationType;
  transactionKey;
  loginID;
  constructor() {
    this.transactionKey = prod
      ? process.env.AUTHORIZE_PROD_TRANSACTION_KEY
      : process.env.AUTHORIZE_TRANSACTION_KEY;
    this.loginID = prod
      ? process.env.AUTHORIZE_PROD_LOGIN_ID
      : process.env.AUTHORIZE_LOGIN_ID;
    this.merchantAuthenticationType = new ApiContracts.MerchantAuthenticationType();
    this.merchantAuthenticationType.setName(this.loginID);
    this.merchantAuthenticationType.setTransactionKey(this.transactionKey);
  }

  generateAcceptPage(price: string, gift: string, renewal: string, cb: any) {
    const transactionRequestType = new ApiContracts.TransactionRequestType();
    transactionRequestType.setTransactionType(
      ApiContracts.TransactionTypeEnum.AUTHCAPTURETRANSACTION
    );
    transactionRequestType.setAmount(price);


    const orderDetails = new ApiContracts.OrderType();
    // Set product description based on whether or not it's a renewal
    if(renewal == "Yes") {
        orderDetails.setDescription('MCN Subscription Renewal');
    } else {
        orderDetails.setDescription('MCN New Subscription');
    }
    transactionRequestType.setOrder(orderDetails);



    const setting1 = new ApiContracts.SettingType();
    setting1.setSettingName("hostedPaymentButtonOptions");
    setting1.setSettingValue('{"text": "Pay"}');

    const setting2 = new ApiContracts.SettingType();
    setting2.setSettingName("hostedPaymentOrderOptions");
    setting2.setSettingValue('{"show": false}');

    const setting3 = new ApiContracts.SettingType();
    setting3.setSettingName("hostedPaymentReturnOptions");
    setting3.setSettingValue(
      `{"showReceipt": true, "url": "${urls.baseUrl}", "urlText": "Return to MCN", "cancelUrl": "${urls.baseUrl}"  }`
    );

    const setting4 = new ApiContracts.SettingType();
    setting4.setSettingName("hostedPaymentCustomerOptions");
    setting4.setSettingValue(`{"showEmail": true, "requiredEmail": false}`);
    let setting5 = new ApiContracts.SettingType();
    setting5.setSettingName("hostedPaymentShippingAddressOptions");
    if(gift === "Yes") {
      setting5.setSettingValue(`{"show": true, "required": true}`)
    } else {
      setting5.setSettingValue(`{"show": false, "required": false}`)
    }

    const settingList = [setting1, setting2, setting3, setting4, setting5];
    const alist = new ApiContracts.ArrayOfSetting();
    alist.setSetting(settingList);

    const getRequest = new ApiContracts.GetHostedPaymentPageRequest();
    getRequest.setMerchantAuthentication(this.merchantAuthenticationType);
    getRequest.setTransactionRequest(transactionRequestType);
    getRequest.setHostedPaymentSettings(alist);

    var ctrl = new ApiControllers.GetHostedPaymentPageController(
      getRequest.getJSON()
    );
    //Set the environment to production.
    ctrl.setEnvironment(prod ? "https://api2.authorize.net/xml/v1/request.api" : "https://apitest.authorize.net/xml/v1/request.api");

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
