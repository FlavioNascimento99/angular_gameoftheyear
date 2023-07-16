import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from "@angular/forms";
import { PostsModule } from "./components/posts/posts.module";
import { ListComponent } from './components/posts/feed/list.component';
import { HomeComponent } from './components/home/home.component';
import { CreateComponent } from './components/posts/create/create.component';
import { HeaderComponent } from './components/shared/header/header.component';

import { MatMenuModule } from "@angular/material/menu";
import { MatListModule } from "@angular/material/list";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from "@angular/material/badge";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from "@angular/material/select";
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from "@angular/material/button-toggle";

// import {firebaseConfig} from "../firebase.config";
// import {AngularFireModule} from "@angular/fire/compat";
// import {AngularFirestoreModule} from "@angular/fire/compat/firestore";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CreateComponent,
    HomeComponent,
    ListComponent,
  ],
    imports: [
        // AngularFireModule.initializeApp(firebaseConfig),
        // AngularFirestoreModule,
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
        MatMenuModule,
        MatBadgeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
