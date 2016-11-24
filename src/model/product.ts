/**
 * Model class, which represent single product on table.
 */
export class Product {
  public id:number;

  constructor(
    public name: string,
    public price: number,
    public image: string,
    public quality: number,
    public description: string,
    public quantity: number,
    public detal: boolean
  ) {  }
}
