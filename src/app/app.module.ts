// Angular;
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// 
import { FormsModule } from "@angular/forms";
import { PostsModule } from "./posts/posts.module";
import { HomeComponent } from './components/frames/home/home.component';
import { ListComponent } from './posts/post-list/list.component';
import { ErrorComponent } from './components/shared/error/error.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { CreateComponent } from './posts/post-create/create.component';
import { ProfileComponent } from './user/user-profile/profile.component';

// (todo: remove all of those imports at next commit)
import { LoginComponent } from './user/user-login/login.component';
import { SigninComponent } from './user/user-sign-in/signin.component';


// Material Design Imports (todo: replace every those imports at once component)
import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from "@angular/material/button-toggle";

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
