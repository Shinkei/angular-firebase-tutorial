import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class FirebaseService {

  people: FirebaseListObservable<Person[]>;
  person: FirebaseObjectObservable<Person>;

  constructor(private angularFire: AngularFireDatabase) { }

  // trae la lista de personas que tenemos guardada en nuestra base de datos
  getPeople(){
    this.people = this.angularFire.list('/people') as FirebaseListObservable<Person[]>;
    return this.people;
  }

  // trae la persona por id
  getPerson(id){
    this.person = this.angularFire.object('/people/' + id) as FirebaseObjectObservable<Person>;
    return this.person;
  }

  // agrega una persona a la base de datos
  addPerson(person){
    this.angularFire.list('/people').push(person);
  }
}

interface Person{
  $key?: string;
  name?: string;
  lastname?: string;
}
