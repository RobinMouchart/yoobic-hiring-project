import { Component, OnInit } from '@angular/core';

import { forkJoin } from 'rxjs';  // RxJS 6 syntax
import { PeopleService } from '../people.service';
import { ActivatedRoute } from '@angular/router';
import { People } from '../people.model';
import { FilmService } from '../film.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss']
})
export class CharacterDetailsPage implements OnInit {
  public character: People;
  public films = [];

  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService,
    private filmService: FilmService
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.peopleService.getCharacter(id).subscribe(data => {
      this.character = data;
      // console.log(data);
      const promises = [];
      data.films.forEach(film => {
        promises.push(this.filmService.getFilm(film));
      });
      forkJoin(promises).subscribe(result => this.films = result);

    });
  }
}
