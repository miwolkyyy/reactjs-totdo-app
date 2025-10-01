import { useState } from "react";
import Input from "../../Components/Input/Input";
import List from "../List/List";
import { useEffect } from "react";

function Todo() {
  const DUMMY = "DUMMY-data";
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem(DUMMY)) || [];
  });
  const [tc, setTc] = useState(0);
  useEffect(() => {
    localStorage.setItem(DUMMY, JSON.stringify(tasks));
    const complete = tasks.filter((item) => item.completed === true).length;
    setTc(complete);
  }, [tasks]);

  //func create data
  const setData = (e) => {
    e.preventDefault();
    if (e.target.input.value === "") return alert("please add a task first");
    const data = {
      task: e.target.input.value,
      id: tasks.length + 1,
      completed: false,
    };
    console.log(data);
    setTasks([...tasks, data]);
    e.target.input.value = "";
  };

  // update complicated
  const updateComplicated = (id) => {
    const setId = tasks.find((item) => item.id === id);
    setId.completed = !setId.completed;
    const newTask = [...tasks];
    console.log(setId);
    setTasks(newTask);
  };

  // func move index
  const move = (currentIndex, updateIndex) => {
    const currentData = tasks[currentIndex];
    const updateData = tasks[updateIndex];

    tasks[currentIndex] = { ...currentData, id: updateData.id };
    tasks[updateIndex] = { ...updateData, id: currentData.id };

    const newTask = [...tasks];
    setTasks(newTask);
    console.table(newTask);
  };

  //func renove index
  const remove = (id) => {
    if (confirm("Are you sure you want to delete the task?")) {
      setTasks(tasks.filter((item) => item.id != id));
    }
  };

  return (
    <>
      <div className="w-xl h-[720px] bg-white/25  rounded-md">
        <p className="text-5xl text-orange-500 uppercase font-bold text-shadow-md p-4">
          🗒️todo app
          <span
            className="text-xl pl-2
           absolute"
          >
            {tc}/{tasks.length}
          </span>
        </p>
        <Input setData={setData} />
        <List tasks={tasks} updateComplicated={updateComplicated} move={move} remove={remove} />
      </div>
    </>
  );
}

export default Todo;
