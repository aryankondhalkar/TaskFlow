import { Card } from "primereact/card";

const StatsCard = ({ tasks }) => {
  const total = tasks.length;

  const todo = tasks.filter((task) => task.status === "todo").length;

  const inProgress = tasks.filter(
    (task) => task.status === "in-progress",
  ).length;

  const completed = tasks.filter((task) => task.status === "done").length;

  const stats = [
    {
      title: "Total Tasks",
      value: total,
      icon: "pi pi-list",
      color: "#3B82F6",
    },
    {
      title: "To Do",
      value: todo,
      icon: "pi pi-clock",
      color: "#F59E0B",
    },
    {
      title: "In Progress",
      value: inProgress,
      icon: "pi pi-sync",
      color: "#8B5CF6",
    },
    {
      title: "Completed",
      value: completed,
      icon: "pi pi-check-circle",
      color: "#22C55E",
    },
  ];

  return (
    <div className="grid mb-5">
      {stats.map((stat) => (
        <div key={stat.title} className="col-12 sm:col-6 xl:col-3">
          <Card
            className="shadow-2 border-round-2xl h-full"
            style={{
              border: "1px solid var(--surface-border)",
            }}
          >
            <div className="flex justify-content-between align-items-center">
              <div>
                <p
                  className="m-0 text-600"
                  style={{
                    fontSize: ".95rem",
                    fontWeight: 500,
                  }}
                >
                  {stat.title}
                </p>

                <h2
                  className="mt-2 mb-0"
                  style={{
                    fontSize: "2rem",
                    fontWeight: 700,
                  }}
                >
                  {stat.value}
                </h2>
              </div>

              <div
                className="flex align-items-center justify-content-center border-circle"
                style={{
                  width: "58px",
                  height: "58px",
                  background: `${stat.color}15`,
                }}
              >
                <i
                  className={stat.icon}
                  style={{
                    fontSize: "1.7rem",
                    color: stat.color,
                  }}
                />
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default StatsCard;
