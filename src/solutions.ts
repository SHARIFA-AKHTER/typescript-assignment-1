//Problem-1-solution
 function formatString(input:string, toUpper: boolean = true): string{
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}

//Problem-2-solution
 function filterByRating(
    items: { title: string; rating: number }[]
): { title: string; rating: number }[] {
    return items.filter(item => item.rating>=4);
}

//Problem-3-solution
 function concatenateArrays<T>(...arrays: T[][]): T[]{
    return arrays.flat()
}

//Problem-4-solution

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

//Problem-5-solution

function processValue(value: string | number): number{
    return typeof value === "string" ? value.length : value * 2;
}

