//function convert to uppercase or lowercase
 function formatString(input:string, toUpper: boolean = true): string{
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}

//function to filter items with a rating of 4  or higher
 function filterByRating(
    items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
    return items.filter(item => item.rating>=4);
}

//generic function to concatenate multiple arrays into a single array
 function concatenateArrays<T>(...arrays: T[][]): T[]{
    return arrays.flat()
}

//car extends vehicle with additional model property

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

//function to process string a number

function processValue(value: string | number): number{
    return typeof value === "string" ? value.length : value * 2;
}

//function to find array of product objects

interface Product {
    name: string;                                             
    price: number;
  }
  
  function getMostExpensiveProduct(products: Product[]): Product | null{
    if (products.length === 0) return null;
    return products.reduce((prev,current)=> (current.price ? current: prev));

  }                     
  
  //enum representing of the day week,and function to determine day is weekday or weekend
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

  //throws an error if the input number is nagative

  async function squareAsync(n: number): Promise<number>{
    if(n < 0){
        throw new Error("Negative number not allowed");
    }
    return new Promise((resolve)=>{
        setTimeout(() => resolve(n*n), 1000);
    });
  }
  
  