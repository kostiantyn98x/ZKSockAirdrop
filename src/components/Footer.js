const Footer = () => {
  return (
    <div className="flex items-center justify-center my-8 z-40 space-x-2 md:space-x-4">
      <a href="https://t.me/Arbisocks">
        <img
          className="cursor-pointer md:w-auto w-8"
          src="./assets/icons/telegram.svg"
          alt="telegram"
        />
      </a>
      <a href="https://twitter.com/arbitrumsocks/">
        <img
          className="cursor-pointer md:w-auto w-8"
          src="./assets/icons/twitter.svg"
          alt="twitter"
        />
      </a>
      <a href="https://link.medium.com/UP9JUgXb0xb">
        <img
          className="cursor-pointer md:w-auto w-8"
          src="./assets/icons/medium.svg"
          alt="medium"
        />
      </a>
    </div>
  );
};

export default Footer;
