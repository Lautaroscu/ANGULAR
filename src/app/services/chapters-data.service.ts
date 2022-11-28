import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable, Subject, tap } from 'rxjs';
import { Chapters } from '../components/chapters-component/interf-chapters';
import { Comments } from '../components/comments-component/interf-comments';
import { Seasons } from '../components/breaking-bad-component/interf-seasons';
const URL:string = 'https://62b49373da3017eabb0d8683.mockapi.io/api/chapters' ;
 const URLCOMMENTS:string = 'https://62b49373da3017eabb0d8683.mockapi.io/api/comments' ;
const URLSEASONS:string = 'https://62b49373da3017eabb0d8683.mockapi.io/api/seasons' ;




@Injectable({
  providedIn: 'root'
}) 
export class ChaptersDataService {

  constructor(private http:HttpClient ) { 
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
    return this.http.get<Comments[]>(URLCOMMENTS) ;
   
  }
 
  public deleteComment(id:string):Observable<Comments[]>{
    return this.http.delete<Comments[]>(`${URLCOMMENTS}/${id}` )
    .pipe(
      tap(() => {
        this.refresh$.next() ;
      })
    )

  }
  public insertComment(comment:Comments[]):Observable<Comments[]>{ 
    return this.http.post<Comments[]>(URLCOMMENTS , comment ) 
    .pipe(
      tap(() => {
        this.refresh$.next() ;
      })
    )  

  }
    public updateComment(id:string , comment:Comments[] ):Observable<Comments[]>{
      return this.http.put<Comments[]>(`${URLCOMMENTS}/${id}` , comment)
      .pipe(
        tap(() => {
          this.refresh$.next() ;
        })
      )  
    }
  
 public getAllSeasons():Observable<Seasons[]>{
 return this.http.get<Seasons[]>(URLSEASONS)
 .pipe(
  tap(seasons => {
    seasons.forEach(s => {
      s.numero_temp = 1
    })
  })
 )
 }
 
}

