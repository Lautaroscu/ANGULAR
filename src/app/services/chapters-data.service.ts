import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { map, Observable, tap } from 'rxjs';
import { Chapters, Comments } from '../components/chapters-component/interf-chapters';
const URL:string = 'https://62b49373da3017eabb0d8683.mockapi.io/api/chapters' ;
const URLCOMMENTS:string = 'https://62b49373da3017eabb0d8683.mockapi.io/api/comments' ;

@Injectable({
  providedIn: 'root'
}) 
export class ChaptersDataService {
  constructor(private http:HttpClient ) { 
    
  }
  chapters:Chapters[] = []
  public getAll():Observable<Chapters[]>{
    return this.http.get<Chapters[]>(URL)
    
    
    };
    
  
  
  public getAllComments():Observable<Comments[]>{
    return this.http.get<Comments[]>(URLCOMMENTS) ;  
  }
 
  public deleteComment(id:string):Observable<Comments[]>{
    return this.http.delete<Comments[]>(`${URLCOMMENTS}/${id}`)
  }
  public deleteAllComments():Observable<Comments[]>{
    return this.http.delete<Comments[]>(URLCOMMENTS)
  }

}

