import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

import { FixtureService } from "../../_services/fixture.service";
import { UserService } from "../../_services/user.service";

@Component({
  selector: "app-booking",
  templateUrl: "./booking.component.html",
  styleUrls: ["./booking.component.css"]
})
export class BookingComponent implements OnInit {
  public fixtures: any;
  public bookingForm: FormGroup;
  userId: string;
  public booked;
  errMsg: string;

  constructor(
    private data: FixtureService,
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.data.getData().subscribe(data => {
      this.fixtures = data;
    });

    //getting userId from localStorage

    this.userId = localStorage.getItem("userId");

    this.bookingForm = this.fb.group({
      userId: this.userId,
      matchId: ["", Validators.required],
      email: ["", Validators.required],
      cardInfo: ["", Validators.required]
    });
  }

  changeMatchId(e) {
    this.match.setValue(e.target.value);
  }

  get match() {
    return this.bookingForm.get("matchId");
  }

  clicked() {
    if (this.bookingForm.invalid) {
      this.errMsg = "invalid Form";
      return;
    }
    let you = this.bookingForm.value;
    this.data.getDataById(you.matchId).subscribe(resp => {
      this.booked = resp;
    });
  }

  onSubmit() {
    this.userService.bookTicket(this.bookingForm.value).subscribe(data => {
      this.booked = data;
      console.log(this.booked);
      this.toastr.success("Booking placed Successful");
      this.router.navigate(["/fixtures/fixture"]);
    });
  }
}
