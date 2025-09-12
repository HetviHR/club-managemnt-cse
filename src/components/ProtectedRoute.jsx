import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    console.warn(" No user in localStorage");
    return <Navigate to="/login" replace />;
  }

  // Normalize roles (lowercase comparison)
  const userRole = user.role?.toLowerCase();
  const requiredRole = role?.toLowerCase();

  if (userRole !== requiredRole) {
    console.warn(` Unauthorized. User role: ${userRole}, Required role: ${requiredRole}`);
    return <Navigate to="/login" replace />;
  }

  console.log(` Authorized as ${userRole}`);
  return children;
};

export default ProtectedRoute;
