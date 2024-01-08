"use client";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { LuMinusCircle, LuPlusCircle } from "react-icons/lu";

const AccordionCard = () => {
  return (
    <Accordion variant="light">
      <AccordionItem
        key="1"
        aria-label="Accordion 1"
        title="What does the knvas portal do?"
        indicator={({ isOpen }) =>
          isOpen ? <LuMinusCircle className={"rotate-90"} /> : <LuPlusCircle />
        }
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aliquid,
        doloribus earum eos facere fugit, id incidunt laboriosam, laudantium
        nesciunt quam tempora? Corporis dolorum excepturi obcaecati tempora
        veniam voluptas!
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        title="How does the knvas portal help my school?"
        indicator={({ isOpen }) =>
          isOpen ? <LuMinusCircle className={"rotate-90"} /> : <LuPlusCircle />
        }
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aliquid,
        doloribus earum eos facere fugit, id incidunt laboriosam, laudantium
        nesciunt quam tempora? Corporis dolorum excepturi obcaecati tempora
        veniam voluptas!
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Accordion 3"
        title="How does the knvas portal help my students? "
        indicator={({ isOpen }) =>
          isOpen ? <LuMinusCircle className={"rotate-90"} /> : <LuPlusCircle />
        }
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aliquid,
        doloribus earum eos facere fugit, id incidunt laboriosam, laudantium
        nesciunt quam tempora? Corporis dolorum excepturi obcaecati tempora
        veniam voluptas!
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Accordion 4"
        title="How does the knvas portal help my ward? "
        indicator={({ isOpen }) =>
          isOpen ? <LuMinusCircle className={"rotate-90"} /> : <LuPlusCircle />
        }
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aliquid,
        doloribus earum eos facere fugit, id incidunt laboriosam, laudantium
        nesciunt quam tempora? Corporis dolorum excepturi obcaecati tempora
        veniam voluptas!
      </AccordionItem>
      <AccordionItem
        key="5"
        aria-label="Accordion 5"
        title="How do I sign up?"
        indicator={({ isOpen }) =>
          isOpen ? <LuMinusCircle className={"rotate-90"} /> : <LuPlusCircle />
        }
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aliquid,
        doloribus earum eos facere fugit, id incidunt laboriosam, laudantium
        nesciunt quam tempora? Corporis dolorum excepturi obcaecati tempora
        veniam voluptas!
      </AccordionItem>
      <AccordionItem
        key="6"
        aria-label="Accordion 6"
        title="Can knvas manage our school portal?"
        indicator={({ isOpen }) =>
          isOpen ? <LuMinusCircle className={"rotate-90"} /> : <LuPlusCircle />
        }
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aliquid,
        doloribus earum eos facere fugit, id incidunt laboriosam, laudantium
        nesciunt quam tempora? Corporis dolorum excepturi obcaecati tempora
        veniam voluptas!
      </AccordionItem>
      <AccordionItem
        key="7"
        aria-label="Accordion 7"
        title="Does a school manage the KNVAS portal themselves?"
        indicator={({ isOpen }) =>
          isOpen ? <LuMinusCircle className={"rotate-90"} /> : <LuPlusCircle />
        }
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aliquid,
        doloribus earum eos facere fugit, id incidunt laboriosam, laudantium
        nesciunt quam tempora? Corporis dolorum excepturi obcaecati tempora
        veniam voluptas!
      </AccordionItem>
      <AccordionItem
        key="8"
        aria-label="Accordion 8"
        title="Are students informations protected?"
        indicator={({ isOpen }) =>
          isOpen ? <LuMinusCircle className={"rotate-90"} /> : <LuPlusCircle />
        }
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aliquid,
        doloribus earum eos facere fugit, id incidunt laboriosam, laudantium
        nesciunt quam tempora? Corporis dolorum excepturi obcaecati tempora
        veniam voluptas!
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionCard;
