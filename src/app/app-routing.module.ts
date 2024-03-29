import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { CreateComponent } from "./component/posts/create/create.component";
import { HomeComponent } from "./component/home/home.component";
import { ListComponent } from "./component/posts/feed/list.component";
import { CreateNewComponent } from './component/create-new/create-new.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'create', component: CreateComponent},
  {path: 'editing/:id', component: CreateComponent},
  {path: 'feed', component: ListComponent},
  {path: 'new', component: CreateNewComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {

}
