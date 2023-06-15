import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from "./app-routing.module";
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './components/shared/header/header.component';
import { ProfileComponent } from './user/user-profile/profile.component';
import { LoginComponent } from './user/user-login/login.component';
import { ErrorComponent } from './components/shared/error/error.component';
import { MatCardModule } from "@angular/material/card";
import { CreateComponent } from './posts/post-create/create.component';
import { MatInputModule} from "@angular/material/input";
import { MatSelectModule} from "@angular/material/select";
import { HomeComponent } from './components/frames/home/home.component';
import { ListComponent } from './posts/post-list/list.component';
import { SigninComponent } from './user/user-sign-in/signin.component';
import {FormsModule} from "@angular/forms";
import {MatListModule} from "@angular/material/list";
import {PostsModule} from "./posts/posts.module";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatMenuModule} from "@angular/material/menu";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileComponent,
    LoginComponent,
    ErrorComponent,
    CreateComponent,
    HomeComponent,
    ListComponent,
    SigninComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatInputModule,
        MatSelectModule,
        AppRoutingModule,
        FormsModule,
        MatListModule,
        CommonModule,
        PostsModule,
        MatButtonToggleModule,
        MatMenuModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
