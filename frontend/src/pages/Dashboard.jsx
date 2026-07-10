import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { Button } from "primereact/button";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import CustomPaginator from "../components/CustomPaginator";
import StatsCard from "../components/StatsCard";
import TaskToolbar from "../components/TaskToolbar";
import TaskList from "../components/TaskList";
import TaskSkeleton from "../components/TaskSkeleton";
import TaskDetailsDialog from "../components/TaskDetailsDialog";

import { useToast } from "../context/ToastContext";
import { deleteTask, getAllTasks, updateTask } from "../services/taskService";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  const [selectedTask, setSelectedTask] = useState(null);
  const [detailsVisible, setDetailsVisible] = useState(false);

  // Pagination
  const [first, setFirst] = useState(0);
  const [sort, setSort] = useState("newest");
  const [rows, setRows] = useState(6);

  const { getToken } = useAuth();
  const navigate = useNavigate();
  const { showSuccess, showError } = useToast();

  const fetchTasks = async () => {
    try {
      setLoading(true);

      const token = await getToken();
      const data = await getAllTasks(token);

      setTasks(data.tasks);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);
  useEffect(() => {
    setFirst(0);
  }, [search, filter, sort]);

  const handleEdit = (id) => navigate(`/update-task/${id}`);

  const handleView = (task) => {
    setSelectedTask(task);
    setDetailsVisible(true);
  };

  const handleDelete = (id) => {
    confirmDialog({
      message: "Are you sure you want to delete this task?",
      header: "Delete Task",
      icon: "pi pi-exclamation-triangle",
      acceptLabel: "Delete",
      rejectLabel: "Cancel",
      acceptClassName: "p-button-danger",

      accept: async () => {
        try {
          const token = await getToken();

          await deleteTask(id, token);
          await fetchTasks();

          showSuccess("Task Deleted", "Task deleted successfully.");
        } catch (error) {
          console.error(error);
          showError("Delete Failed", "Unable to delete the task.");
        }
      },
    });
  };

  const handleComplete = async (id) => {
    try {
      const token = await getToken();

      await updateTask(
        id,
        {
          status: "done",
        },
        token,
      );

      await fetchTasks();

      showSuccess("Task Completed", "Great job! Task marked as completed.");
    } catch (error) {
      console.error(error);
      showError("Update Failed", "Unable to update task.");
    }
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = filter === "all" || task.status === filter;

    return matchesSearch && matchesFilter;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    switch (sort) {
      case "newest":
        return new Date(b.createdAt) - new Date(a.createdAt);

      case "oldest":
        return new Date(a.createdAt) - new Date(b.createdAt);

      case "dueDate":
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;

        return new Date(a.dueDate) - new Date(b.dueDate);

      case "alphabetical":
        return a.title.localeCompare(b.title);

      case "priority": {
        const priorityOrder = {
          high: 3,
          medium: 2,
          low: 1,
        };

        return priorityOrder[b.priority] - priorityOrder[a.priority];
      }

      default:
        return 0;
    }
  });

  const paginatedTasks = sortedTasks.slice(first, first + rows);
  const currentPage = Math.floor(first / rows) + 1;

  const totalPages = Math.ceil(filteredTasks.length / rows);

  if (loading) {
    return (
      <div className="p-5">
        <TaskSkeleton />
      </div>
    );
  }

  return (
    <div className="p-3 md:p-4 lg:p-5">
      <ConfirmDialog />

      <div className="surface-card shadow-2 border-round-2xl p-4 lg:p-5 mb-6">
        <div className="flex flex-column lg:flex-row justify-content-between align-items-center gap-4">
          <div className="text-center lg:text-left">
            <h1
              className="m-0"
              style={{
                fontSize: "clamp(2rem, 4vw, 2.5rem)",
                fontWeight: 700,
              }}
            >
              👋 Welcome Back
            </h1>

            <p
              className="text-600 mt-3 mb-0"
              style={{
                fontSize: "clamp(1rem, 2vw, 1.1rem)",
                lineHeight: 1.6,
              }}
            >
              Stay organized and keep making progress.
            </p>
          </div>

          <Button
            label="Create Task"
            icon="pi pi-plus"
            rounded
            size="large"
            className="w-full lg:w-auto"
            onClick={() => navigate("/create-task")}
          />
        </div>
      </div>

      <StatsCard tasks={tasks} />

      <TaskToolbar
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />

      <TaskList
        tasks={paginatedTasks}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onComplete={handleComplete}
        onView={handleView}
      />

      {totalPages > 1 && (
        <div className="mt-5">
          <CustomPaginator
            currentPage={currentPage}
            totalPages={totalPages}
            onPrevious={() => setFirst(Math.max(first - rows, 0))}
            onNext={() =>
              setFirst(Math.min(first + rows, (totalPages - 1) * rows))
            }
          />
        </div>
      )}

      <TaskDetailsDialog
        visible={detailsVisible}
        onHide={() => setDetailsVisible(false)}
        task={selectedTask}
        onEdit={handleEdit}
      />
    </div>
  );
};

export default Dashboard;
