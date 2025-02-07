import { Navigate, Route, Routes } from "react-router"
import { DashboardPage } from "../pages/DashboardPage"

export const StudyManagerRoutes = () => {
  return (
    <Routes>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="/*" element={<Navigate to="/dashboard" />} />
    </Routes>
  )
}
