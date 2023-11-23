import { useState } from "react";
import Todo from "./Todo";

const App = () => {
  type Task = {
    name: string;
    checked: boolean;
  };

  const [todolist, setTodolist] = useState<Task[]>([
    { name: "Complete the todolist app", checked: true },
  ]);

  const [newTaskName, setNewTaskName] = useState("");

  const handleAddTask = () => {
    if (newTaskName.length == 0) return;
    setTodolist([...todolist, { name: newTaskName, checked: false }]);
    setNewTaskName("");
  };

  const handleDeleteTask = (index: number) => {
    const tmp: Task[] = [];
    for (let i = 0; i < todolist.length; i++) {
      if (i !== index) tmp.push(todolist[i]);
    }
    setTodolist(tmp);
  };

  return (
    <main className="w-screen p-6 flex flex-col flex-nowrap items-center">
      <h1 className="text-6xl bold">Todolist</h1>
      <div className="h-4" />
      <div>
        <ul className="max-w-full">
          {todolist.map((todo, index) => (
            <Todo
              key={`todo-${index}`}
              name={todo.name}
              checked={todo.checked}
              onCheckChange={(checked) => {
                const tmp = [...todolist];
                tmp[index].checked = checked;
                setTodolist(tmp);
              }}
              onDelete={() => handleDeleteTask(index)}
            />
          ))}
        </ul>
      </div>
      <div className="h-4" />
      <div className="w-10/12 text-center sm:w-1/2">
        <input
          type="text"
          placeholder="Task name"
          className="bg-gray-200 p-2 hover:bg-gray-300 outline-none"
          value={newTaskName}
          onChange={(value) => setNewTaskName(value.target.value)}
        />
        <div className="inline-block w-4" />
        <button
          className="bg-black text-white p-2 pl-4 pr-4 hover:bg-gray-700"
          onClick={handleAddTask}
        >
          Add
        </button>
      </div>
    </main>
  );
};

export default App;
