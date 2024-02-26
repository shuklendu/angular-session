import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, DatePipe } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PipesComponent } from './pipes/pipes.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  { path: '', redirectTo: '/parent', pathMatch: 'full' },
  { path: 'parent', component: ParentComponent },
  { path: 'pipes', component: PipesComponent },
  { path: 'books', component: BooksComponent },
  // Add additional routes as needed
];

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    PipesComponent,
    BooksComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  bootstrap: [AppComponent], // AppComponent is the root component
})
export class AppModule {}
