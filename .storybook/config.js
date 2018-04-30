import { configure, addDecorator } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import React from "react";

import { Shades } from "@bupa-digital/shades/react";

// look for stories in ../src/stories/ folder
// function loadStories() {
//   require('../src/stories');
// }

// look for stories in ../src/components/*.story.js
const req = require.context("../src/components/", true, /story.js$/);
function loadStories() {
  require("../src/stories");
  req.keys().forEach(req);
}

// wrap all components in stories with Shades decorator by default
const head = document.querySelector("head");
addDecorator(story => <Shades to={head}>{story()}</Shades>);

setOptions({
  name: "Valhalla",
  url:
    "https://github.com/bupa-digital/valhalla/blob/add-storybook/package.json",
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: true
});

configure(loadStories, module);
