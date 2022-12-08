import { NavLink } from "react-router-dom";

const Navbar = ({ setIsOpen }) => {
  return (
    <ul className="flex md:flex-row flex-col space-y-6 md:space-y-0 md:items-center md:space-x-8 lg:space-x-12">
      {NavItems.map((item, index) => (
        <>
          {item.text === "DAO" ? (
            <a
              target={"_blank"}
              rel="noreferrer"
              className="hover:no-underline hover:text-[#FFFFFF] px-2 py-2  md:border-none border-2 border-[#FFFFFF] rounded-md text-base md:p-0 font-medium md:text-sm"
              href={item.href}
            >
              DAO
            </a>
          ) : (
            <NavLink
              onClick={() => {
                setIsOpen(false);
              }}
              className={({ isActive }) =>
                isActive
                  ? "hover:no-underline hover:text-[#FFFFFF] px-2 py-2 md:border-none border-2 md:p-0 border-[#28A0F0] rounded-md text-[#28A0F0] md:text-white font-semibold text-base md:text-lg"
                  : "hover:no-underline hover:text-[#FFFFFF] px-2 py-2  md:border-none border-2 border-[#FFFFFF] rounded-md text-base md:p-0 font-medium md:text-sm"
              }
              key={index}
              to={item.href}
            >
              {item.text}
            </NavLink>
          )}
        </>
      ))}
    </ul>
  );
};

export default Navbar;

const NavItems = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Faq",
    href: "/faq",
  },
  {
    text: "DAO",
    href: "https://snapshot.org/#/arbisocks.eth",
  },
  {
    text: "Staking",
    href: "/staking",
  },
  {
    text: "Airdrop",
    href: "/airdrop",
  },
];
