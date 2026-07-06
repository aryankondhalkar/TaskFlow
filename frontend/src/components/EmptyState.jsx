import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const EmptyState = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-content-center mt-8">
      <div className="surface-card shadow-2 border-round-xl p-6 text-center w-full md:w-30rem">
        <i className="pi pi-inbox text-6xl text-primary mb-4" />

        <h2 className="mt-3 mb-2">No Tasks Yet</h2>

        <p className="text-600 mb-5">
          Create your first task and start organizing your work.
        </p>

        <Button
          label="Create Task"
          icon="pi pi-plus"
          onClick={() => navigate("/create-task")}
        />
      </div>
    </div>
  );
};

export default EmptyState;
