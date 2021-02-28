import { Component, OnInit } from "@angular/core";
import { GolfService } from "../utils/golf.service";
import { FormGroup } from "@angular/forms";
import { Club } from "../entity/club";
import { GolfConstants } from "../utils/golf.constants";

@Component({
  selector: "app-golf-start",
  templateUrl: "./golf-start.component.html",
  styleUrls: ["./golf-start.component.css"]
})
export class GolfStartComponent implements OnInit {
  constructor(private golfService: GolfService) { }

  public ballPower = -1;
  bag = {};
  displayClubs;
  power = [false, false, false, false, false, false];
  windForm: FormGroup;
  clubsMap = new Map<string, Club>();
  selection: string;
  level: number = 1;
  searchList: string[];
  isModalOpen: boolean;

  ngOnInit(): void {
    this.golfService.fetchClubConfigs().subscribe(e => {
      this.clubsMap = this.golfService.clubsMap;
      this.searchList = [...this.golfService.clubsMap.keys()];
    });
    this.golfService.fetchBag().subscribe(bag => (this.bag = bag));
    this.initializeForm();
  }

  getAdjustment(): void {
    this.displayClubs = [];
    const formValues = this.golfService.extractWindForm(this.windForm);
    for (const club in this.bag) {
      if (this.bag.hasOwnProperty(club)) {
        // prevents iterating over properties in proto
        const clubName = this.golfService.clubsMap.get(`${club}`);
        const rings = this.golfService.ringsForClub(
          formValues.slider,
          this.ballPower,
          clubName,
          Number(`${this.bag[club]}`) - 1
        );
        const adj = this.golfService.ringsPerWind(
          formValues.wind,
          formValues.elevation,
          rings
        );
        this.displayClubs.push({
          level: this.bag[club],
          club: clubName,
          rings: adj
        });
      }
    }
  }

  clear(): void {
    this.displayClubs = undefined;
    this.initializeForm();
  }

  selectPower(index: number): void {
    this.power = [false, false, false, false, false, false];
    this.power[index] = true;
    this.power
      .filter(e => !this.power[index])
      .forEach((e, i) => (this.power[i] = false));
    this.ballPower = this.golfService.determinePowerBall(index);
  }

  initializeForm(): void {
    this.windForm = this.golfService.createWindForm();
  }

  determineBgColor(club: Club) {
    switch (club.type) {
      case GolfConstants.DRIVER:
        return "table-danger";
      case GolfConstants.WOOD:
        return "table-success";
      case GolfConstants.LONG_IRON:
        return "table-warning";
      case GolfConstants.SHORT_IRON:
        return "table-active";
      case GolfConstants.WEDGE:
        return "table-primary";
      default:
        return "table-light";
    }
  }

  // Modal changes

  modalAddEnabled(): boolean {
    const club = this.clubsMap.get(this.selection);
    return !(club && this.level <= club.power.length && this.level >= 1);
  }

  onCancel() {
    this.isModalOpen = false;
  }

  onAdd() {
    this.bag[this.clubsMap.get(this.selection).name] = this.level;
    console.log(this.bag)
    this.isModalOpen = false;
  }

}
