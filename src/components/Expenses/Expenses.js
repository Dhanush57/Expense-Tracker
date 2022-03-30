import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = function (selectedYear) {
    return setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(function (expense) {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        {filteredExpenses.length === 0 ? (
          <div style={{ color: "white", textAlign: "center" }}>
            No Expenses found
          </div>
        ) : (
          filteredExpenses.map(function (expense) {
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              ></ExpenseItem>
            );
          })
        )}
      </Card>
    </div>
  );
}

export default Expenses;
