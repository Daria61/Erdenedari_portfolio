import MouseIcon from "@mui/icons-material/Mouse";

const DragIcon = ({ position }: { position: "right" | "left" | "top" | "bottom" }) => {
  const isRight = position === "right";
  const isTop = position === "top";
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 9999,
        [isRight ? "right" : "left"]: 100,
        [isTop ? "top" : "bottom"]: 100,
        }}
      className={`drag_${isTop ? "top" : "bottom"}`}
    >
      <div
        className="arrow-svg-wrapper"
        style={{ display: "flex", alignItems: "center" }}
      >
        <MouseIcon sx={{ width: 24, height: 24, color: "#0C0F26" }} />
        <p
          style={{
            fontWeight: "400",
            fontSize: "14px",
            color: "#0C0F26",
          }}
        >
          DRAG
        </p>
      </div>
    </div>
  );

};

export default DragIcon;