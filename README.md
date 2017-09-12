# Angular 101 :fire:

[ << Anterior](https://github.com/Shinkei/angular-firebase-tutorial/tree/step2)


## Buen trabajo!, ahora a crear los componentes para interactuar con nuestro servicio y encender nuestra app

![set the fire](https://i.giphy.com/media/zqhZB6bo5FgoE/giphy.gif)

### 1) Crear los componentes con angular/cli
```
ng g component components/people
```
```
ng g component components/person
```
```
ng g component components/add-person
```

### 2) Ajustar nuestro componente add-person
> Lo primero que haremos sera agregar funcionalidad a nuestro componente add-person para así guardar personas en nuestra base de datos.
> En nuestro archivo **components/add-person.component.ts** vamos a:
> 1. agregar el import del Router para regresas a la pagina home.
> 2. crear dos variables que van a representar los campos de nuestro formulario en la vista.
> 3. inyectar FirebaseService y Router.
> 4. crear un nuevo método *onAddSubmit* donde se agregara un objeto nuevo a la base de datos.
```javascript
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
      lastname: this.lastname
    }

    this.firebaseService.addPerson(person);
    this.router.navigate(['']);
  }

}
```
> No olvidemos a **components/add-person.component.html**
```html
<a [routerLink]="['']">Back</a>
<br />
<h2 class="page-header">Add Person</h2>
<form (submit)="onAddSubmit()">
  <div class="form-group">
    <label>Name</label>
    <input class="form-control" type="text" [(ngModel)]="name" name="name" required>
  </div>
  <div class="form-group">
    <label>Lastname</label>
    <input class="form-control" type="text" [(ngModel)]="lastname" name="lastname" required>
  </div>
  <input type="submit" value="submit" class="btn btn-success">
</form>
```

### 3) Ajustar nuestro componente people
> **components/people.component.ts**
> 1. importar nuestro servicio FirebaseSerivce
> 2. crear una variable que representara nuestra lista *observable* de personas
> 3. inyectar nuestro servicio en el constructor.
> 4. en el método *ngOnInit* implementamos la funcionalidad de consultar la lista de personas desde firebase, subscribiendonos a el observable que retorna angularfire
```javascript 
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
```
> **components/people.component.html**
```html
<ul class="list-group">
  <li class="list-group-item" *ngFor="let person of people">
    <a [routerLink] = "['/person/' + person.$key]">
        {{ person.name }}
    </a>
  </li>
</ul>
```

### 4) Ajustar nuestro componente person
>**components/person.component.ts**
>1. importamos nuestro servicio *FirebaseService*, ademas de *Router* y *ActivatedRoute* que nos ayudara a tomar los parámetros de routing.
>2. creamos dos variables id y persona para representar estos datos.
>3. inyectamos FirebaseService y ActivatedRoute.
>4. Implementamos la funcionalidad de consultar una persona por Id en el método *ngOnInit*.
```javascript
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
```
>**components/person.component.html**
```html
<div *ngIf="person">
  <a [routerLink] = "['/']">Go Back</a>
  <br>
  <h2 class="page-header">{{ person.name }}</h2>
  <h4>{{ person.lastname }}</h4>
</div>
```
### 5) Agregamos nuestros componentes a las rutas 
> **app.moodule.ts**
```javascript
const appRoutes: Routes = [
  {path: '', component: PeopleComponent},
  {path: 'add-person', component: AddPersonComponent},
  {path: 'person/:id', component: PersonComponent}
];
```
## Listo! ahora puedes agregar y consultar personas de tu base de datos en firebase.

![buen trabajo](https://i.giphy.com/media/XreQmk7ETCak0/giphy.gif)
