import { Helmet } from "react-helmet";
import PreviewPage from "./PreviewPage";
import Store from "./Store";

export default function App() {
  const { pathname, hostname } = window.location;
  const path = pathname.split("/").slice(1);
  var subdomain = hostname
    .replace(import.meta.env.VITE_BASE_HOST, "")
    .split(".");
  if (subdomain[subdomain.length - 1] == "") {
    subdomain = subdomain.slice(0, subdomain.length - 1);
  }

  var outlet: React.ReactNode;

  if (subdomain.length == 1) {
    if (subdomain[0] == "admin") {
      outlet = <PreviewPage />;
    } else {
      outlet = <Store id={subdomain[0]} route={path} />;
    }
  }

  return (
    <>
      <Helmet>
        <title>{`Shop Title`}</title>
        <meta name="description" content={`Shop Description`} />
      </Helmet>

      {outlet}
    </>
  );
}
