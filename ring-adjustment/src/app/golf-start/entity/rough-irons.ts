import { Club } from "./club";
import { GolfConstants } from "../utils/golf.constants";

export class RoughIrons extends Club {
  constructor(name: string, acc: number[], power: number[]) {
    super(
      name,
      acc,
      power,
      GolfConstants.ROUGH_IRON,
      GolfConstants.ROUGH_IRON_MAX_POWER,
      GolfConstants.ROUGH_IRON_MIN_POWER
    );
  }
}
