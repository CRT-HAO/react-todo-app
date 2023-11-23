import "./Todo.css";

type Props = {
  name?: string;
  checked?: boolean;
  onNameChange?: (name: string) => void;
  onCheckChange?: (checked: boolean) => void;
  onDelete?: () => void;
};

const Todo = ({ name, checked, onCheckChange, onDelete }: Props) => {
  return (
    <li className="max-w-full">
      <label className="container">
        <span className={(checked ? "line-through" : "") + " text-ellipsis"}>
          {name}
        </span>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onCheckChange && onCheckChange(!checked)}
        />
        <span className="checkmark"></span>
        <div className="inline-block w-2" />
        <button
          style={{ height: "25px", fontSize: "10px", lineHeight: "10px" }}
          className="inline-block bg-red-400 p-1 text-white hover:bg-red-800"
          onClick={() => onDelete && onDelete()}
        >
          Delete
        </button>
      </label>
    </li>
  );
};

export default Todo;
