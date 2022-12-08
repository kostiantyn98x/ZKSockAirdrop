import { Disclosure, Transition } from "@headlessui/react";

const FaqItem = ({ heading, answer, recentClick, buttonRefs, idx }) => {
  return (
    <Disclosure
      as={"div"}
      className="bg-[#000000] w-full z-50 border !border-[#28A0F0] px-4 py-2 space-y-4"
    >
      {({ open }) => (
        <>
          <Disclosure.Button className={"w-full"}>
            <button
              ref={(ref) => {
                buttonRefs.current[idx] = ref;
              }}
              onClick={() => recentClick(idx)}
              data-value={open}
              className="w-full flex justify-between items-start  space-x-2"
            >
              <h3 className="font-semibold text-left flex-1">{heading}</h3>
              <h4 className="font-bold text-xl">{open ? "-" : "+"}</h4>
            </button>
          </Disclosure.Button>

          <Transition
            enter="transition duration-500 ease-out"
            enterFrom="transform  opacity-0"
            enterTo="transform  opacity-100"
            leave="transition duration-500 ease-out"
            leaveFrom="transform  opacity-100"
            leaveTo="transform  opacity-0"
          >
            <Disclosure.Panel className="bg-[#2E2E2E] w-full px-2 py-1 border-l-4 border-[#28A0F0] overflow-hidden ">
              {answer}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default FaqItem;
