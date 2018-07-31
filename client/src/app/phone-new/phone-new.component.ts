import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../services/phone.service';
import { Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-phone-new',
  templateUrl: './phone-new.component.html',
  styleUrls: ['./phone-new.component.css']
})
export class PhoneNewComponent implements OnInit {

  newPhone = {
    name: '',
    brand: '',
    image: '',
    specs: ''
  };

  constructor(private phoneService: PhoneService, private router:Router) { }

  ngOnInit() {
  }

  submit() {
    this.phoneService.newPhone(this.newPhone).subscribe(() => this.router.navigate(["/"]))
  }

}
