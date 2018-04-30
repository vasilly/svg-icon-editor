import React, { Component } from "react";
import shades, { Shades } from "@bupa-digital/shades/react";
import { states } from "@bupa-digital/shades/helpers";

// import { Shades } from '@bupa-digital/shades/react';
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withInfo } from "@storybook/addon-info";

const SimpleBox = shades.div({
  padding: "10px",
  boxShadow: "3px 3px 3px #000",
  color: "#000",
  ...states.all("hover", "focus")({
    textDecoration: "underline"
  }),
  "::before": {
    content: "hello there"
  }
});

export { SimpleBox };
