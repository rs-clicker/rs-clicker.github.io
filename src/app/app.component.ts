import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'APP';

  constructor(private http: HttpClient) {
    console.log("constructor")
  }

  ngOnInit() {
      console.log("started")
      this.http.get("https://rs-clicker.azurewebsites.net/").subscribe(result => {
        console.log(result)
      })
  }
}
