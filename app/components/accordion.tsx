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
        The Knvas platform is a digital solution to work experience for schools.
        It enables career leads to manage all work experience placements
        centrally removing the paperwork and ensuring that schools, students,
        employers and parents/carers have the relevant information. The Knvas
        platform helps Career Leads in schools to quickly identify students who
        have yet to source a placement by using the admin dashboard.
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Accordion 2"
        title="How does the Knvas portal help my students"
        indicator={({ isOpen }) =>
          isOpen ? <LuMinusCircle className={"rotate-90"} /> : <LuPlusCircle />
        }
      >
        The Knvas platform is easy to use. It helps students gather their work
        experience placement details in one place, and shares that information
        automatically with their parents/carers, the employer and of course the
        school.
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Accordion 3"
        title="How do I sign up"
        indicator={({ isOpen }) =>
          isOpen ? <LuMinusCircle className={"rotate-90"} /> : <LuPlusCircle />
        }
      >
        Signing up is simple! Just fill in the interest form on the website or
        email us at workexperience@knvas.co.uk - A team member will get in touch
        to discuss your specific needs and ways Knvas can help you.
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Accordion 4"
        title="Can Knvas manage our WEX placements?"
        indicator={({ isOpen }) =>
          isOpen ? <LuMinusCircle className={"rotate-90"} /> : <LuPlusCircle />
        }
      >
        Of course! We recognise that not every school has the time, staff,
        confidence or expertise to manage placements. If that is the option
        you’d like to go for, you will be assigned a WEX Manager who will work
        closely with the school
      </AccordionItem>
      <AccordionItem
        key="5"
        aria-label="Accordion 5"
        title="Can a school manage the Knvas portal themselves?"
        indicator={({ isOpen }) =>
          isOpen ? <LuMinusCircle className={"rotate-90"} /> : <LuPlusCircle />
        }
      >
        As the Career Lead you will have admin access, enabling you to add/
        delete students, enter placement information and keep track of the
        progress of your WEX cohort. As part of the admin login, you will also
        be able to review placement details giving you the power to approve or
        deny placements.
      </AccordionItem>
      <AccordionItem
        key="6"
        aria-label="Accordion 6"
        title="How do you keep my data safe?"
        indicator={({ isOpen }) =>
          isOpen ? <LuMinusCircle className={"rotate-90"} /> : <LuPlusCircle />
        }
      >
        At Knvas we take security very seriously and have taken specific steps
        to ensure that your key information remains protected. All our data is
        encyrpted and signing in requires 2 -factor authentication
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionCard;
