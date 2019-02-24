import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProjectService{
   url= 'http://localhost:8080/project/getAllProject';
    constructor(
        private http:HttpClient
    ){}

    getProjects():Observable<any>{
        return this.http.get<any>(this.url);
    }
}