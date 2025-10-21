import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "../components/layout/RootLayout";
import HomePage from "../components/pages/homePage/index";


function SobrePage() { return <div>Página Sobre</div>; }
function ContatoPage() { return <div>Página de Contato</div>; }

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      
      { index: true, element: <HomePage /> },
      { path: 'sobre', element: <SobrePage /> },
      { path: 'contato', element: <ContatoPage /> },
    ],
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
