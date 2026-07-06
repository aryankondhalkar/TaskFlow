import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";

const statusSeverity = {
  todo: "warning",
  "in-progress": "info",
  done: "success",
};

const statusLabel = {
  todo: "To Do",
  "in-progress": "In Progress",
  done: "Done",
};

const prioritySeverity = {
  low: "success",
  medium: "warning",
  high: "danger",
};

const priorityLabel = {
  low: "Low",
  medium: "Medium",
  high: "High",
};

const TaskDetailsDialog = ({ visible, onHide, task, onEdit }) => {
  if (!task) return null;

  return (
    <Dialog
      header="Task Details"
      visible={visible}
      onHide={onHide}
      style={{ width: "40rem" }}
      breakpoints={{
        "960px": "80vw",
        "640px": "95vw",
      }}
    >
      <div className="flex flex-column gap-4">
        <h2 className="m-0">{task.title}</h2>

        <div className="flex gap-2 flex-wrap">
          <Tag
            value={statusLabel[task.status]}
            severity={statusSeverity[task.status]}
          />

          <Tag
            value={priorityLabel[task.priority]}
            severity={prioritySeverity[task.priority]}
          />
        </div>

        <div>
          <h4 className="mb-2">Due Date</h4>

          <p className="m-0">
            {task.dueDate
              ? new Date(task.dueDate).toLocaleDateString()
              : "No due date"}
          </p>
        </div>

        <div>
          <h4 className="mb-2">Description</h4>

          <p
            style={{
              whiteSpace: "pre-wrap",
              lineHeight: 1.8,
            }}
          >
            {task.description || "No description"}
          </p>
        </div>

        <div className="flex justify-content-end gap-2">
          <Button
            label="Edit"
            icon="pi pi-pencil"
            onClick={() => {
              onHide();
              onEdit(task._id);
            }}
          />

          <Button
            label="Close"
            severity="secondary"
            outlined
            onClick={onHide}
          />
        </div>
      </div>
    </Dialog>
  );
};

export default TaskDetailsDialog;
