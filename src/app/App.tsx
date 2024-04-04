import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import ErrorPage from "./ErrorPage";
import PreviewPage from "./PreviewPage";

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
        <Route path="preview" element={<PreviewPage />} />
        <Route path="*" element={<></>} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </>
  )
);
