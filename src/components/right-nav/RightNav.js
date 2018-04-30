import React from "react";
import { render } from "react-dom";
import shades, { Shades } from "@bupa-digital/shades/react";
import { states } from "@bupa-digital/shades/helpers";
import logo from "./logo.svg";

const Icon = ({ icon }) => <img src={icon} alt="logo" />;

const ToolBarScrollableIcon = shades.div({
  justifyContent: "center",
  alignItems: "center",
  width: "34px",
  height: "164px",
  margin: "8px",
  backgroundClip: "content-box",
  border: "1px solid white"
});
const ToolBarScrollableIconGroup = shades.div({
  width: "100%",
  height: "100%",
  justifyContent: "center",
  touchAction: "manipulation",

  position: "relative"
});
const ToolBarScrollableInner = shades.div({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
});
const ToolBarScrollable = shades.div({
  width: "100%",
  border: "20px solid yellow",
  // justifyContent: "center",
  justifyContent: "space-between",
display:"flex",
  border: "1px solid",
  borderColor: "white",
  overflowX: "hidden",
  overflowY: "scroll",
  touchAction: "pan-y"
  // flex: 1
});
const ToolBar = shades.div({
  bottom: "0px",
  top: "0px",
  right: "0px",
  overflow: "visible",
  padding: "10px",
  border: "1px solid",
  width: "50px",
  // height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  opacity: 1,
  zIndex: "inherit",
  pointerEvents: "all",
  visibility: "visible",
  backgroundColor: "rgba(30, 30, 30, 1)",
  // position: "absolute",
  position: "fixed",
  fontSize: "13px",
  cursor: "default",
  borderColor: {
    dark: "purple",
    light: "cyan",
    default: "transparent"
  },
  color: {
    dark: "purple",
    light: "cyan",
    default: "black"
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

const RightNav = () => (
  <ToolBar dark>
    <ToolBarScrollable>
      <ToolBarScrollableInner>
        <ToolBarScrollableIconGroup>
          <ToolBarScrollableIcon>
            1<Icon icon={logo} />
          </ToolBarScrollableIcon>
          <ToolBarScrollableIcon>2</ToolBarScrollableIcon>
          <ToolBarScrollableIcon>3</ToolBarScrollableIcon>
        </ToolBarScrollableIconGroup>
      </ToolBarScrollableInner>
    </ToolBarScrollable>
  </ToolBar>
);

export default RightNav;
