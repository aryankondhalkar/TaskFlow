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
    <div className="surface-card border-round-2xl shadow-2 p-4 mb-6">
      <div className="flex flex-column gap-4">
        {/* Search + Sort */}

        <div className="flex flex-column md:flex-row justify-content-between align-items-stretch md:align-items-center gap-3">
          <div className="task-search-wrapper">
            <i className="pi pi-search task-search-icon" />

            <InputText
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tasks..."
              className="task-search"
            />

            {search && (
              <Button
                icon="pi pi-times"
                text
                rounded
                severity="secondary"
                onClick={() => setSearch("")}
              />
            )}
          </div>

          <Dropdown
            value={sort}
            options={sortOptions}
            onChange={(e) => setSort(e.value)}
            placeholder="Sort Tasks"
            className="task-sort-dropdown"
          />
        </div>

        {/* Filters */}

        <div className="task-filter-group">
          {options.map((option) => (
            <Button
              key={option.value}
              label={option.label}
              className={
                filter === option.value ? "task-filter-active" : "task-filter"
              }
              onClick={() => setFilter(option.value)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default TaskToolbar;
