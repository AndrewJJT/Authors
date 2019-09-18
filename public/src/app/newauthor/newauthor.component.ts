import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-newauthor',
  templateUrl: './newauthor.component.html',
  styleUrls: ['./newauthor.component.css']
})
export class NewauthorComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  newauthor:any;
  errors:any;
  ngOnInit() {
    this.newauthor = {name:''};
    
  }

  addNewAuthor(){
    console.log(this.newauthor);
    let addNewAuthorobv = this._httpService.addnewauthor(this.newauthor);
  
    addNewAuthorobv.subscribe(data => {
      console.log(data); 
      if(data['message']=="failed"){
        this.errors = data['errors']
        console.log("this.errors",this.errors);
      }
      else{
        console.log("Returning home....");
        this.returnToHome();
      }
    })
   
  }

  returnToHome(){
    this._router.navigate(['/home']);
  }

}
