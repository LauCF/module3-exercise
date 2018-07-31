import { Routes } from "@angular/router";
import { PhoneListComponent } from "./phone-list/phone-list.component";
import { PhoneDetailComponent } from "./phone-detail/phone-detail.component";
import { PhoneNewComponent } from "./phone-new/phone-new.component"; 
import { PhoneEditComponent } from "./phone-edit/phone-edit.component";

export const routes: Routes = [
  { path: '', component: PhoneListComponent },
  { path: 'new', component: PhoneNewComponent},
  { path: 'phone/:id', component: PhoneDetailComponent },
  { path: 'edit/:id', component: PhoneEditComponent }
];
