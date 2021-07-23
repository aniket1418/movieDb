import { Component, OnInit } from '@angular/core';
import { GetMovieDataService } from './user-service.service';
import { MatDialog } from '@angular/material/dialog';
import { DisplayDataComponent } from './display-data/display-data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  starRating = 4;
  movie: any
  movieQuery: string | any;
  movieItem: any;
  category: any;
  originalMovieData: any;
  movieData: any = [];
  retriveData: any = [];
  categoryList: any = [];
  categorySelected: any;
  categoryValue: any;
  rating: any;
  rate: any;
  public movieName: string = this.movieData.Title;
  movieActor = this.movieData.Actor;

  constructor(private getmovie: GetMovieDataService, public dialog: MatDialog) {
  }

  public searchMovie() {
    const localStorageData = JSON.parse(localStorage.getItem('movieObject') ?? '[]');
    for (const movie of localStorageData) {
      if (movie.query === this.movieQuery) {
        this.movieData = [movie];
        return (console.log("Found in local storage"));
      }
    }
    this.getmovie.getMovie(this.movieQuery).subscribe(
      Response => {
        this.rate = (parseInt(Response?.Ratings[0].Value)/2);
        console.log(this.rate);
        const movie = Response;
        var oldRating = (movie.Ratings[0].Value);
        movie.query = this.movieQuery;
        // this.movieData.Ratings = rate;
        movie.Ratings[0].Value = this.rate ;

        this.movieData.push(movie);
        localStorage.setItem('movieObject', JSON.stringify(this.movieData));
        console.log("Found in Api")
        console.log(movie.Title);
        console.log(this.movieData);

      }
    )
  }






  public openDialog( i:any) {
    this.dialog.open(DisplayDataComponent,
      {
        maxHeight: '90vh',
        data: { movies: this.movieData, index: i }
      })
  }


  public searchCategory() {
    const localStorageData = JSON.parse(localStorage.getItem('movieObject') ?? '[]');
    for (const movie of localStorageData) {
      if (this.category === this.movieQuery) {
        return console.log("Category found in the arrar")
      }
      else {
        return console.log("Category Not found in the arrya")
      }
    }
  }

  
  public categorySelectFunction(category: string) {
    this.categorySelected = category;
    if (category === 'all')
      this.movieData = this.originalMovieData;
    else this.movieData = this.originalMovieData.filter((data: any) => data.Genre.toLowerCase() === category);
  }



  ngOnInit(): void {
    this.originalMovieData = JSON.parse(localStorage.getItem('movieObject') ?? '[]');
    this.movieData = this.originalMovieData;
    this.movieName = this.movieData.Title
    this.categoryList = [
      { id: 1, name: "ALL", value: "all" },
      { id: 2, name: "ACTION", value: "action" },
      { id: 3, name: "COMEDY", value: "comedy" },
      { id: 4, name: "HORROR", value: "horror" },
      { id: 5, name: "DRAMA", value: "drama" },
      { id: 6, name: "MYSTERY", value: "mystery" },
      { id: 7, name: "SCI-FY", value: "sciFy" }
    ];
    this.categorySelected = " ";
  }
}

function next(): import("rxjs").PartialObserver<any> | undefined {
  throw new Error('Function not implemented.');
}

function movieObject(movieObject: any) {
  throw new Error('Function not implemented.');
}

function key(key: any, arg1: string): string {
  throw new Error('Function not implemented.');
}

function Title(Title: any) {
  throw new Error('Function not implemented.');
}

function Year(Year: any) {
  throw new Error('Function not implemented.');
}

function categorySelectFunction() {
  throw new Error('Function not implemented.');
}

function value(value: any) {
  throw new Error('Function not implemented.');
}

