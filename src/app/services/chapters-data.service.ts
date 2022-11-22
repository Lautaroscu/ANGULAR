import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { map, Observable, Subject, tap } from 'rxjs';
import { Chapters, Comments } from '../components/chapters-component/interf-chapters';
const URL:string = 'https://62b49373da3017eabb0d8683.mockapi.io/api/chapters' ;
const URLCOMMENTS:string = 'https://62b49373da3017eabb0d8683.mockapi.io/api/comments' ;

@Injectable({
  providedIn: 'root'
}) 
export class ChaptersDataService {
  private header;
  constructor(private http:HttpClient ) { 
    this.header = new HttpHeaders({'myHeader' : 'Lautaroscuu'})
  }
  private refresh$ = new Subject<void>() ;
  chapters:Chapters[] = []
  comments:Comments[] = []

  public getRefresh() {
    return this.refresh$;
  }
  public getAll():Observable<Chapters[]>{
    return this.http.get<Chapters[]>(URL)
    
    
    };
    
  
  
  public getAllComments():Observable<Comments[]>{
    return this.http.get<Comments[]>(URLCOMMENTS)
    
   
  }
 
  public deleteComment(id:string):Observable<Comments[]>{
    return this.http.delete<Comments[]>(`${URLCOMMENTS}/${id}`)
    .pipe(
      tap(() => {
        this.refresh$.next() ;
      })
    )

  }
  public insertComment(comment:Comments[]):Observable<Comments[]>{ 
    return this.http.post<Comments[]>(URLCOMMENTS , comment , {headers:this.header}) 
    .pipe(
      tap(() => {
        this.refresh$.next() ;
      })
    )  

  }
    public updateComment(id:string , comment:Comments[]):Observable<Comments[]>{
      return this.http.put<Comments[]>(`${URLCOMMENTS}/${id}` , comment)
    }
  

}

