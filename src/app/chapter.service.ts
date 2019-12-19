import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Chapter } from './chapter.model';

@Injectable({
  providedIn: 'root'
})
export class ChapterService {
  private url = 'https://onepiececover.com/api/';

  constructor(private http: HttpClient) { }

  getChapters(){
    return this.http.get(this.url + 'chapters/');
  }
}
