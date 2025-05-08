# ✅ TypeScript Blog - Interfaces vs Types & Type Interface

 This blog post explpres two powerful features of TypeScript:
 1. **Differences between Interfaces and Types**  
 2. **Understanding Type Inference and its Benefits**  

 Both topics are fundamental for writing clean, scalable, and maintainable TypeScript code.

 ## ✨ 1.what are some differences between interfaces and types in TypeScript?

In TypeScript, both `interface` and `type` can be used to describe the shape of data. While they often appear similar, there are important differences between them.

### ✅ Interfaces
An `interface` is typically used to define the shape of objects and is often implemented by classes.

```ts
interface Car {
  make: string;
  model: string;
  year: number;
}

const myCar: Car = {
  make: "Toyota",
  model: "Corolla",
  year: 2021,
};

✅ Types

A type can define not only object structures but also unions, intersections, primitives, and function signatures.

✨ When to Use What?
Use interface when you're describing the shape of objects and expect them to be extended or implemented.

Use type when you need more flexibility (e.g., unions, intersections, or working with primitives/functions).

✅  2. What is type inference in TypeScript? Why is it helpful?

Type inference in TypeScript is the process by which the TypeScript compiler automatically determines the type of a variable, expression, or function return value without the need for explicit type annotations.

🔍 Example:
let name = "Ersa";  // inferred as string
let count = 5;      // inferred as number
In the above code, TypeScript infers:
name as string
count as number

✅ Why is Type Inference Helpful?
1.Reduces Code Verbosity
You don't need to annotate every variable with a type—TypeScript figures it out.

2.Improves Developer Experience
Helps with better IntelliSense, code suggestions, and error checking in editors.
3.Maintains Type Safety
Even without explicit annotations, the compiler still enforces type rules.
4.Speeds Up Development
Less boilerplate and quicker prototyping with strong typing benefits.

