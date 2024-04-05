import React from "react";
import { useParams, useLocation, Route } from "react-router-dom";
import { exampleStore } from "../example";
import { getNestedItemByKeys, getTypedKeys } from "../utils";
import LayoutBuilder from "./LayoutBuilder";
import { RouteType } from "../types";
import { Helmet } from "react-helmet";

export default function Store() {
  const { id } = useParams();

  const store = exampleStore; // use api call
  const { pathname } = useLocation();
  const path = pathname.split("/");
  const loc = path.slice(3);

  const route = getNestedItemByKeys<RouteType>(store.routes, loc);

  return (
    <>
      {route && (
        <>
          <Helmet>
            <title>{route.title || store.name}</title>
            <meta
              name="description"
              content={route.description || store.description}
            />
            <link rel="icon" href={store.icon || "/favicon.ico"} />
          </Helmet>
          <main>
            <LayoutBuilder layout={route.layout} />
          </main>
        </>
      )}
    </>
  );
}
