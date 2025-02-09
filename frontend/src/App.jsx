import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import { ThemeProvider } from "./components/theme-provider";
import ProtectedRoute from "./components/protected-route";
import LandingPage from "./pages/LandingPage";
import "./App.css";
import Dashboard from "./pages/Tournament";
import Marketplace from "./pages/Marketplace";
import {Leaderboard} from "./pages/Leaderboard";
import Stages from "./pages/Stages";
import Nft from "./pages/Nft";
import Tournament from "./pages/Tournament";
import Game1 from "./games/Game1";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
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
        path: "/marketplace",
        element: (
          <ProtectedRoute>
            <Marketplace/>
            </ProtectedRoute>
        ),
      },
      {
        path: "/leaderboard",
        element: (
          <ProtectedRoute>
            <Leaderboard/>
            </ProtectedRoute>
        ),
      },
      {
        path: "/tournament",
        element: (
          <ProtectedRoute>
            <Tournament/>
            </ProtectedRoute>
        ),
      },
      {
        path: "/game-1",
        element: (
          <ProtectedRoute>
            <Game1/>
            </ProtectedRoute>
        ),
      },
      
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