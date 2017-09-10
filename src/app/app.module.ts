import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AddPersonComponent } from './components/add-person/add-person.component';

import { FirebaseService } from './services/firebase.service';
import { PeopleComponent } from './components/people/people.component';
import { PersonComponent } from './components/person/person.component';

const appRoutes: Routes = [
  {path: '', component: PeopleComponent},
  {path: 'add-person', component: AddPersonComponent},
  {path: 'person/:id', component: PersonComponent}
];

export const firebaseConfig = {
  apiKey: 'AIzaSyCiaoO7krCmrIg3lwmHcwkzF5GFlYeVvgc',
  authDomain: 'nagularcharacters.firebaseapp.com',
  databaseURL: 'https://nagularcharacters.firebaseio.com',
  projectId: 'nagularcharacters',
  storageBucket: 'nagularcharacters.appspot.com',
  messagingSenderId: '120843569706'
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddPersonComponent,
    PeopleComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
