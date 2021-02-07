import { Club } from "./club";
import { GolfConstants } from "../utils/golf.constants";

export class Drivers extends Club {
  constructor(name: string, acc: number[], power: number[]) {
    super(
      name,
      acc,
      power,
      GolfConstants.DRIVER,
      GolfConstants.DRIVERS_MAX_POWER,
      GolfConstants.DRIVERS_MIN_POWER
    );
  }
}
