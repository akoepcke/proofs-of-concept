import Head from "next/head";
import { useRef } from "react";
import DragCombinedParallel from "../../components/DragCombinedParallel";
import DragCombinedPerpendicular from "../../components/DragCombinedPerpendicular";
import DragConstrainedToDiv from "../../components/DragConstrainedToDiv";
import DragConstrainedToX from "../../components/DragConstrainedToX";
import DragConstrainedToY from "../../components/DragConstrainedToY";
import DragDropAnywhere from "../../components/DragDropAnywhere";
import DragDropOnCorner from "../../components/DragDropOnCorner";
import DragDropOnTarget from "../../components/DragDropOnTarget";
import DragElement from "../../components/DragElement";

export default function Motion() {
  const constraintsRef_1 = useRef(null);

  return (
    <div>
      <Head>
        <title>poc - motion</title>
      </Head>
      <main>
        <div className="bg-gradient-to-br from-blue-400 to-blue-300 w-screen h-full h-[100svh!important] fixed overflow-hidden overscroll-none p-10 ">
          <div className="relative w-full h-full p-10 border-4 border-cyan-800" ref={constraintsRef_1}>
            <DragElement />
            <DragElement />
            <br />
            <DragConstrainedToX dragConstraints={constraintsRef_1} />
            <DragConstrainedToY dragConstraints={constraintsRef_1} />
            <DragConstrainedToDiv />
            <br />
            <DragDropAnywhere dragConstraints={constraintsRef_1} />
            <DragDropOnCorner dragConstraints={constraintsRef_1} />
            <br />
            <DragDropOnTarget />
            <br />
            <DragCombinedParallel dragConstraints={constraintsRef_1} />
            <br />
            <DragCombinedPerpendicular dragConstraints={constraintsRef_1} />
          </div>
        </div>
      </main>
    </div>
  );
}
