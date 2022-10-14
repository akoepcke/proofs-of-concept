import clsx from "clsx";
import Head from "next/head";
import { useState } from "react";

export default function Scroll() {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <Head>
        <title>poc - scrolling</title>
      </Head>
      <main className={clsx("h-full bg-blue-200", { "overflow-scroll": enabled }, { "overflow-hidden": !enabled })}>
        <button
          className="absolute w-40 p-4 bg-white rounded shadow top-2 right-2"
          onClick={() => {
            setEnabled(!enabled);
          }}
        >
          {enabled ? "Disable scrolling" : "Enable scrolling"}
        </button>

        <div className="w-10 bg-green-300 h-2/3"></div>
        <div className="w-10 bg-green-500 h-2/3"></div>
      </main>
    </>
  );
}
