import { UserButton } from "@clerk/clerk-react";
import { Button } from "primereact/button";
import { ClipboardCheck } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header
      className="surface-card"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        borderBottom: "1px solid var(--surface-border)",
        backdropFilter: "blur(14px)",
      }}
    >
      <div
        className="px-4 lg:px-6 py-3"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div className="flex flex-column md:flex-row justify-content-between align-items-center gap-3">
          {/* Logo */}

          <div
            className="flex align-items-center gap-3 cursor-pointer"
            onClick={() => navigate("/dashboard")}
          >
            <div
              className="flex align-items-center justify-content-center border-circle"
              style={{
                width: "48px",
                height: "48px",
                background: "var(--primary-color)",
                color: "white",
              }}
            >
              <ClipboardCheck size={24} strokeWidth={2.5} />
            </div>

            <div>
              <h2
                className="m-0"
                style={{
                  fontSize: "1.6rem",
                  fontWeight: 700,
                }}
              >
                TaskFlow
              </h2>

              <small className="text-500">Stay organized</small>
            </div>
          </div>

          {/* Right Side */}

          <div className="flex align-items-center gap-3 flex-wrap justify-content-center">
            {location.pathname !== "/create-task" && (
              <Button
                icon="pi pi-plus"
                label="New Task"
                rounded
                onClick={() => navigate("/create-task")}
              />
            )}

            <UserButton
              appearance={{
                elements: {
                  avatarBox: {
                    width: "42px",
                    height: "42px",
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
