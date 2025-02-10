import { Navigate, Route, Routes } from "react-router";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { StudyManagerRoutes } from "../study-manager/routes/StudyManagerRoutes";
import { useAuthStore } from "@/hooks/useAuthStore";
import { useEffect } from "react";

export const AppRouter = () => {

  const { checkAuth, status } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <Routes>
      {status === "not-authenticated" ? (
        <>
          <Route path="/auth/*" element={<AuthRoutes />} />
          <Route path="/*" element={<Navigate to="/auth/login" />} />
        </>
      ) : (
        <>
          <Route path="/*" element={<StudyManagerRoutes />} />
          <Route path="/*" element={<Navigate to="/" />} />
        </>
      )}
    </Routes>
  );
};
