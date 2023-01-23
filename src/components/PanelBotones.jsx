import React from "react";
import ButtonStyles from "../style/Botones";
import GridStyles from "../style/GridButtons";

export default function PanelBotones({ childToParent }) {
  const nombreBotones = [
    "AC",
    "+/-",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
  ];

  function handleSubmit(items) {
    return items;
  }
  return (
    <GridStyles className="button-panel">
      {nombreBotones.map((items) => (
        <ButtonStyles
          type="button"
          key={items}
          onClick={() => {
            childToParent(handleSubmit(items));
          }}
        >
          {items}
        </ButtonStyles>
      ))}
    </GridStyles>
  );
}
