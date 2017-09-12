# Angular 101 :fire:

[ << Anterior](https://github.com/Shinkei/angular-firebase-tutorial)


## Ahora que tenemos lista la configuración vamos a crear el servicio de firebase

![set the fire](http://i.imgur.com/0hEwe8b.gif)

### 1) Crear el servicio con angular/cli
```
ng g service services/firebase
```

### 2) Agregar los imports a nuestro archivo services/firebase.service.ts.
```javascript
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
```

### 3) Crear las variables para representar a nuestras personas
> Antes del constructor agregar:
```javascript 
people: FirebaseListObservable<Person[]>;
person: FirebaseObjectObservable<Person>;
```
> estas variables representaran a la lista de personas y a una persona especifica que guardaremos en nuestra base de  datos firebase.

### 4) Inyectamos en nuestro constructor AngularFire
```javascript
constructor(private angularFire: AngularFireDatabase) { }
```

### 5) Creamos una interfaz para representar a nuestra persona
> la interfaz tendrá un key que es obligatorio para identificar el registro en firebase ademas de nombre y apellido, esto lo agregamos al final del archivo, justo después de que termina la clase
```javascript
interface Person{
  $key?: string;
  name?: string;
  lastname?: string;
}
```

### 6) Creamos los métodos respectivos para consultar y guardar una persona en firebase
> estos métodos se pondrán después del constructor
```javascript
  getPeople(){
    this.people = this.angularFire.list('/people') as FirebaseListObservable<Person[]>;
    return this.people;
  }

  getPerson(id){
    this.person = this.angularFire.object('/people/' + id) as FirebaseObjectObservable<Person>;
    return this.person;
  }

  addPerson(person){
    this.angularFire.list('/people').push(person);
}
```
### 7) Agregar nuestro servicio a la lista de providers
> **app.module.ts**
> dentro de la lista de provider importar y agregar nuestro sevicio
```javascript
import { FirebaseService } from './services/firebase.service';
```
```javascript
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
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
```

[Siguiente  >> ](https://github.com/Shinkei/angular-firebase-tutorial/tree/step2)

