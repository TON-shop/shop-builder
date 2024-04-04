import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Helmet } from "react-helmet";

export default function App() {
  return (
    <>
      <Helmet>
        <title>{`Shop Title`}</title>
        <meta name="description" content={`Shop Description`} />
      </Helmet>
      <RouterProvider router={router} />;
    </>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<></>}>
        <Route index element={<></>} />
      </Route>

      <Route path="*" element={<Error />} />
    </>
  )
);
