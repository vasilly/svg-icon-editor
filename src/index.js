import Appp from "./App";
import registerServiceWorker from "./registerServiceWorker";
//

import React from "react";
import { render } from "react-dom";
import shades, { Shades } from "@bupa-digital/shades/react";
import { states } from "@bupa-digital/shades/helpers";
import RightNav from "./components/right-nav/RightNav";

const Title = shades.h1({
  color: {
    dark: "purple",
    light: "cyan",
    default: "black"
  },
  padding: "10px",
  border: "1px solid",
  borderColor: {
    dark: "purple",
    light: "cyan",
    default: "transparent"
  },
  fontWeight: ({ mode }) => mode === "thin" && "200",
  ...states({
    hover: {
      backgroundColor: {
        dark: "purple",
        light: "lightblue"
      },
      color: {
        dark: "white",
        light: "blue"
      }
    }
  })
});

const App = () => (
  <Shades to={document.querySelector("body")}>
    <h1>Hello</h1>
    <Title>Hello</Title>
    <Title dark>Hello</Title>
    <Title light>Hello</Title>
    <Title mode="thin" dark>
      Hello
    </Title>
    <Appp />
    <RightNav />
  </Shades>
);

render(<App />, document.getElementById("root"));
registerServiceWorker();
