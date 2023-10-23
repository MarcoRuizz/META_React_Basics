import React from "react";

// context provider: the context is stored here
const MealsContext = createContext();

const todaysMeals = ["breakfast", "lunch", "dinner"];

const MealsProvider = ({ children }) => {
  const [meals, setMealsList] = useState(todaysMeals);

  return (
    <MealsContext.Provider value={{ meals }}>{children}</MealsContext.Provider>
  );
};

export const useMealsListContext = () => useContext(MealsContext);

export default MealsProvider;
