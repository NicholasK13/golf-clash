import { Club } from "./club";
import { GolfConstants } from "../utils/golf.constants";

export class ShortIrons extends Club {
  constructor(name: string, acc: number[], power: number[]) {
    super(
      name,
      acc,
      power,
      GolfConstants.SHORT_IRON,
      GolfConstants.SHORT_IRON_MAX_POWER,
      GolfConstants.SHORT_IRON_MIN_POWER
    );
  }
}
