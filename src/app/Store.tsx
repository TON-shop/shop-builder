import React from "react";
import { dummyStores, exampleStore } from "../example";
import { getNestedItemByKeys, getTypedKeys } from "../utils";
import LayoutBuilder from "./LayoutBuilder";
import { RouteType } from "../types";
import { Helmet } from "react-helmet";
import ErrorPage from "./ErrorPage";

interface StoreProps {
  id: string;
  route: string[];
}

export default function Store(props: StoreProps) {
  const store = dummyStores.find((s) => s.id == props.id); // make api call using <props.id>
  const route =
    store && getNestedItemByKeys<RouteType>(store.routes, props.route);

  return (
    <>
      {store && route && (
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

      {!store && (
        <>
          <p className="w-full text-center bg-black text-orange-500 py-1">
            Store not found
          </p>
          <ErrorPage />
        </>
      )}

      {store && !route && <ErrorPage />}
    </>
  );
}
