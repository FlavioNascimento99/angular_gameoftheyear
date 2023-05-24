import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CreateComponent } from "./posts/post-create/create.component";
import {HomeComponent} from "./components/frames/home/home.component";
import {ErrorComponent} from "./components/shared/error/error.component";
import {ListComponent} from "./posts/post-list/list.component";
import {LoginComponent} from "./user/user-login/login.component";
import {SigninComponent} from "./user/user-sign-in/signin.component";

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'create', component: CreateComponent},
  {path: 'erro', component: ErrorComponent},
  {path: 'list', component: ListComponent},
  {path: 'user-login', component: LoginComponent},
  {path: 'user-sign-in', component: SigninComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {

}
