import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { RuleComponent } from './rule/rule.component';
import { UseComponent } from './use/use.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: 'kerketi/about', component: AboutComponent},
  {path: 'kerketi/use', component: UseComponent},
  {path: 'kerketi/rule', component: RuleComponent},
  {path: 'kerketi/contact', component: ContactComponent},
  {path: 'kerketi', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
