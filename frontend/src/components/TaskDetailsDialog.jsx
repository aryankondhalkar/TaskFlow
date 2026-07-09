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
      style={{ width: "42rem" }}
      breakpoints={{
        "960px": "90vw",
        "640px": "95vw",
      }}
    >
      <div className="flex flex-column gap-5">
        {/* Title */}

        <div>
          <h2
            className="m-0"
            style={{
              fontSize: "1.8rem",
              fontWeight: 700,
              lineHeight: 1.4,
            }}
          >
            {task.title}
          </h2>
        </div>

        {/* Badges */}

        <div className="flex flex-wrap gap-2">
          <Tag
            value={statusLabel[task.status]}
            severity={statusSeverity[task.status]}
          />

          <Tag
            value={priorityLabel[task.priority]}
            severity={prioritySeverity[task.priority]}
          />
        </div>

        {/* Due Date */}

        <div className="surface-100 border-round-xl p-3">
          <div
            className="text-600 mb-2"
            style={{
              fontWeight: 600,
            }}
          >
            Due Date
          </div>

          <div
            style={{
              fontSize: "1.05rem",
              fontWeight: 500,
            }}
          >
            {task.dueDate
              ? new Date(task.dueDate).toLocaleDateString(undefined, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "No due date"}
          </div>
        </div>

        {/* Description */}

        <div>
          <div
            className="mb-3"
            style={{
              fontWeight: 600,
              fontSize: "1.05rem",
            }}
          >
            Description
          </div>

          <div
            className="surface-50 border-round-xl p-3"
            style={{
              whiteSpace: "pre-wrap",
              lineHeight: 1.8,
              minHeight: "120px",
            }}
          >
            {task.description || "No description provided."}
          </div>
        </div>

        {/* Actions */}

        <div className="flex justify-content-end flex-wrap gap-2">
          <Button
            label="Edit Task"
            icon="pi pi-pencil"
            onClick={() => {
              onHide();
              onEdit(task._id);
            }}
          />

          <Button
            label="Close"
            icon="pi pi-times"
            outlined
            severity="secondary"
            onClick={onHide}
          />
        </div>
      </div>
    </Dialog>
  );
};

export default TaskDetailsDialog;
