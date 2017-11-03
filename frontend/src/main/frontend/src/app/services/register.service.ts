/**
 * Created by michal on 5.3.2017.
 */
import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable'; /*TODO add me*/


@Injectable()
export class HttpService {
  constructor (private http: Http) {}

  post(controller:string, action:string, data:any){
      let url = "http://localhost:8080/"+controller+"/"+action; /*TODO move this to config*/
      let headers = new Headers({'Content-Type':'application/json'});
      return this.http.post(url,JSON.stringify(data), {headers:headers});
  }

  get(controller:string, action:string){
    let url = "http://localhost:8080/"+controller+"/"+action; /*TODO move this to config*/
    let headers = new Headers({'Content-Type':'application/json'});
    return this.http.get(url, {headers:headers});

  }


}
