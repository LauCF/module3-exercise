import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "../../../node_modules/@angular/router";
import { PhoneService } from "../services/phone.service";
import { CommentService } from "../services/comment.service";

@Component({
  selector: "app-phone-detail",
  templateUrl: "./phone-detail.component.html",
  styleUrls: ["./phone-detail.component.css"]
})
export class PhoneDetailComponent implements OnInit {
  phone;
  comments;
  comment;

  constructor(
    private route: ActivatedRoute,
    private phoneService: PhoneService,
    private router: Router,
    private commentService: CommentService
  ) {
    this.route.params.subscribe(params => {
      this.phoneService.get(params.id).subscribe(phone => {
        this.phone = phone;
        this.refreshComments();
      });
    });
  }

  ngOnInit() {}

  refreshComments() {
    this.commentService
      .getComments(this.phone._id)
      .subscribe(comments => (this.comments = comments));
  }

  deletePhone() {
    this.phoneService
      .remove(this.phone._id)
      .subscribe(() => this.router.navigate([""]));
  }

  saveComment() {
    this.commentService
      .saveComment(this.phone._id, this.comment)
      .subscribe(() => this.refreshComments());

    this.comment = '';
  }
}
