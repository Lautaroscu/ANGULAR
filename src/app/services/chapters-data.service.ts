import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, Subject, tap } from 'rxjs';
import { Chapters } from '../components/chapters-component/interf-chapters';
import { Comments } from '../components/comments-component/interf-comments';
import { Seasons } from '../components/breaking-bad-component/interf-seasons';
const URL:string = 'http://localhost/API-RESTFULL/api/chapters' ;
 const URLCOMMENTS:string = 'http://localhost/API-RESTFULL/api/chapters/comments' ;
const ALLCOMMENTS:string = 'http://localhost/API-RESTFULL/api/comments' ;
const URLSEASONS:string = 'http://localhost/API-RESTFULL/api/temporadas' ;
const ChapterBySeasons:string = 'http://localhost/API-RESTFULL/api/seasons' ;




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
    return this.http.get<Comments[]>(ALLCOMMENTS);

   
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
 return this.http.get<Seasons[]>(URLSEASONS) ;
 }
 public filterChapters(id_fk:string):Observable<Chapters[]>{
  return this.http.get<Chapters[]>(`${ChapterBySeasons}?season=${id_fk}`)
 }
}

