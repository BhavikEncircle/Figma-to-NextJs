export const BreadCrumb = ({ title, path }) => {
  return (
    <div className="absolute inset-0 flex flex-col justify-center items-center  z-10 text-center pt-4">
      <h1 className="text-white text-7xl pt-24 font-bold tracking-tight drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
        {title}
      </h1>
      <div className="flex items-center gap-3 mt-4 pt-8 text-white text-2xl  font-medium drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
        <span>Home</span>
        <span className="text-white">{">"}</span>
        <span className="text-white">{path}</span>
      </div>
    </div>
  );
};
