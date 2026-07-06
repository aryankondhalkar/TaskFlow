import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Tag } from "primereact/tag";

const TaskCard = ({ task, onEdit, onDelete, onComplete, onView }) => {
  const isCompleted = task.status === "done";

  const statusLabel = {
    todo: "To Do",
    "in-progress": "In Progress",
    done: "Done",
  };

  const statusStyle = {
    todo: {
      background: "#F3F4F6",
      color: "#4B5563",
      border: "1px solid #D1D5DB",
    },
    "in-progress": {
      background: "#DBEAFE",
      color: "#1D4ED8",
      border: "1px solid #93C5FD",
    },
    done: {
      background: "#DCFCE7",
      color: "#15803D",
      border: "1px solid #86EFAC",
    },
  };

  const priorityLabel = {
    low: "Low",
    medium: "Medium",
    high: "High",
  };

  const priorityStyle = {
    low: {
      background: "#ECFDF5",
      color: "#0F766E",
      border: "1px solid #99F6E4",
    },
    medium: {
      background: "#FFF7ED",
      color: "#C2410C",
      border: "1px solid #FDBA74",
    },
    high: {
      background: "#FEE2E2",
      color: "#B91C1C",
      border: "1px solid #FCA5A5",
    },
  };

  const getDueDateInfo = (dueDate) => {
    if (!dueDate) {
      return {
        label: "No Due Date",
        style: {
          background: "#F5F3FF",
          color: "#6D28D9",
          border: "1px solid #C4B5FD",
        },
      };
    }

    const today = new Date();
    const due = new Date(dueDate);

    today.setHours(0, 0, 0, 0);
    due.setHours(0, 0, 0, 0);

    const diff = (due - today) / (1000 * 60 * 60 * 24);

    if (diff < 0)
      return {
        label: "Overdue",
        style: {
          background: "#FEE2E2",
          color: "#991B1B",
          border: "1px solid #F87171",
        },
      };

    if (diff === 0)
      return {
        label: "Due Today",
        style: {
          background: "#FEF3C7",
          color: "#B45309",
          border: "1px solid #FCD34D",
        },
      };

    if (diff === 1)
      return {
        label: "Due Tomorrow",
        style: {
          background: "#ECFEFF",
          color: "#0E7490",
          border: "1px solid #67E8F9",
        },
      };

    return {
      label: due.toLocaleDateString(undefined, {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      style: {
        background: "#EEF2FF",
        color: "#4338CA",
        border: "1px solid #A5B4FC",
      },
    };
  };

  const dueDateInfo = getDueDateInfo(task.dueDate);

  const badgeStyle = {
    fontSize: ".9rem",
    padding: ".4rem .8rem",
    fontWeight: 600,
    borderRadius: "999px",
  };

  return (
    <Card className="task-card shadow-2 border-round-xl h-full w-full">
      <div className="flex flex-column gap-5 h-full">
        <h3
          className="m-0"
          style={{
            fontSize: "1.6rem",
            fontWeight: 700,
            lineHeight: 1.35,
            minHeight: "4.2rem",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            wordBreak: "break-word",
          }}
        >
          {task.title}
        </h3>

        <div className="flex flex-wrap gap-2">
          <Tag
            value={statusLabel[task.status]}
            style={{
              ...badgeStyle,
              ...statusStyle[task.status],
            }}
          />

          <Tag
            value={priorityLabel[task.priority]}
            style={{
              ...badgeStyle,
              ...priorityStyle[task.priority],
            }}
          />

          <Tag
            value={dueDateInfo.label}
            style={{
              ...badgeStyle,
              ...dueDateInfo.style,
            }}
          />
        </div>

        <p
          className="m-0 text-700"
          style={{
            fontSize: "1.15rem",
            fontWeight: 400,
            lineHeight: 1.8,
            minHeight: "6rem",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {task.description || "No description"}
        </p>

        <div className="flex justify-content-end gap-2 mt-auto flex-wrap">
          {!isCompleted && (
            <Button
              icon="pi pi-check"
              rounded
              outlined
              severity="success"
              className="task-action-btn"
              onClick={() => onComplete(task._id)}
            />
          )}

          <Button
            icon="pi pi-eye"
            rounded
            outlined
            severity="secondary"
            className="task-action-btn"
            onClick={() => onView(task)}
          />

          <Button
            icon="pi pi-pencil"
            rounded
            outlined
            severity="info"
            className="task-action-btn"
            onClick={() => onEdit(task._id)}
          />

          <Button
            icon="pi pi-trash"
            rounded
            outlined
            severity="danger"
            className="task-action-btn"
            onClick={() => onDelete(task._id)}
          />
        </div>
      </div>
    </Card>
  );
};

export default TaskCard;
