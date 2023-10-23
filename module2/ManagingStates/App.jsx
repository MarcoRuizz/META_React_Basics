/*
    Using a context API you can easily manage the state of your application, passing it to the components that need it
    without having to pass it through all the components in the middle.
*/

import React from "react";
import { MealsProvider } from "./providers/MealsProvider";
import { MealsLists } from "./components/MealsList";
import { Counter } from "./components/Counter";

function App() {
  return (
    <div>
      <MealsProvider>
        <MealsLists />
        <Counter />
      </MealsProvider>
    </div>
  );
}

export default App;
