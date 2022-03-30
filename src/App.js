import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Iphone",
    amount: 60000,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "TV",
    amount: 30000,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Groceries",
    amount: 4000,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Investment",
    amount: 10000,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = function (expense) {
    setExpenses(function (prevExpenses) {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
