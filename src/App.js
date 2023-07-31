//import "./App.css";
import Counter from "./Counter";
import MyHeader from "./MyHeader";

function App() {
  const style = {
    App: {
      backgroundColor: "black",
    },
    h2: {
      color: "white",
    },
  };

  const number = 5;

  return (
    <div>
      <MyHeader />
      <Counter />
    </div>
  );
}

export default App;
