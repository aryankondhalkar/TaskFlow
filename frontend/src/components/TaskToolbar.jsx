import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";

const TaskToolbar = ({
  search,
  setSearch,
  filter,
  setFilter,
  sort,
  setSort,
}) => {
  const options = [
    { label: "All", value: "all" },
    { label: "Todo", value: "todo" },
    { label: "In Progress", value: "in-progress" },
    { label: "Done", value: "done" },
  ];

  const sortOptions = [
    { label: "Newest", value: "newest" },
    { label: "Oldest", value: "oldest" },
    { label: "Due Date", value: "dueDate" },
    { label: "Priority", value: "priority" },
    { label: "A → Z", value: "alphabetical" },
  ];

  return (
    <div
      className="surface-card shadow-2 border-round-2xl p-4 mb-6"
      style={{
        border: "1px solid var(--surface-border)",
      }}
    >
      <div className="flex flex-column gap-4">
        {/* Search */}

        <div
          className="flex align-items-center gap-3 px-4 py-3 border-round-xl"
          style={{
            background: "var(--surface-100)",
            border: "1px solid var(--surface-border)",
          }}
        >
          <i className="pi pi-search text-500" />

          <InputText
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search tasks..."
            className="task-search w-full"
          />
        </div>

        {/* Filter + Sort */}

        <div className="flex flex-column lg:flex-row justify-content-between gap-4">
          <div className="flex flex-wrap gap-2">
            {options.map((option) => (
              <Button
                key={option.value}
                label={option.label}
                rounded
                className={
                  filter === option.value ? "task-filter-active" : "task-filter"
                }
                onClick={() => setFilter(option.value)}
              />
            ))}
          </div>

          <Dropdown
            value={sort}
            options={sortOptions}
            onChange={(e) => setSort(e.value)}
            placeholder="Sort By"
            style={{ minWidth: "220px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default TaskToolbar;
