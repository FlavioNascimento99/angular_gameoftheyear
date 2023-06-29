import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CreateComponent } from "./components/posts/create/create.component";
import { HomeComponent } from "./components/home/home.component";
import { ListComponent } from "./components/posts/feed/list.component";

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'create', component: CreateComponent},
  {path: 'feed', component: ListComponent},

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {

}
