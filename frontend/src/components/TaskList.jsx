import TaskCard from "./TaskCard";
import EmptyState from "./EmptyState";

const TaskList = ({ tasks, onEdit, onDelete, onComplete, onView }) => {
  if (tasks.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="grid task-grid">
      {tasks.map((task) => (
        <div
          key={task._id}
          className="
            col-12
            sm:col-12
            md:col-6
            xl:col-4
            flex
            align-items-stretch
          "
        >
          <TaskCard
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
            onComplete={onComplete}
            onView={onView}
          />
        </div>
      ))}
    </div>
  );
};

export default TaskList;
