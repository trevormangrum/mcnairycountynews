import fetch from "node-fetch";

export default class OpenWeatherHandler {
   baseUri: string;
   appId: string;
   constructor() {
   this.appId = process.env.OPENWEATHER_APP_ID as string;
   this.baseUri = "api.openweathermap.org";
       //Is constructor even needed for this class? guess you could set the URI needed to make requests.
   }
   
   async getWeather() {
       //TODO: implement weather function. Decide what kind of weather you want displayed in the sidebar.
   }
}
