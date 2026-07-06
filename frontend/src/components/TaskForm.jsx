import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
import { Calendar } from "primereact/calendar";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";

const TaskForm = ({
  formData,
  handleChange,
  handleDateChange,
  handleSubmit,
  submitLabel,
}) => {
  const statusOptions = [
    { label: "To Do", value: "todo" },
    { label: "In Progress", value: "in-progress" },
    { label: "Done", value: "done" },
  ];

  const priorityOptions = [
    { label: "Low", value: "low" },
    { label: "Medium", value: "medium" },
    { label: "High", value: "high" },
  ];

  return (
    <div className="flex justify-content-center mt-6">
      <Card title={submitLabel} className="w-full md:w-30rem shadow-3">
        <form onSubmit={handleSubmit} className="flex flex-column gap-4">
          <div className="flex flex-column gap-2">
            <label htmlFor="title">Title</label>

            <InputText
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-column gap-2">
            <label htmlFor="description">Description</label>

            <InputTextarea
              id="description"
              name="description"
              rows={5}
              autoResize
              value={formData.description}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-column gap-2">
            <label>Status</label>

            <Dropdown
              value={formData.status}
              options={statusOptions}
              onChange={(e) =>
                handleChange({
                  target: {
                    name: "status",
                    value: e.value,
                  },
                })
              }
              placeholder="Select Status"
            />
          </div>

          <div className="flex flex-column gap-2">
            <label>Priority</label>

            <Dropdown
              value={formData.priority}
              options={priorityOptions}
              onChange={(e) =>
                handleChange({
                  target: {
                    name: "priority",
                    value: e.value,
                  },
                })
              }
              placeholder="Select Priority"
            />
          </div>

          <div className="flex flex-column gap-2">
            <label>Due Date</label>

            <Calendar
              value={formData.dueDate}
              onChange={handleDateChange}
              showIcon
            />
          </div>

          <Button type="submit" label={submitLabel} icon="pi pi-check" />
        </form>
      </Card>
    </div>
  );
};

export default TaskForm;
