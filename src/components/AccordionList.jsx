import { useState } from "react";
import Accordion from "./Accordion.jsx";
function AccordionList() {
  const [activeAccordion, setActiveAccordion] = useState(1);
  const faqs = [
    {
      id: 1,
      title: "Accordion 1",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, enim rerum ducimus, ullam ipsam dolorum quo voluptatem tenetur laboriosam qui quia odio aspernatur ratione voluptate, adipisci illum saepe itaque. Corporis.",
    },
    {
      id: 2,
      title: "Accordion 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, enim rerum ducimus, ullam ipsam dolorum quo voluptatem tenetur laboriosam qui quia odio aspernatur ratione voluptate, adipisci illum saepe itaque. Corporis.",
    },
  ];

  function toggleShow(id) {
    if (activeAccordion !== id) {
      setActiveAccordion(id);
    } else {
      setActiveAccordion(null);
    }
  }

  const accordions = faqs.map((el) => (
    <Accordion
      title={el.title}
      content={el.content}
      key={el.id}
      isOpen={activeAccordion === el.id}
      onToggle={() => toggleShow(el.id)}
    >
      <div className="accordion-body">{el.content}</div>
    </Accordion>
  ));
  return (
    <section className="my-4">
      <h2>Accordions</h2>
      <div className="accordion">{accordions}</div>
    </section>
  );
}

export default AccordionList;
