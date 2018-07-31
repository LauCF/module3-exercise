import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PhoneListComponent } from './phone-list/phone-list.component';
import {routes} from './routes';
import { PhoneService } from './services/phone.service';
//import { CommentService } from './services/comment.service';
import { PhoneNewComponent } from './phone-new/phone-new.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { CommentService } from './services/comment.service';
import { PhoneEditComponent } from './phone-edit/phone-edit.component';

@NgModule({
   declarations: [
      AppComponent,
      PhoneListComponent,
      PhoneDetailComponent,
      PhoneNewComponent,
      PhoneDetailComponent,
      PhoneEditComponent
   ],
   imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      RouterModule.forRoot(routes)
   ],
  providers: [PhoneService, CommentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
