import Head from "next/head";
import { useState } from "react";
import { Tab } from "@headlessui/react";
import moment, { now } from "moment";

export default function Camera() {
  const [video, setVideo] = useState();
  const [videoMeta, setVideoMeta] = useState<any>({});
  const [blobUrl, setBlobUrl] = useState("");

  const [photo, setPhoto] = useState();
  const [photoMeta, setPhotoMeta] = useState<any>({});
  const [photoUrl, setPhotoUrl] = useState("");

  return (
    <div>
      <Head>
        <title>poc - camera input</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-4 overflow-hidden">
        <Tab.Group>
          <Tab.List className="mb-4 space-x-4 border-b-4 border-blue-500">
            <Tab
              className={({ selected }) =>
                selected ? "bg-blue-500 text-white p-2 text-lg border" : "bg-white text-black p-2 text-lg border"
              }
            >
              Video
            </Tab>
            <Tab
              className={({ selected }) =>
                selected ? "bg-blue-500 text-white p-2 text-lg border" : "bg-white text-black p-2 text-lg border"
              }
            >
              Photo
            </Tab>
          </Tab.List>
          <Tab.Panels>
            <Tab.Panel className="focus:outline-none">
              <div className="grid items-center w-full gap-4">
                <div className="flex justify-between">
                  <h1 className="text-lg font-bold">Video</h1>
                  <button
                    onClick={() => {
                      setVideoMeta({});
                      setBlobUrl("");
                    }}
                    className="inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="ml-1">Clear video</span>
                  </button>
                </div>
                <label className="flex items-center justify-center px-4 py-6 text-center text-blue-700 bg-blue-300 border rounded-md shadow-md cursor-pointer border-blue hover:bg-blue-800 hover:text-white">
                  <div className="text-base leading-normal">Take a video</div>
                  <input
                    type="file"
                    id="video-file"
                    capture="environment"
                    accept="video/*"
                    className="hidden"
                    value={video}
                    onChange={(e) => {
                      if (!e.target.files) return;
                      console.log(e.target.files[0]);
                      setVideoMeta({
                        lastModified: e.target.files[0].lastModified,
                        name: e.target.files[0].name,
                        size: e.target.files[0].size,
                        type: e.target.files[0].type,
                        file: e.target.value,
                        selectedOn: now(),
                      });

                      let blobURL = URL.createObjectURL(e.target.files[0]);
                      setBlobUrl(blobURL);
                    }}
                  />
                </label>

                <div className="grid grid-cols-[1fr,auto] gap-2">
                  <div>lastModified</div>
                  <div>{videoMeta?.lastModified}</div>
                  <div>lastModifiedFormat</div>
                  <div className="break-all">
                    {videoMeta?.lastModified ? moment(videoMeta?.lastModified).format("DD.MM.YYYY - HH:mm:ss") : ""}
                  </div>
                  <div>name</div>
                  <div className="break-all">{videoMeta?.name}</div>
                  <div>size</div>
                  <div className="break-all">{videoMeta?.size}</div>
                  <div>type</div>
                  <div className="break-all">{videoMeta?.type}</div>
                  <div>selectedOn</div>
                  <div className="break-all">{videoMeta?.selectedOn}</div>
                  <div>selectedOnFormat</div>
                  <div className="break-all">
                    {videoMeta?.selectedOn ? moment(videoMeta?.selectedOn).format("DD.MM.YYYY - HH:mm:ss") : ""}
                  </div>
                  <div className="col-span-2 border">
                    <video width="320" height="240" controls src={blobUrl} className="mx-auto">
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </Tab.Panel>
            <Tab.Panel className="focus:outline-none">
              <div className="grid items-center w-full gap-4">
                <div className="flex justify-between">
                  <h1 className="text-lg font-bold">Photo</h1>
                  <button
                    onClick={() => {
                      setPhotoMeta({});
                      setPhotoUrl("");
                    }}
                    className="inline-flex items-center"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="ml-1">Clear photo</span>
                  </button>
                </div>
                <label className="flex items-center justify-center px-4 py-6 text-center text-blue-700 bg-blue-300 border rounded-md shadow-md cursor-pointer border-blue hover:bg-blue-800 hover:text-white">
                  <div className="text-base leading-normal">Take a photo</div>
                  <input
                    type="file"
                    id="photo-file"
                    capture="environment"
                    accept="image/*"
                    className="hidden"
                    value={photo}
                    onChange={(e) => {
                      if (!e.target.files) return;
                      console.log(e.target.files[0]);
                      setPhotoMeta({
                        lastModified: e.target.files[0].lastModified,
                        name: e.target.files[0].name,
                        size: e.target.files[0].size,
                        type: e.target.files[0].type,
                        file: e.target.value,
                        selectedOn: now(),
                      });
                      let photoURL = URL.createObjectURL(e.target.files[0]);
                      setPhotoUrl(photoURL);
                    }}
                  />
                </label>

                <div className="grid grid-cols-[1fr,auto] gap-2">
                  <div>lastModified</div>
                  <div className="break-all">{photoMeta?.lastModified}</div>
                  <div>lastModifiedFormat</div>
                  <div className="break-all">
                    {photoMeta?.lastModified ? moment(photoMeta?.lastModified).format("DD.MM.YYYY - HH:mm:ss") : ""}
                  </div>
                  <div>name</div>
                  <div className="break-all">{photoMeta?.name}</div>
                  <div>size</div>
                  <div className="break-all">{photoMeta?.size}</div>
                  <div>type</div>
                  <div className="break-all">{photoMeta?.type}</div>
                  <div>selectedOn</div>
                  <div className="break-all">{photoMeta?.selectedOn}</div>
                  <div>selectedOnFormat</div>
                  <div className="break-all">
                    {photoMeta?.selectedOn ? moment(photoMeta?.selectedOn).format("DD.MM.YYYY - HH:mm:ss") : ""}
                  </div>
                  <div className="col-span-2 border h-40">
                    <img src={photoUrl} className="mx-auto h-auto w-auto"></img>
                  </div>
                </div>
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
}
