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

      <main>
        <h1 className="font-semibold text-red-600">proofs of concept</h1>

        <ul>
          <li>
            <Link href="/camera">camera</Link>
          </li>
        </ul>
      </main>
    </div>
  );
};

export default Home;
