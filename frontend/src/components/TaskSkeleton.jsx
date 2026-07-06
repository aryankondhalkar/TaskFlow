import { Skeleton } from "primereact/skeleton";

const TaskSkeleton = () => {
  return (
    <div className="grid">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div key={item} className="col-12 md:col-6 lg:col-4">
          <div className="border-1 surface-border border-round p-4">
            <Skeleton width="60%" height="2rem" className="mb-3" />

            <Skeleton width="100%" className="mb-2" />
            <Skeleton width="80%" className="mb-4" />

            <Skeleton width="40%" className="mb-4" />

            <div className="flex justify-content-end gap-2">
              <Skeleton width="5rem" height="2.2rem" />
              <Skeleton width="5rem" height="2.2rem" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskSkeleton;
