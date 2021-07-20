import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getProductData() {
    return this.http.get('http://localhost:3000/api/gamingservices')
  }

//   terms_of_use = 'The Terms and Conditions agreement can act as a legal contract between you, the mobile app owner or developer, and the users of your app. Like a Terms and Conditions for a website, this agreement for a mobile app would set the rules and terms that users must follow in order to use your app.' +
//     'Here are a couple of reasons why you\'ll want to have a Terms and Conditions for a mobile app:' +
//     'You can stop abusive users from using your app.' +
//     'You can terminate or block accounts at your sole discretion.' +
//     'Liability to users will be limited.' +
//     'And many more.' +
//     'If you don\'t have this agreement for your mobile app yet, use the Generator to create it!';
//   privacy_policy = 'You\'ll need the Privacy Policy agreement even if you don\'t collect any personal data yourself through the mobile app you\'re building, but instead use third party tools such as:' +
//     '- Google Analytics Mobile' +
//     '- Flurry' +
//     '- Firebase' +
//     '- Mixpanel' +
//     'And so on' +
//     'If you use at least one third party tool that might collect personal data through your mobile app, you need this agreement in place.' +
//     'Each app store also requires you to have this agreement in place before submitting the mobile app:' +
//     '- Apple App Store' +
//     '- Google Play Store' +
//     '- Microsoft Windows Phone Store'
}

