import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  resourceUrl = `${environment.apiUrl}/people/`

  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return this.httpClient.get(this.resourceUrl)
      .pipe(
        map((data: any) => {
          return data.results.map((jedi, index) =>
            new User(index + 1, jedi.name, jedi.gender, jedi.birth_year))
        })
      );
  }
  getUser(index: number) {
    return this.httpClient.get(`${this.resourceUrl}${index}`)
    .pipe(
      map((jedi: any) => {
        return new User(index, jedi.name, jedi.gender, jedi.birth_year, jedi.mass, jedi.height, jedi.hair_color, jedi.skin_color, jedi.eye_color);
      })        
    )
  }

}