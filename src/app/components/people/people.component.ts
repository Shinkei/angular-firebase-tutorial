import { Component, OnInit } from '@angular/core';

import { FirebaseService } from './../../services/firebase.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people: any;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    this.firebaseService.getPeople().subscribe(people => {
      this.people = people;
    });
  }

}
