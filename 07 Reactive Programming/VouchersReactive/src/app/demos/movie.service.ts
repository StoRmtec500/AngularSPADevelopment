import { Injectable } from "@angular/core";
import { MovieGenerator } from "./movie-generator";
import { Observable, Observer, BehaviorSubject } from "rxjs";
import { Movie } from "./Movie";

@Injectable()
export class MovieService {
  // private intervalSec = 3;
  private movies: Movie[] = [];

  constructor() {}

  getMovies(itemCount: number = 10): Observable<Movie[]> {
    console.log("using: getMovies()");
    console.log("reset movies");
    this.movies = [];

    let movieGenerator = MovieGenerator(itemCount);

    let mediaObservableArray: Observable<Movie[]> = Observable.create(
      (observer: Observer<Movie[]>) => {
        for (let i = 0; i < itemCount; i++) {
          this.movies.push(movieGenerator.next().value);
        }
        observer.next(this.movies);
        observer.complete();
      }
    );
    return mediaObservableArray;
  }

  getMovieStream(
    itemCount: number = 10,
    interval: number = 3
  ): Observable<Movie[]> {
    console.log("using: getMovieStream()");
    console.log("reset movies");
    this.movies = [];

    let movieGenerator = MovieGenerator(itemCount);

    let mediaObservableArray: Observable<Movie[]> = Observable.create(
      (observer: Observer<Movie[]>) => {
        for (let i = 0; i < itemCount; i++) {
          this.addItemwWithDelay(1, i, movieGenerator.next().value, observer);
        }
      }
    );
    return mediaObservableArray;
  }

  private addItemwWithDelay(
    intervalSec: number,
    idx: number,
    item: Movie,
    observer: Observer<Movie[]>
  ): void {
    setTimeout(() => {
      this.movies.push(item);
      observer.next(this.movies);
    }, (idx + intervalSec) * 1000);
  }

  private buildMedia(initialCount: number): Movie[] {
    let movieGenerator = MovieGenerator(initialCount);

    this.movies = new Array();
    for (let i = 0; i < initialCount; i++) {
      this.movies.push(movieGenerator.next().value);
    }
    return this.movies;
  }

  getMovieBehaviourSubject(initialCount: number = 8): Observable<Movie[]> {
    console.log("using: getObservableUsingBehaviorSubj()");
    let bs: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>(
      this.buildMedia(initialCount)
    );
    return bs.asObservable();
  }
}
