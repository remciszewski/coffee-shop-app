import classes from "./AvailableCoffee.module.css";
import Card from "../UI/Card";
import CoffeeItem from "./CoffeeItem/CoffeeItem";

const DUMMY_COFFEE = [
  {
    id: "m1",
    name: "Melitta BellaCrema Espresso 1kg",
    description: "100% Arabica",
    price: 10.99,
  },
  {
    id: "m2",
    name: "Melitta BellaCrema Speciale 1kg",
    description: "80% Arabica",
    price: 11.99,
  },
  {
    id: "m3",
    name: "L'Antico Riserva Nero 1kg",
    description: "90% Arabica",
    price: 25.99,
  },
  {
    id: "m4",
    name: "Diemme Oro 1kg",
    description: "100% Arabica",
    price: 24.99,
  },
];

const AvailableCoffee = () => {
  const coffeeList = DUMMY_COFFEE.map((coffee) => (
    <CoffeeItem
      key={coffee.id}
      id={coffee.id}
      name={coffee.name}
      description={coffee.description}
      price={coffee.price}
    />
  ));

  return (
    <section className={classes.coffees}>
      <Card>
        <ul>{coffeeList}</ul>
      </Card>
    </section>
  );
};

export default AvailableCoffee;
