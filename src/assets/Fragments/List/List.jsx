import Listbuttons from "../../Components/ListButton/Listbuttons";

function List(props) {
  const { tasks, updateComplicated, move, remove } = props;

  tasks.sort((a, b) => b.id - a.id);
  return (
    <>
      <div
        className="h-[576px]  overflow-x-hidden scroll-smooth
        [&::-webkit-scrollbar]:w-2
        [&::-webkit-scrollbar-track]:bg-white/25
        [&::-webkit-scrollbar-track]:rounded-md
      [&::-webkit-scrollbar-thumb]:bg-purple-600/55
      [&::-webkit-scrollbar-thumb]:rounded-md
      "
      >
        <ul className="flex flex-col gap-4 p-4">
          {tasks.map((task, id) => {
            return (
              <li key={id} className=" w-full  h-16 rounded-md flex items-center px-2 justify-between bg-white/55 ">
                <div className="flex items-center gap-3">
                  <input onChange={() => updateComplicated(task.id)} type="checkbox" className=" appearance-none   w-5 h-5 rounded-full bg-fuchsia-400 checked:bg-orange-500 peer" />
                  <p className="text-2xl text-amber-600 font-semibold peer-checked:line-through peer-checked:text-amber-600/50">
                    {task.task}-{task.id}
                  </p>
                </div>
                <Listbuttons id={task.id} tasks={tasks} move={move} remove={remove} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default List;
