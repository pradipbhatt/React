import Counter from "./components/counter";
import Form from "./components/form";
import StateTutorial from "./components/UseState/StateTutorial";

function App() {
  return (
    <div className="App flex flex-col items-center">
      <h1 className="text-grey-800 text-center font-bold mt-4 text-3xl">
        useState
      </h1>
      {/* <Counter />
      <Form /> */}
      <StateTutorial/>
    </div>
  );
}

export default App;