import { HttpClient } from '@angular/common/http';
import { Logger } from 'src/app/core';
import { Pokemon } from './pokemon.model';
import { environment } from '../../../environments/environment';
import { Observable, throwError, forkJoin } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

const log = new Logger('Pokemon Service');

export class PokemonService {
  url = `${environment.api}/pokemon`;

  constructor(private http: HttpClient) {}

  search(id: number): Observable<Pokemon> {
    const url = `${this.url}/${id}`;

    return this.http.get<Pokemon>(url).pipe(
      retry(1),
      map(this.transformResponsePokemon),
      catchError(this.handleError)
    );
  }

  multipleSearch(...ids: number[]): Observable<Pokemon[]> {
    const requests: Array<Observable<any>> = [];

    for (const id of ids) {
      const url = `${this.url}/${id}`;
      requests.push(
        this.http.get(url).pipe(map(this.transformResponsePokemon))
      );
    }

    return forkJoin(requests).pipe(
      retry(1),
      catchError(this.handleError)
    );
  }

  private transformResponsePokemon(res): Pokemon {
    return {
      id: res.id,
      name: res.name,
      experience: res.base_experience,
      height: res.height,
      weight: res.weight,
      images: {
        normal: res.sprites.front_default,
        shiny: res.sprites.front_shiny,
      },
    } as Pokemon;
  }

  private handleError(err) {
    let message = '';

    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }

    return throwError(message);
  }
}
