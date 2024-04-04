import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Helmet } from "react-helmet";
import ErrorPage from "./ErrorPage";
import PreviewPage from "./PreviewPage";
import LayoutBuilder from "./LayoutBuilder";
import { exampleLayout } from "../example";

export default function App() {
  return (
    <>
      <Helmet>
        <title>{`Shop Title`}</title>
        <meta name="description" content={`Shop Description`} />
      </Helmet>
      <RouterProvider router={router} />
    </>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<></>}>
        <Route path="preview" element={<PreviewPage />} />
        <Route
          path="layout"
          element={<LayoutBuilder layout={exampleLayout} />}
        />
        <Route path="*" element={<></>} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </>
  )
);
