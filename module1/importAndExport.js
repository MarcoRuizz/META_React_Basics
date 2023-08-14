// Modules can help you to save and access your code in a more structured way, and in this reading,
//  you'll learn about some foundational concepts of working with JavaScript modules.

// 1 .= Using default exports (only one default export per module)

export default function addTwo(a, b) {
  console.log(a + b);
}

// 2 .= Using named exports (multiple named exports per module)
export function addTwo(a, b) {
  console.log(a + b);
}

export function addThree(a, b, c) {
  console.log(a + b + c);
}

// export { addTwo, addThree };

// Modules can help you to save and access your code in a more structured way, and in this reading,
//  you'll learn about some foundational concepts of working with JavaScript modules.

// 1 .= Using default exports
import addTwo from "./export.js";

// 2 .= Using named exports
import { addTwo } from "./export.js";
