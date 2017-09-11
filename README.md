# Angular 101 :fire:
> En este tutorial haremos uso de angular y firebase por medio de la angularfire una librería que nos permitirá tener acceso desde nuestra aplicación a la base de datos en tiempo real.

## Así que vamos a dar el primer paso
![first step](https://i2.wp.com/static.fjcdn.com/gifs/That+first+step+scary+as+fuck+i+know_3eabbb_4028841.gif)

### 1) Instalar firebase y angularfire
> ```npm install -S firebase angularfire2```

### 2) Ir a la consola de firebase y copiar la configuración de la base de datos para la conexión.
> Agregar la configuracion de firebase en el archivo app.module.ts asi:
 ```javascript
export const firebaseConfig = {
  apiKey: 'AbCdEfGhIjKlMnOpQrStUvWxYz',
  authDomain: '<databasename>.firebaseapp.com',
  databaseURL: 'https://<databasename>.firebaseio.com',
  projectId: '<databasename>',
  storageBucket: '<databasename>.appspot.com',
  messagingSenderId: '1234567890'
};```

### 3) Importar los módulos necesarios de angularfire y agregarlos a nuestro app.module
```javascript 
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
```
### 4) Agregar los módulos a la sección de imports de nuestro app.module
```javascript
imports: [
  BrowserModule,
  FormsModule,
  RouterModule.forRoot(appRoutes),
  AngularFireModule.initializeApp(firebaseConfig),
  AngularFireDatabaseModule
]```

[Siguiente  >> ](https://github.com/Shinkei/angular-firebase-tutorial/tree/step1)
