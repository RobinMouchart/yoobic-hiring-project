import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { People } from "./people.model";
import { Observable } from "rxjs";

interface Response {
  count: Int16Array;
  next: string;
  previous: string;
  results: Array<People>;
}
@Injectable({
  providedIn: "root"
})
export class PeopleService {
  constructor(private http: HttpClient) { }

  getPeople(): Observable<Response> {
    return this.http.get<Response>("https://swapi.co/api/people/");
  }

  getCharacter(id): Observable<People> {
    return this.http.get<People>("https://swapi.co/api/people/" + id);
  }
}
