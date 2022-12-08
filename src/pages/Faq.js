import { useRef } from "react";
import Circles from "../components/Circles";
import FaqItem from "../components/FaqItem";

const questionItems = [
  {
    question: "What is ArbiSocks?",
    answer:
      "ArbiSocks utilizes the advanced Optimistic Rollup technology to design a unique, limited-edition tokenized socks.",
  },
  {
    question: "What are ArbiSocks Token and NFT?",
    answer:
      "The $ZKSOCKS token and NFT will have a fixed supply of 5,000 and each unit will be backed by a physical sock. ",
  },
  {
    question: "How many ArbiSocks will be available?",
    answer:
      "Only 5,000 Arbisocks will be available, and no additional socks will be minted.",
  },
  {
    question: "When can i redeem my socks?",
    answer: "Redemption will be available by June 2023.",
  },
  {
    question: "How much will a Socks cost?",
    answer: "The pricing mechanism of ArbiSocks is based on a bonding curve.",
  },
  {
    question: "Is Socks returnable?",
    answer:
      "Once redeemed, there's no turning back because ZKSOCKS tokens, which represent socks, are permanently destroyed.",
  },
  {
    question: "Is this an Investment?",
    answer:
      "No. ArbiSocks is an “experimental” fungible token used to redeem a collectible item.",
  },
];

const Faq = () => {
  const buttonRefs = useRef([]);
  const openedRef = useRef(null);

  const clickRecent = (index) => {
    const clickedButton = buttonRefs.current[index];
    if (clickedButton === openedRef.current) {
      openedRef.current = null;
      return;
    }
    if (Boolean(openedRef.current?.getAttribute("data-value"))) {
      openedRef.current?.click();
    }
    openedRef.current = clickedButton;
  };

  return (
    <div>
      <div className="z-50  my-10 max-w-2xl md:w-[1000px] mx-auto">
        <div className="space-y-2 flex flex-col w-full">
          {questionItems?.map(({ question, answer }, index) => (
            <FaqItem
              answer={answer}
              heading={question}
              key={index}
              recentClick={clickRecent}
              buttonRefs={buttonRefs}
              idx={index}
            />
          ))}
        </div>
      </div>
      <Circles />
    </div>
  );
};

export default Faq;
