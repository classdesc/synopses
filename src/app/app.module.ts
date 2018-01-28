import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { PostsComponent } from "./posts/posts.component";
import { BookComponent } from "./book/book.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    BookComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
