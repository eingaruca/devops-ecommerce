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
