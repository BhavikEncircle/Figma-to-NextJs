import Image from "next/image";
import { Destinations } from "../data/Destinations";
export const Gallery = () => {
  return (
    <div className="flex flex-col gap-10 justify-center items-center py-20 w-full">
      <div className="text-center py-10">
        <h4 className="text-3xl text-gray-500">Gallery</h4>
        <h1 className="text-6xl font-semibold text-black">
          Unfogettable moment
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full max-w-[1440px] px-6 mb-20 auto-rows-[250px] md:auto-rows-[300px]">
        {Destinations.map((item) => (
          <div
            key={item.id}
            className={`relative overflow-hidden rounded-2xl shadow-lg ${item.gridClass}`}
          >
            <Image
              src={item.src}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vh"
            />
            <h5 className="absolute text-2xl text-shadow-lg font-bold bottom-5 left-5">
              {item.title}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};
