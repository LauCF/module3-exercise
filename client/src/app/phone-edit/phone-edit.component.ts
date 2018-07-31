import { Component, OnInit } from "@angular/core";
import { PhoneService } from "../services/phone.service";
import { ActivatedRoute, Router } from "../../../node_modules/@angular/router";

@Component({
  selector: "app-phone-edit",
  templateUrl: "./phone-edit.component.html",
  styleUrls: ["./phone-edit.component.css"]
})
export class PhoneEditComponent implements OnInit {
  phone;

  constructor(
    private phoneService: PhoneService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.params.subscribe(params =>
      this.phoneService.get(params.id).subscribe(phone => {this.phone = phone})
    );
  }

  ngOnInit() {}

  submit() {
    this.phoneService.edit(this.phone).subscribe(phone => this.router.navigate(['phone', phone._id]));
  }
}
