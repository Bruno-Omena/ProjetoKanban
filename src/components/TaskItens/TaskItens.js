import "./taskitens.css";
import PropTypes from "prop-types";

export default function TaskItens(id, title, taskState) {
  return <div>(title)</div>;
}
TaskItens.PropTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  TaskState: PropTypes.string.isRequired
};
