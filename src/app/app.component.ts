import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pagination';
  page = 1;
  data:Observable<any>;
  searchText:any;
  constructor(private httpclient: HttpClient) {
  this.data = this.httpclient.get('https://jsonplaceholder.typicode.com/posts');}
}
