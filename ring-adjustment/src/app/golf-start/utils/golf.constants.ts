export abstract class GolfConstants {
  private constructor() {}

  // club types
  static readonly DRIVER = "DRIVER";
  static readonly WOOD = "WOOD";
  static readonly LONG_IRON = "LONG_IRON";
  static readonly SHORT_IRON = "SHORT_IRON";
  static readonly WEDGE = "WEDGE";
  static readonly ROUGH_IRON = "ROUGH_IRON";
  static readonly SAND_WEDGE = "SAND_WEDGE";

  // clubs range
  static readonly DRIVERS_MAX_POWER = 240;
  static readonly DRIVERS_MIN_POWER = 180;
  static readonly WOODS_MAX_POWER = 180;
  static readonly WOODS_MIN_POWER = 135;
  static readonly LONG_IRON_MAX_POWER = 135;
  static readonly LONG_IRON_MIN_POWER = 90;
  static readonly SHORT_IRON_MAX_POWER = 90;
  static readonly SHORT_IRON_MIN_POWER = 45;
  static readonly WEDGE_MAX_POWER = 45;
  static readonly WEDGE_MIN_POWER = 0;
  static readonly ROUGH_IRON_MAX_POWER = 135;
  static readonly ROUGH_IRON_MIN_POWER = 0;
  static readonly SAND_WEDGE_MAX_POWER = 120;
  static readonly SAND_WEDGE_MIN_POWER = 0;

  // ball power
  static readonly POWER_0 = 1.0;
  static readonly POWER_1 = 1.03;
  static readonly POWER_2 = 1.05;
  static readonly POWER_3 = 1.07;
  static readonly POWER_4 = 1.1;
  static readonly POWER_5 = 1.13;

  // api's
  static readonly DRIVERS_URL = "/assets/api-json/drivers.json";
  static readonly WOODS_URL = "/assets/api-json/woods.json";
  static readonly LONG_IRONS_URL = "/assets/api-json/long-irons.json";
  static readonly SHORT_IRONS_URL = "/assets/api-json/short-irons.json";
  static readonly WEDGES_URL = "/assets/api-json/wedges.json";
  static readonly ROUGH_IRONS_URL = "/assets/api-json/rough-irons.json";
  static readonly SAND_WEDGES_URL = "/assets/api-json/sand-wedges.json";
  
  // sort
  static readonly ORDER = {
    [GolfConstants.DRIVER]: 1,
    [GolfConstants.WOOD]: 2,
    [GolfConstants.LONG_IRON]: 3,
    [GolfConstants.SHORT_IRON]: 4,
    [GolfConstants.WEDGE]: 5,
    [GolfConstants.ROUGH_IRON]: 6,
    [GolfConstants.SAND_WEDGE]: 7
  }
}
