import Image from "next/image";
import { Stats } from "../data/StatData";
export const Statistics = () => {
  return (
    <div className="relative mb-20">
      <div className="relative w-full min-h-[300px] md:min-h-[420px]">
        <Image
          src="/Stats.png"
          alt="stats"
          width={2000}
          height={800}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center items-start justify-center md:justify-between gap-6 px-6 md:px-20 py-10 h-full">
          {Stats.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center gap-3 w-full md:w-auto px-4"
            >
              <div className="flex justify-center">
                <Image src={item.img} alt="" width={64} height={64} />
              </div>
              <h2 className="text-2xl md:text-4xl font-semibold">
                {item.counts}
              </h2>
              <h4 className="text-sm md:text-base">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
