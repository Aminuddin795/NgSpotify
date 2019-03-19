import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SpotifyService {
  getHeader(query: string) {
    const url = "https://api.spotify.com/v1/" + query;
    let headers = new HttpHeaders();
    headers = headers.append(
      "Authorization",
      "Bearer BQA7DuTpPt3npRJTGX8b9m2sobRxrXKjFGK3_Y43a1Hr2--zdTcDEgjwqFGnf9UToU4wQYlZ6M3r9RR1SOhlkHBmYcNpZw9kWbtSgGJBHjdDOnluoxVv-O1gmA__fOLDtei27XK0tVrOWVFgaJn1w86bWgACCKnva0zfGifqm3E6g9Mc63sFoCZ0EPU7GJLHSMHTxwL-F7rOa2E19Nn1f5Ik-I7dx0r2YZ8Tze8s8YXlG8BvvLU6wLwd_QgzhyCojDB5lGTUudPbQiWZlwXqxIN1pdXcZK_gDNY"
    );
    return this._http.get(url, { headers });
  }
  constructor(private _http: HttpClient) {}

  searchMusic(str: string, type = "artist") {
    const param = "&offset=0" + "&limit=20" + "&type=" + type + "&market=US";
    const query = "search?query=" + str + param;
    return this.getHeader(query);
  }
  getArtist(id: string) {
    const query = `artists/${id}`;
    return this.getArtist(query);
  }
}
