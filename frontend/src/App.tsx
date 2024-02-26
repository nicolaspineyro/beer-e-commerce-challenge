import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "src/routes";

const App = () => {
  const router = createBrowserRouter(ROUTES);

  return <RouterProvider router={router} />;
};

export default App;
