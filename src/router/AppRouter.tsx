import { Route, Routes } from "react-router";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { StudyManagerRoutes } from "../study-manager/routes/StudyManagerRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes />} />
      <Route path="/*" element={<StudyManagerRoutes />} />
    </Routes>
  );
};
