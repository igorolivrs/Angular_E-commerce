export class Products {
  id?: number;
  name: string;
  description: string;
  category: string;
  manufacturer: string;
  imgUrl: string;
  price: number;

  constructor(
    id: number,
    name: string,
    description: string,
    category: string,
    manufacturer: string,
    imgUrl: string,
    price: number
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.category = category;
    this.manufacturer = manufacturer;
    this.imgUrl = imgUrl;
    this.price = price;
  }
}
