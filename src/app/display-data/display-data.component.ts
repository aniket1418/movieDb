import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-display-data',
  templateUrl: './display-data.component.html',
  styleUrls: ['./display-data.component.scss']
})
export class DisplayDataComponent implements OnInit {
  movieInfo: any;
data : any;
movieTitle: string | any;
movieGenre: string | any;
movieActor: string | any;
movieFormData: any;
movieForm: any;
movieData:any = [];

  constructor(@Inject(MAT_DIALOG_DATA) public info:any) { 
    this.data = info;
  }

  ngOnInit(): void {
    this.movieInfo = this.data.movies[this.data.index];
    this.movieForm = new FormGroup ({
    Year: new FormControl(this.movieInfo.Year),
    Genre: new FormControl(this.movieInfo.Genre),
    Actors: new FormControl(this.movieInfo.Actors),
  })
  }
  onReset(){
    console.log("Reset button is pressed");
    this.movieForm = new FormGroup({
      Year : new FormControl(this.movieInfo.Year),
      Genre: new FormControl(this.movieInfo.Genre),
      Actors:new FormControl(this.movieInfo.Actors)
    })
  }
  onSubmit() {
      console.warn(this.movieForm.value);
      this.movieInfo.Year = this.movieForm.value.Year;
      this.movieInfo.Genre = this.movieForm.value.Genre;
      this.movieInfo.Actors = this.movieForm.value.Actors;
      console.log(this.data.movies);
      localStorage.setItem('movieObject', JSON.stringify(this.data.movies));
    }
  
}
