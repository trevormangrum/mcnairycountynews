import * as an from "authorizenet";
export default class Authorize {
  merchantAuthenticationType;
  constructor() {
    this.merchantAuthenticationType = new an.ApiContracts.MerchantAuthenticationType();
    this.merchantAuthenticationType.setName(process.env.AUTHORIZE_LOGIN_ID);
    this.merchantAuthenticationType.setTransactionKey(
      process.env.AUTHORIZE_TRANSACTION_KEY
    );
  }

  createCustomerProfile() {
    //https://developer.authorize.net/api/reference/index.html#customer-profiles-create-customer-profile
  }

  getCustomerProfile() {
    //https://developer.authorize.net/api/reference/index.html#customer-profiles-get-customer-profile
  }

  updateCustomerProfile() {
    //https://developer.authorize.net/api/reference/index.html#customer-profiles-update-customer-profile
  }

  createSubscriptionFromCustomerProfile() {
    //https://developer.authorize.net/api/reference/index.html#recurring-billing-create-a-subscription-from-customer-profile
  }
}
