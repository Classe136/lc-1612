function SelectedColor({ hex, label, palette }) {
  return (
    <div className="box" style={{ backgroundColor: hex }}>
      {label} {hex} {palette}
    </div>
  );
}

export default SelectedColor;
