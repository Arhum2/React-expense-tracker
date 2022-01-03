import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Netflex Subscription",
      amount: 16.99,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.99, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Candles",
      amount: 999.99,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Ikea",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  return (
    <div>
      <h2>Expense Tracker</h2>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
