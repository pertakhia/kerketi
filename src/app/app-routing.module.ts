import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { RuleComponent } from './rule/rule.component';
import { UseComponent } from './use/use.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: 'about', component: AboutComponent},
  {path: 'use', component: UseComponent},
  {path: 'rule', component: RuleComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
