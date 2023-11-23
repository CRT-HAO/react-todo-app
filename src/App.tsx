import { useState } from "react";
import Todo from "./Todo";

const App = () => {
  type Task = {
    id: number;
    name: string;
    checked: boolean;
  };

  const [todolist, setTodolist] = useState<Task[]>([
    { id: 0, name: "todolist", checked: true },
  ]);

  const [newTaskName, setNewTaskName] = useState("");

  return (
    <main className="w-screen p-6 flex flex-col flex-nowrap items-center">
      <h1 className="text-6xl bold">Todolist</h1>
      <div className="h-4" />
      <div>
        <ul>
          {todolist.map((todo, index) => (
            <Todo
              key={todo.id}
              name={todo.name}
              checked={todo.checked}
              onCheckChange={(checked) => {
                const tmp = [...todolist];
                tmp[index].checked = checked;
                setTodolist(tmp);
              }}
              onDelete={() => {
                const tmp = [...todolist];
                setTodolist(tmp);
              }}
            />
          ))}
        </ul>
      </div>
      <div className="h-4" />
      <div className="w-1/2 text-center">
        <input
          type="text"
          placeholder="Task name"
          className="bg-gray-200 p-2 hover:bg-gray-300"
          value={newTaskName}
          onChange={(value) => setNewTaskName(value.target.value)}
        />
        <div className="inline-block w-4" />
        <button
          className="bg-black text-white p-2 pl-4 pr-4"
          onClick={() => {
            if (newTaskName.length == 0) return;
            setTodolist([
              ...todolist,
              { id: todolist.length, name: newTaskName, checked: false },
            ]);
          }}
        >
          Add
        </button>
      </div>
    </main>
  );
};

export default App;
