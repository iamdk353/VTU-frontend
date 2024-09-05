import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import AppRoutes from "./router/AppRoutes";
import AuthProvider from "./components/AuthProvider";
import { Toaster } from "sonner";
import { Provider } from "react-redux";
import AppStore from "./store/AppStore";

createRoot(document.getElementById("root")!).render(
  <Provider store={AppStore}>
    <AuthProvider>
      <Router>
        <Toaster richColors position="top-center" closeButton />
        <AppRoutes />
      </Router>
    </AuthProvider>
  </Provider>
);
