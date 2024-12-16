import { useState } from "react";
import colors from "../data/colors";
function ColorSection() {
  const colorsPalette = [...colors];
  const [activeColor, setActiveColor] = useState(colorsPalette[0]);

  return (
    <section className="my-4">
      <h2>Sezione Colori</h2>
      <ul className="d-flex align-items-center flex-wrap">
        {colorsPalette.map((color) => (
          <li
            key={color.id}
            style={{ backgroundColor: color.hex }}
            onClick={() => setActiveColor(color)}
          ></li>
        ))}
      </ul>
      <div className="box">{activeColor.label}</div>
    </section>
  );
}

export default ColorSection;
