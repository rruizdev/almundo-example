export class Hotel {
  amenities: string[];
  id: string;
  image: string;
  name: string;
  price: number;
  stars: number;

  constructor() { }

  // to-do: Use this!
  arrayStars(): number[] {        
    return Array(this.stars);
  }
}
