import "./tasklist.css";
import PropTypes from "prop-types";
import TaskItens from "./components/TaskItens/TaskItens";

export default function TaskList({ title, onAddTask, tasks }) {
  const addTask = () => {
    onAddTask("Nova tarefa", "Pendente");
  };
  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {tasks.map((task) => {
          return (
            <Taskitens
              key={task.id}
              id={task.id}
              title={task.title}
              taskstate={task.state}
            />
          );
        })}
        <button onClick={onAddTask}> Adicionar Tarefa </button>
      </div>
    </div>
  );
}
TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  task: PropTypes.array.isRequired
};
