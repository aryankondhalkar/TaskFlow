import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import Dashboard from "./pages/Dashboard";

import CreateTask from "./pages/CreateTask";
import UpdateTask from "./pages/UpdateTask";

import ProtectedRoute from "./components/ProtectedRoute";
import AppLayout from "./layout/AppLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/sign-up/*" element={<SignUpPage />} />
        <Route path="/sign-in/*" element={<SignInPage />} />

        <Route element={<ProtectedRoute />}>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/create-task" element={<CreateTask />} />
            <Route path="/update-task/:id" element={<UpdateTask />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
