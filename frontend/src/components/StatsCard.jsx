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
        <div key={stat.title} className="col-6 xl:col-3">
          <Card className="stats-card h-full">
            <div className="flex justify-content-between align-items-center">
              <div>
                <span className="stats-title">{stat.title}</span>

                <h2 className="stats-value">{stat.value}</h2>
              </div>

              <div
                className="stats-icon"
                style={{
                  backgroundColor: `${stat.color}15`,
                }}
              >
                <i
                  className={stat.icon}
                  style={{
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
