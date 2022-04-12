//import { getMultipleValuesInSingleSelectionError } from '@angular/cdk/collections';
import { Injectable } from '@angular/core';
//import { getMaxListeners } from 'process';
//import { employees } from '../models/employes.model'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class EmployesService {
  options = {
    headers: {
      'x-rapidapi-key': '057e169fa3msha3b71f7d0d740bep14b80djsnd6f894842500',
      'x-rapidapi-host': 'asos2.p.rapidapi.com',
    },
    useQueryString: true
  };

  constructor(private httpclient: HttpClient) { }

  getData(url:any, qs:any = {}){
    let QS = '?';
    if(qs){
      Object.keys(qs).forEach(obj =>{
        QS += `${obj}=${qs[obj]}&`
      })
    }
    url += QS;
    return  this.httpclient.get(url,this.options);
  }

  // postData(url:any, option:any, body:any){
  //   return this.httpclient.post(url, option, body )
  // }

 
}
