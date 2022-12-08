const Hamburger = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className="flex flex-col h-10 w-10 cursor-pointer absolute top-4 right-4 rounded justify-center items-center group"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div
        className={`h-1 w-6 my-0.5 rounded-full bg-white transition ease transform duration-300 ${
          isOpen
            ? "rotate-45 translate-y-[10px] opacity-100 group-hover:opacity-100"
            : "opacity-100 group-hover:opacity-100"
        }`}
      />
      <div
        className={`h-1 w-6 my-0.5 rounded-full bg-white transition ease transform duration-300 ${
          isOpen ? "opacity-0" : "opacity-100 group-hover:opacity-100"
        }`}
      />
      <div
        className={`h-1 w-6 my-0.5 rounded-full bg-white transition ease transform duration-300 ${
          isOpen
            ? "-rotate-45 -translate-y-1.5 opacity-100 group-hover:opacity-100"
            : "opacity-100 group-hover:opacity-100"
        }`}
      />
    </div>
  );
};

export default Hamburger;
