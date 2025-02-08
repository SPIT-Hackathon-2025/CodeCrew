import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import { ThemeProvider } from "./components/theme-provider";
import ProtectedRoute from "./components/protected-route";
import LandingPage from "./pages/LandingPage";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Stages from "./pages/Stages";
import Community from "./pages/Community/Community";
import FirstPage from "./pages/FirstPage";
import Marketplace from "./pages/Marketplace";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <FirstPage />,
      },
      {
        path: "/onboarding",
        element: <FirstPage />,
      },
      {
        path: "/landing-page",
        element: <LandingPage />,
      },
  
      {
        path: "/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
            </ProtectedRoute>
        ),
      },
      {
        path: "/marketplace",
        element: (
          <ProtectedRoute>
            <Marketplace/>
            </ProtectedRoute>
        ),
      },
      // {
      //   path: "/community",
      //   element: (
      //     <ProtectedRoute>
      //       <Community/>
      //       </ProtectedRoute>
      //   ),
      // },
      
      
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;