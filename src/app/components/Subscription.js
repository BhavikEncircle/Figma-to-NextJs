import Image from "next/image";

export const Subscription = () => {
  return (
    <div className="relative w-auto">
      <div>
        <Image
          src={"/Banner-2.png"}
          alt="Subscription Banner"
          width={2000}
          height={1000}
        />
      </div>
      <div className="absolute inset-0 z-10 w-full flex flex-col items-center gap-6 px-6 py-12">
        <div className="flex flex-col items-center w-full gap-6 max-w-4xl text-center">
          <h1 className="font-semibold text-3xl md:text-7xl">
            Subscribe to get special price
          </h1>
          <p className="text-lg md:text-2xl w-full md:w-3/4 text-center text-gray-200 leading-7 md:leading-10">
            Dont wanna miss something? subscribe right now and get special
            promotion and monthly newsletter
          </p>
        </div>

        <div className="my-8 w-full flex justify-center">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              className="w-full bg-white p-4 md:p-6 rounded-full font-semibold text-gray-800 text-base md:text-2xl"
              placeholder="Type your email here"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full text-base md:text-2xl px-6 py-3 md:px-8 md:py-4 bg-black text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
