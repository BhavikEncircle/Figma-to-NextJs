import Image from "next/image";
import { FeatureData } from "../data/FeaturesData";
export default function Features() {
  return (
    <section className="py-24">
      <div className="w-full px-10">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1.5fr_1.5fr] ">
          {FeatureData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-20 h-20 mb-8">
                <Image
                  src={item.iconPath}
                  alt={item.title}
                  fill
                  className="object-contain"
                  sizes="auto"
                />
              </div>
              <h3 className="text-4xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-500 text-xl leading-relaxed max-w-md">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
