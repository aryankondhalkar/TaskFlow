import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const EmptyState = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-content-center mt-7">
      <div className="empty-state surface-card shadow-2 border-round-2xl p-6 text-center">
        <div className="empty-icon">
          <i className="pi pi-inbox" />
        </div>

        <h2 className="empty-title">Nothing here yet</h2>

        <p className="empty-description">
          Your workspace is empty. Create your first task and start tracking
          your progress.
        </p>

        <Button
          label="Create Your First Task"
          icon="pi pi-plus"
          rounded
          size="large"
          onClick={() => navigate("/create-task")}
        />
      </div>
    </div>
  );
};

export default EmptyState;
