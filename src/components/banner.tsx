const Banner = () => (
<div className="flex w-full h-[30vh]">
    <div className="flex flex-1 p-2 border-2 border-black dark:border-white">
      <div className="flex flex-1 p-2 gap-4 flex-wrap items-end content-end self-stretch bg-slate-400">
          <a className="cursor-pointer bg-gray-600 px-4 py-1 rounded-sm text-white">Projects</a>
          <a className="cursor-pointer bg-gray-600 px-4 py-1 rounded-sm text-white">Resources</a>
          <a className="cursor-pointer bg-gray-600 px-4 py-1 rounded-sm text-white">Services</a>
          <a className="cursor-pointer bg-gray-600 px-4 py-1 rounded-sm text-white">Photography</a>
      </div>
    </div>
  </div>
);

export default Banner;