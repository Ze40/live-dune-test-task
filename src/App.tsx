import { Provider } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";

import { AuthLayout } from "./pages/auth/AuthLayout";
import ForgotPasswordPage from "./pages/auth/forgot-password/ForgotPasswordPage";
import SuccsesPage from "./pages/auth/forgot-password/succses/SuccsesPage";
import LoginPage from "./pages/auth/login/LoginPage";
import RegisterPage from "./pages/auth/register/RegisterPage";
import ConfirmEmailPage from "./pages/auth/register/confirm/ConfirmEmailPage";
import DidntGetEmailPage from "./pages/auth/register/confirm/didnt-get-email/DidntGetEmailPage";
import { store } from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/live-dune-test-task">
        <Routes>
          <Route index element={<Navigate to={"auth"} replace />} />
          <Route path="auth" element={<AuthLayout />}>
            <Route index element={<Navigate to="login" replace />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register">
              <Route index element={<RegisterPage />} />
              <Route path="confirm">
                <Route index element={<ConfirmEmailPage />} />
                <Route path="didnt-get-email" element={<DidntGetEmailPage />} />
              </Route>
            </Route>
            <Route path="forgot-password">
              <Route index element={<ForgotPasswordPage />} />
              <Route path="succses" element={<SuccsesPage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
