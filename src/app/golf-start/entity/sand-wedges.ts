import { Club } from "./club";
import { GolfConstants } from "../utils/golf.constants";

export class SandWedges extends Club {
  constructor(name: string, acc: number[], power: number[]) {
    super(
      name,
      acc,
      power,
      GolfConstants.SAND_WEDGE,
      GolfConstants.SAND_WEDGE_MAX_POWER,
      GolfConstants.SAND_WEDGE_MIN_POWER
    );
  }
}
