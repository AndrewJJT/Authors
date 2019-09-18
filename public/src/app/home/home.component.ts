import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _httpService: HttpService) { }

  allauthors:any;

  ngOnInit() {
    this.allauthors = [];
    this.getallauthorsFromService();
  }

  getallauthorsFromService(){
    let allauthorsobv = this._httpService.getallauthors();
    allauthorsobv.subscribe((data) => {
      console.log(data);
      this.allauthors = data['allauthors'];
    });
  }

  deleteauthor(id:String){
    let authorTodeleteobv = this._httpService.deleteauthor(id);
    authorTodeleteobv.subscribe((data)=>{
      console.log(data);
      this.getallauthorsFromService();
    })
  }
}
