import { Club } from "./club";
import { GolfConstants } from "../utils/golf.constants";

export class Woods extends Club {
  constructor(name: string, acc: number[], power: number[]) {
    super(
      name,
      acc,
      power,
      GolfConstants.WOOD,
      GolfConstants.WOODS_MAX_POWER,
      GolfConstants.WOODS_MIN_POWER
    );
  }
}
