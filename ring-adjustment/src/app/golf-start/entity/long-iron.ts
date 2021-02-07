import { Club } from "./club";
import { GolfConstants } from "../utils/golf.constants";

export class LongIrons extends Club {
  constructor(name: string, acc: number[], power: number[]) {
    super(
      name,
      acc,
      power,
      GolfConstants.LONG_IRON,
      GolfConstants.LONG_IRON_MAX_POWER,
      GolfConstants.LONG_IRON_MIN_POWER
    );
  }
}
