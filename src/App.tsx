import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import { AuthLayout } from "./pages/auth/AuthLayout";
import ForgotPasswordPage from "./pages/auth/forgot-password/ForgotPasswordPage";
import LoginPage from "./pages/auth/login/LoginPage";
import RegisterPage from "./pages/auth/register/RegisterPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate to={"auth"} replace />} />
        <Route path="auth" element={<AuthLayout />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
