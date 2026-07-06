import api from "../api/axios";

export const getAllTasks = async (token) => {
  const response = await api.get("/api/tasks", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getTask = async (id, token) => {
  const response = await api.get(`api/tasks/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const createTask = async (taskData, token) => {
  const response = await api.post("/api/tasks", taskData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const updateTask = async (id, taskData, token) => {
  const response = await api.patch(`/api/tasks/${id}`, taskData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const deleteTask = async (id, token) => {
  const response = await api.delete(`/api/tasks/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
