import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root'
} )

export class GetMovieDataService{
    constructor(private httpClient: HttpClient){}
    //for movie
    public getMovie(searchQuery: any):Observable<any>{
        let dataURL = `http://www.omdbapi.com/?t=${searchQuery}&apikey=243a442d`  
        return this.httpClient.get<any>(dataURL).pipe()   
    }

    public handleErrors(error:HttpErrorResponse){
        let errorMessage : string;
        if(error.error instanceof ErrorEvent){
            errorMessage = `MESSAGE : ${error.error.message}`;
        }
        else{
            errorMessage = `STATUS : ${error.status} MESSAGE : ${error.message}`;
        }
        return throwError(errorMessage);
    }
}



