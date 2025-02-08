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
import Leaderboard from "./pages/Leaderboard";


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/landing-page",
        element: <LandingPage />,
      },
      {
        path: "/stages",
        element: <Stages />,
      },
      {
        path: "/leaderboard",
        element: <Leaderboard />,
      },
  
      {
        path: "/tournament",
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