import { createContext, useContext, useRef } from "react";
import { Toast } from "primereact/toast";

const ToastContext = createContext();

export const ToastProvider = ({ children }) => {
  const toast = useRef(null);

  const showSuccess = (summary, detail) => {
    toast.current.show({
      severity: "success",
      summary,
      detail,
      life: 3000,
    });
  };

  const showError = (summary, detail) => {
    toast.current.show({
      severity: "error",
      summary,
      detail,
      life: 3000,
    });
  };

  const showInfo = (summary, detail) => {
    toast.current.show({
      severity: "info",
      summary,
      detail,
      life: 3000,
    });
  };

  const showWarn = (summary, detail) => {
    toast.current.show({
      severity: "warn",
      summary,
      detail,
      life: 3000,
    });
  };

  return (
    <ToastContext.Provider
      value={{
        showSuccess,
        showError,
        showInfo,
        showWarn,
      }}
    >
      <Toast ref={toast} position="top-right" />
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
