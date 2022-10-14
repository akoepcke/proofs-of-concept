import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Proofs of concept</title>
        <meta name="description" content="proofs of concept" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="p-8">
        <h1 className="font-semibold">demos and proofs of concept</h1>

        <ul className="mt-8 list-disc list-inside">
          <li>
            <Link href="/camera">camera</Link>
          </li>
          <li>
            <Link href="/motion">motion</Link>
          </li>
          <li>
            <Link href="/scroll">scroll</Link>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Home;
