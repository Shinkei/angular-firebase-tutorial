import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { FirebaseService } from './../../services/firebase.service';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  id: any;
  person: any;

  constructor(private firebaseService: FirebaseService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];

    this.firebaseService.getPerson(this.id)
      .subscribe(person => {
        this.person = person;
        console.log(person);
      });
  }

}
