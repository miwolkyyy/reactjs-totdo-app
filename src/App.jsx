import "./App.css";
import Todo from "./assets/Fragments/Todo/Todo";

function App() {
  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-br from-purple-600 to-fuchsia-400 flex items-center justify-center">
        <Todo />
      </div>
    </>
  );
}

export default App;
