# Pasos
https://www.youtube.com/watch?v=l_r9nRJ9YTk

```
ng new frontend --routing
npm install -g @angular/cli
ng serve -o
```

``` 
ng g c components/pages/signup
ng g c components/pages/signin
// Las tareas a las que se puede acceder sin autenticarse
ng g c components/pages/tasks
// Las tareas a las que se puede acceder autenticándose
ng g c components/pages/tasks-private
``` 
En **ecommerce\user2\frontend\src\app\app.routes.ts**
```
import { Routes, RouterModule } from '@angular/router';

// Compoennts

import { TasksComponent } from './components/pages/tasks/tasks.component';
import { TasksPrivateComponent } from './components/pages/tasks-private/tasks-private.component';
import { SigninComponent } from './components/pages/signin/signin.component';
import { SignupComponent } from './components/pages/signup/signup.component';

export const routes: Routes = [
    {path: '', redirectTo: '/tasks', pathMatch: 'full'},
    {path: 'tasks', component: TasksComponent},
    {path: 'private', component: TasksPrivateComponent},
    {path: 'login', component: SigninComponent},
    {path: 'signup', component: SignupComponent},
];

```
- En **ecommerce\user2\frontend\src\app\components\partials\header\header.component.ts** preparar los imports
```
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}

```
- Por ejemplo: **ecommerce\user2\frontend\src\app\components\partials\header\header.component.html**
```

<div>
    <ul>
        <li>
            <a routerLink="/tasks"> Tasks</a>
        </li>
        <li>
            <a routerLink="/private"> Private</a>
        </li>
        <li>
            <a routerLink="/signup"> SignUp </a>
        </li>
        <li>
            <a routerLink="/login"> SignIn </a>
        </li>
    </ul>

</div>
```