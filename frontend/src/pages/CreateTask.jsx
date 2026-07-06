import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { useToast } from "../context/ToastContext";

import TaskForm from "../components/TaskForm";
import { createTask } from "../services/taskService";

const CreateTask = () => {
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

      await createTask(
        {
          ...formData,
          dueDate: formData.dueDate?.toISOString(),
        },
        token,
      );

      showSuccess("Task Created", "Your task has been created successfully.");

      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      showError("Creation Failed", "Unable to create the task.");
    }
  };

  return (
    <TaskForm
      formData={formData}
      handleChange={handleChange}
      handleDateChange={handleDateChange}
      handleSubmit={handleSubmit}
      submitLabel="Create Task"
    />
  );
};

export default CreateTask;
