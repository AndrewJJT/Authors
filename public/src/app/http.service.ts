import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { }

  getallauthors(){
    return this._http.get('/authors')
  }

  addnewauthor(newauthor){
    return this._http.post('/authors', newauthor);  
  }

  updateauthor(id,author){
    return this._http.put('/authors/'+id, author)
  }

  getauthor(id:String){
    return this._http.get('/authors/'+ id)
  }

  deleteauthor(id:String){
    return this._http.delete('/authors/' + id)
  }
}
