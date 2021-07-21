import Head from "next/head";
import { useEffect } from "react";

export default function NotFound() {
  return <>
    <Head>
      <title>Not found</title>
    </Head>
    <img src="https://http.cat/404" />
  </>;
}