function Color({ color, onChangeColor, isActive }) {
  const active = isActive ? "activeLi" : "";
  return (
    <li
      key={color.id}
      style={{ backgroundColor: color.hex }}
      onClick={onChangeColor}
      className={active}
    ></li>
  );
}

export default Color;
