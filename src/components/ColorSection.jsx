import { useState } from "react";
import colors from "../data/colors";
import SelectedColor from "./SelectedColor";
import Color from "./Color";
function ColorSection() {
  const colorsPalette = [...colors];
  const [activeColor, setActiveColor] = useState(null);
  function renderBox() {
    if (activeColor) {
      return (
        <SelectedColor
          hex={activeColor.hex}
          label={activeColor.label}
          palette={activeColor.palette_name}
        />
      );
    } else {
      return <h3>Nessun colore selezionato</h3>;
    }
  }

  function renderColors() {
    return colorsPalette.map((color) => (
      <Color
        color={color}
        key={color.id}
        isActive={color === activeColor}
        onChangeColor={() => {
          setActiveColor(color);
        }}
      />
    ));
  }

  return (
    <section className="my-4">
      <h2>Sezione Colori</h2>
      <ul className="d-flex align-items-center flex-wrap">{renderColors()}</ul>
      {renderBox()}
    </section>
  );
}

export default ColorSection;
