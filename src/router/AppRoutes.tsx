import Hero from "@/components/Hero";
import Latest from "@/components/Latest";
import Layout from "@/components/Layout";
import Profile from "@/components/Profile";
import { Navigate, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Hero />} />
        <Route path="latest" element={<Latest />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Navigate to={"/"}></Navigate>} />
      </Route>
    </Routes>
  );
};
export default AppRoutes;
