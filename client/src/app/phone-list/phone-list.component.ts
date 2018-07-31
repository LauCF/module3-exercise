import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../services/phone.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {

  phones: Array<any>;

  constructor(private phoneService : PhoneService) { 
    this.phoneService.getList().subscribe(data => this.phones = data);
  }

  ngOnInit() {
  }

}
