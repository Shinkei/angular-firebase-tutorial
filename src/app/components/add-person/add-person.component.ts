import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  name: string;
  lastname: string;

  constructor(private firebaseService: FirebaseService, private router: Router) { }

  ngOnInit() {
  }

  onAddSubmit(){
    let person = {
      name: this.name,
      race: this.lastname
    }

    this.firebaseService.addPerson(person);
    // this.router.navigate(['/characters']);
  }

}
