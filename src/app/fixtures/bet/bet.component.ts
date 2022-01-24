import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { FixtureService } from "../../_services/fixture.service";
import { UserService } from "../../_services/user.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-bet",
  templateUrl: "./bet.component.html",
  styleUrls: ["./bet.component.css"]
})
export class BetComponent implements OnInit {
  public fixture;
  public user;
  matchId: number;
  userId: string;
  public bettingForm: FormGroup;
  errMsg: string;

  constructor(
    private data: FixtureService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    this.data.getDataById(id).subscribe(resp => {
      this.fixture = resp;
    });

    this.userService.getUserById().subscribe(data => {
      this.user = data;
    });

    //getting userId from localStorage
    this.userId = localStorage.getItem("userId");

    this.bettingForm = this.fb.group({
      userId: this.userId,
      matchId: ["", Validators.required],
      cardInfo: ["", Validators.required],
      homeScore: ["", Validators.required],
      awayScore: ["", Validators.required],
      amount: ["", Validators.required]
    });
  }

  submit() {
    if (this.bettingForm.invalid) {
      this.errMsg = "invalid Form";
      return;
    }
    this.userService.placeABet(this.bettingForm.value).subscribe(() => {
      console.log(this.bettingForm.value);
      this.toastr.success("Bet placed Successful");
      this.router.navigateByUrl("/fixture/fixture");
    });
  }
}
