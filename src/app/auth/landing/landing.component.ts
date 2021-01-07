import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

  }

  onLoginClick() {
    var client_id = '9a673bfae6744533bbf78a26e2aa92ac'; // Your client id
    var client_secret = 'a13f66b56eda437f9fc98fe5c2118728'; // Your secret
    var redirect_uri = 'http://localhost:4200/callback'; // Your redirect uri

    /**
    * Generates a random string containing numbers and letters
    * @param  {number} length The length of the string
    * @return {string} The generated string
    */
    var generateRandomString = function(length: number) {
      var text = '';
      var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

      for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    };

    var stateKey = 'spotify_auth_state';

    var state = generateRandomString(16);
    var scope = 'user-read-private user-read-email';

    let params = new HttpParams().set('client_id', `${client_id}`)
                                 .set('response_type', 'code')
                                 .set('redirect_uri', `${redirect_uri}`)
                                 .set('state', `${state}`)
                                 .set('scope', `${scope}`);

    return this.http.get('https://accounts.spotify.com/authorize?' + { params });
  }

}
