import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component'
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  // {path:'', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
