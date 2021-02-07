import { Club } from "./club";
import { GolfConstants } from "../utils/golf.constants";

export class Wedges extends Club {
  constructor(name: string, acc: number[], power: number[]) {
    super(
      name,
      acc,
      power,
      GolfConstants.WEDGE,
      GolfConstants.WEDGE_MAX_POWER,
      GolfConstants.WEDGE_MIN_POWER
    );
  }
}
