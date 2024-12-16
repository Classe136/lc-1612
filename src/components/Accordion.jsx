function Accordion({ title, isOpen, onToggle, children }) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button" type="button" onClick={onToggle}>
          {title}
        </button>
      </h2>
      <div className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}>
        {children}
      </div>
    </div>
  );
}

export default Accordion;
