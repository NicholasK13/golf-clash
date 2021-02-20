import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { GolfConstants } from "./golf.constants";
import { forkJoin, Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { Club } from "../entity/club";
import { Drivers } from "../entity/drivers";
import { Woods } from "../entity/wood";
import { LongIrons } from "../entity/long-iron";
import { ShortIrons } from "../entity/short-iron";
import { Wedges } from "../entity/wedges";
import { RoughIrons } from "../entity/rough-irons";
import { SandWedges } from "../entity/sand-wedges";
import { FormGroup, Validators, FormControl } from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class GolfService {
  constructor(private http: HttpClient) {}

  public clubsMap = new Map<string, Club>();

  fetchBag(): Observable<any> {
    return this.http.get("/assets/my_bag.json");
  }

  fetchClubConfigs(): Observable<any> {
    return forkJoin(
      this.http
        .get(GolfConstants.DRIVERS_URL)
        .pipe(
          tap((res: []) =>
            res.forEach((e: any) =>
              this.clubsMap.set(
                e.name,
                new Drivers(e.name, e.accuracy, e.power)
              )
            )
          )
        ),
      this.http
        .get(GolfConstants.WOODS_URL)
        .pipe(
          tap((res: []) =>
            res.forEach((e: any) =>
              this.clubsMap.set(e.name, new Woods(e.name, e.accuracy, e.power))
            )
          )
        ),
      this.http
        .get(GolfConstants.LONG_IRONS_URL)
        .pipe(
          tap((res: []) =>
            res.forEach((e: any) =>
              this.clubsMap.set(
                e.name,
                new LongIrons(e.name, e.accuracy, e.power)
              )
            )
          )
        ),
      this.http
        .get(GolfConstants.SHORT_IRONS_URL)
        .pipe(
          tap((res: []) =>
            res.forEach((e: any) =>
              this.clubsMap.set(
                e.name,
                new ShortIrons(e.name, e.accuracy, e.power)
              )
            )
          )
        ),
      this.http
        .get(GolfConstants.WEDGES_URL)
        .pipe(
          tap((res: []) =>
            res.forEach((e: any) =>
              this.clubsMap.set(e.name, new Wedges(e.name, e.accuracy, e.power))
            )
          )
        ),
      this.http
        .get(GolfConstants.ROUGH_IRONS_URL)
        .pipe(
          tap((res: []) =>
            res.forEach((e: any) =>
              this.clubsMap.set(
                e.name,
                new RoughIrons(e.name, e.accuracy, e.power)
              )
            )
          )
        ),
      this.http
        .get(GolfConstants.SAND_WEDGES_URL)
        .pipe(
          tap((res: []) =>
            res.forEach((e: any) =>
              this.clubsMap.set(
                e.name,
                new SandWedges(e.name, e.accuracy, e.power)
              )
            )
          )
        )
    );
  }

  ringsForClub(
    percent: number,
    ball: number,
    club: Club,
    level: number
  ): number {
    let ringsPerWind =
      ((3 - club.accuracy[level] / 50) *
        (club.MAX /
          (club.MIN + (club.power[level] - club.MIN) * (percent / 100)))) /
      ball;
    if (club.type === GolfConstants.ROUGH_IRON) {
      ringsPerWind = ringsPerWind * 1.45; // applying scaling factor for RI
    }
    if (club.type === GolfConstants.SAND_WEDGE) {
      ringsPerWind = ringsPerWind * 1.15; // applying scaling factor for SW
    }
    return ringsPerWind;
  }

  ringsPerWind(wind: number, elevation: number, rings: number): number {
    return Math.round(((wind * (1 + elevation / 100)) / rings) * 100) / 100;
  }

  determinePowerBall(index: number): number {
    switch (index) {
      case 0:
        return GolfConstants.POWER_0;
      case 1:
        return GolfConstants.POWER_1;
      case 2:
        return GolfConstants.POWER_2;
      case 3:
        return GolfConstants.POWER_3;
      case 4:
        return GolfConstants.POWER_4;
      case 5:
        return GolfConstants.POWER_5;
    }
  }

  createWindForm(): FormGroup {
    return new FormGroup({
      wind: new FormControl("", [Validators.required]),
      slider: new FormControl("", [Validators.required]),
      elevation: new FormControl("", [Validators.required])
    });
  }

  extractWindForm(windForm: FormGroup): any {
    return {
      wind: windForm.controls["wind"].value,
      slider: windForm.controls["slider"].value,
      elevation: windForm.controls["elevation"].value
    };
  }
}
