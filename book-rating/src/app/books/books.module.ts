import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BookComponent } from './book/book.component';
import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BookDetailsComponent } from './book-details/book-details.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    BookCreateComponent,
    BookDetailsComponent
  ],
  exports: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule
  ]
})
export class BooksModule { }
