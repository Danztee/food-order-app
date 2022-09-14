import React from "react";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Jollof and Fried Rice",
    description:
      "long-grain rice, tomatoes, onions, spices, vegetables and chicken",
    price: 12000,
  },
  {
    id: "m2",
    name: "Yam and Egg",
    description:
      "succulent boiled yam and fried eggs garnished with vegetables and sardines",
    price: 6000,
  },
  {
    id: "m3",
    name: "Amala and Ewedu",
    description: "Nigeria Food made of cassava flour.",
    price: 9000,
  },
  {
    id: "m4",
    name: "Beans and Bread",
    description: "a rolled-up loaf of bread with a bean pottage filling.",
    price: 5000,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
