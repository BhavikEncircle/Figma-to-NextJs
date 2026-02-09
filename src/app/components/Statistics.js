import Image from "next/image";
import { Stats } from "../data/StatData";
export const Statistics = () => {
  return (
    <div className="relative mb-20">
      <div className="relative w-full aspect-[3/4] md:aspect-auto">
        <Image
          src="/Stats.png"
          alt="stats"
          width={2000}
          height={800}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 z-10 flex flex-col md:flex-row md:items-center items-center justify-center md:justify-between gap-3 md:gap-10 px-4 md:px-20 py-8">
          {Stats.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center gap-2"
            >
              <div className="flex justify-center">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="w-12 h-12 md:w-20 md:h-20"
                />
              </div>
              <h2 className="text-xl md:text-4xl font-semibold text-white drop-shadow-lg">
                {item.counts}
              </h2>
              <h4 className="text-xs md:text-sm text-white drop-shadow-lg">
                {item.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
