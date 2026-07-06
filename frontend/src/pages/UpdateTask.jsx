import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { useToast } from "../context/ToastContext";
import TaskForm from "../components/TaskForm";
import { getTask, updateTask } from "../services/taskService";

const UpdateTask = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getToken } = useAuth();
  const { showSuccess, showError } = useToast();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: null,
    status: "todo",
    priority: "medium",
  });

  useEffect(() => {
    const fetchTask = async () => {
      const token = await getToken();

      const data = await getTask(id, token);

      setFormData({
        title: data.task.title,
        description: data.task.description,
        dueDate: new Date(data.task.dueDate),
        status: data.task.status,
        priority: data.task.priority,
      });
    };

    fetchTask();
  }, [id, getToken]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDateChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      dueDate: e.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = await getToken();

      await updateTask(
        id,
        {
          ...formData,
          dueDate: formData.dueDate?.toISOString(),
        },
        token,
      );

      showSuccess("Task Updated", "Task updated successfully.");

      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      showError("Update Failed", "Unable to update the task.");
    }
  };

  return (
    <TaskForm
      formData={formData}
      handleChange={handleChange}
      handleDateChange={handleDateChange}
      handleSubmit={handleSubmit}
      submitLabel="Update Task"
    />
  );
};

export default UpdateTask;
