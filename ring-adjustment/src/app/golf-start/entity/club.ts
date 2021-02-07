export abstract class Club {
  constructor(
    public name: string,
    public accuracy: number[],
    public power: number[],
    public type: string,
    public MAX: number,
    public MIN: number
  ) {}
}
