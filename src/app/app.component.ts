import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'rs-clicker';

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
      this.http.get("https://rs-clicker.azurewebsites.net/").subscribe(result => {
        console.log(result)
      })
  }
}
