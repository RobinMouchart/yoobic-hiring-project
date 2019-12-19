import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../people.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})

export class ListPage implements OnInit {

  private selectedItem: any;
  private chapters = [];

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit() {
    this.peopleService.getPeople().subscribe(data => console.log(data));
  }

}
