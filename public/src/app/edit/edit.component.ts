import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { parseHostBindings } from '@angular/compiler';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router) { }

  selectedAuthor: any;
  id:any;
  errors:any;

  ngOnInit() {
    this._route.params.subscribe((params:Params) => {
      this.id = params['id'];
    });
    this.getAuthor();
  }


  getAuthor(){
    let selectedauthorobv = this._httpService.getauthor(this.id);
    selectedauthorobv.subscribe (data => {
      console.log(data);
      this.selectedAuthor = data['author'][0];
      console.log(this.selectedAuthor)
    })
  }

  UpdateAuthor(){
    let updatedaAuthor = {name:this.selectedAuthor.name}
    console.log(updatedaAuthor);
    let selectedAuthorobv = this._httpService.updateauthor(this.selectedAuthor._id,updatedaAuthor);
    selectedAuthorobv.subscribe(data =>{
      if (data['message'] == 'failed'){
        this.errors = data['errors']
      }
      else{
        this.returnToHome();
      }
    })
  }

  returnToHome(){
    this._router.navigate(['/home']);
  }
}
