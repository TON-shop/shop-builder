import React, { useEffect } from "react";
import { dummyStores, exampleStore } from "../example";
import { getNestedItemByKeys, getTypedKeys } from "../utils";
import LayoutBuilder from "./LayoutBuilder";
import { RouteType } from "../types";
import ErrorPage from "./ErrorPage";
import useGlobalContext from "../contexts/GlobalContext";
import {
  defaultWebpageDescription,
  defaultWebpageIcon,
  defaultWebpageTitle,
} from "../config";

interface StoreProps {
  id: string;
  route: string[];
}

export default function Store(props: StoreProps) {
  const store = dummyStores.find((s) => s.id == props.id); // make api call using <props.id>
  const route =
    store && getNestedItemByKeys<RouteType>(store.routes, props.route);

  const { head } = useGlobalContext();

  useEffect(() => {
    head.set([
      <title>{route?.title || store?.name || defaultWebpageTitle}</title>,
      <meta
        name="description"
        content={
          route?.description || store?.description || defaultWebpageDescription
        }
      />,
      <link rel="icon" href={store?.icon || defaultWebpageIcon} />,
    ]);
  }, [store]);

  return (
    <>
      {store && route && (
        <main>
          <LayoutBuilder layout={route.layout} />
        </main>
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
