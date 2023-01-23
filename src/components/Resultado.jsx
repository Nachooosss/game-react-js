import React, { useState } from "react";
import ResulatadoStyle from "../style/ResultadoStyle";
import PanelBotones from "./PanelBotones";
const Resultado = () => {
  const [value, setValue] = useState("0");
  const [resultado, setResultado] = useState(0);
  const childToParent = (childdata) => {
    switch (childdata) {
      case "AC":
        setValue("0");
        break;
      case "+/-":
        if (value === "0") {
          setValue("0");
        } else {
          setValue((eval(value) * -1).toString());
        }
        break;
      case "%":
        if (
          value.endsWith("%") ||
          value.endsWith("/") ||
          value.endsWith("*") ||
          value.endsWith("-") ||
          value.endsWith("+") ||
          value.endsWith(".")
        ) {
          setValue(value);
        } else {
          setValue(value + "%");
        }
        break;
      case "/":
        if (
          value.endsWith("%") ||
          value.endsWith("/") ||
          value.endsWith("*") ||
          value.endsWith("-") ||
          value.endsWith("+") ||
          value.endsWith(".")
        ) {
          setValue(value);
        } else {
          setValue(value + "/");
        }
        break;
      case "7":
        if (value === "0") {
          setValue("7");
        } else {
          setValue(value + "7");
        }
        break;
      case "8":
        if (value === "0") {
          setValue("8");
        } else {
          setValue(value + "8");
        }
        break;
      case "9":
        if (value === "0") {
          setValue("9");
        } else {
          setValue(value + "9");
        }
        break;
      case "*":
        if (
          value.endsWith("%") ||
          value.endsWith("/") ||
          value.endsWith("*") ||
          value.endsWith("-") ||
          value.endsWith("+") ||
          value.endsWith(".")
        ) {
          setValue(value);
        } else {
          setValue(value + "*");
        }
        break;
      case "4":
        if (value === "0") {
          setValue("4");
        } else {
          setValue(value + "4");
        }
        break;
      case "5":
        if (value === "0") {
          setValue("5");
        } else {
          setValue(value + "5");
        }
        break;
      case "6":
        if (value === "0") {
          setValue("6");
        } else {
          setValue(value + "6");
        }
        break;
      case "-":
        if (
          value.endsWith("%") ||
          value.endsWith("/") ||
          value.endsWith("*") ||
          value.endsWith("-") ||
          value.endsWith("+") ||
          value.endsWith(".")
        ) {
          setValue(value);
        } else {
          setValue(value + "-");
        }
        break;
      case "1":
        if (value === "0") {
          setValue("1");
        } else {
          setValue(value + "1");
        }
        break;
      case "2":
        if (value === "0") {
          setValue("2");
        } else {
          setValue(value + "2");
        }
        break;
      case "3":
        if (value === "0") {
          setValue("3");
        } else {
          setValue(value + "3");
        }
        break;
      case "+":
        if (
          value.endsWith("%") ||
          value.endsWith("/") ||
          value.endsWith("*") ||
          value.endsWith("-") ||
          value.endsWith("+") ||
          value.endsWith(".")
        ) {
          setValue(value);
        } else {
          setValue(value + "+");
        }
        break;
      case "0":
        if (value.startsWith("0")) {
          setValue("0");
        } else {
          setValue(value + "0");
        }
        break;
      case ".":
        if (
          value.endsWith("%") ||
          value.endsWith("/") ||
          value.endsWith("*") ||
          value.endsWith("-") ||
          value.endsWith("+") ||
          value.endsWith(".")
        ) {
          setValue(value);
        } else {
          setValue(value + ".");
        }
        break;
      case "=":
        setValue(eval(value).toString());
        break;
      default:
        break;
    }
  };
  return (
    <section>
      <ResulatadoStyle className="result">{value}</ResulatadoStyle>
      <PanelBotones childToParent={childToParent}></PanelBotones>
    </section>
  );
};

export default Resultado;
