import Image from "next/image";

export const Testimonials = () => {
  return (
    <section className="py-28 mb-20 bg-white ">
      <div className="max-w-[1440px] mx-auto px-10 flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-24">
        <div className="relative w-full md:w-1/2 flex justify-center">
          <Image
            src="/Testimonial.png"
            alt="Testimonial Portrait"
            height={600}
            width={600}
            className="object-contain"
          />
        </div>

        <div className="flex flex-col w-full md:w-1/2 text-left">
          <div className="mb-8">
            <Image
              src="/Quotes.png"
              alt="Quotes"
              width={80}
              height={60}
              className="object-contain"
            />
          </div>

          <div className="space-y-8 mb-12">
            <p className="text-gray-600 text-lg lg:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              porttitor sapien et urna tincidunt fringilla. Vivamus at augue
              interdum, blandit arcu quis, laoreet ipsum. In eu ipsum urna.
              Suspendisse suscipit est et neque.
            </p>
            <p className="text-gray-600 text-lg lg:text-xl">
              Mauris tempor tellus ante, ut fermentum erat gravida vel. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos. Aenean nec justo dui. Ut et consequat dui, a
              malesuada ipsum. Pellentesque nec turpis viverra, blandit mi a,
              accumsan justo.
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <h4 className="text-black text-3xl lg:text-4xl font-bold">
              Siti Sarah
            </h4>
            <span className="text-gray-500 text-lg lg:text-xl font-medium">
              Founder Travosca
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
