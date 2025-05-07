//Solution for Problem 1
 function formatString(input:string, toUpper: boolean = true): string{
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}

//Solution for Problem 2
 function filterByRating(
    items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
    return items.filter(item => item.rating>=4);
}

//Solution for Problem 3
 function concatenateArrays<T>(...arrays: T[][]): T[]{
    return arrays.flat()
}

//Solution for Problem 4

class Vehicle {
   private make: string;
   private year: number;

   constructor(make: string, year: number){
    this.make = make;
    this.year = year;
   }

  public getInfo(): string{
    return `Make: ${this.make}, Year: ${this.year}`
  }
}

class Car extends Vehicle{
    private model: string;

    constructor(make: string, year: number, model: string){
        super (make,year);
        this.model = model;
    }

    public getModel():string{
        return `Model: ${this.model}`
    }
}

//Solution for Problem 5

function processValue(value: string | number): number{
    return typeof value === "string" ? value.length : value * 2;
}

//Solution for Problem 6

interface Product {
    name: string;
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null{
    if (products.length === 0) return null;
    return products.reduce((prev,current)=> (current.price ? current: prev));

  }
  
  //Solution for Problem 7
  enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  
  function getDayType(day: Day): string{
    return day >= Day.Monday && day <= Day.Friday ? "Weekday" : "Weekend";
  }

  //Solution for Problem 8

  async function squareAsync(n: number): Promise<number>{
    if(n < 0){
        throw new Error("Negative number not allowed");
    }
    return new Promise((resolve)=>{
        setTimeout(() => resolve(n*n), 1000);
    });
  }
  
  