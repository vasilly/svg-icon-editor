import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";

import { Button, Welcome } from "@storybook/react/demo";
import MyWelcome from "./MyWelcome";

storiesOf(" Welcome", module).add("to Valhalla Storybook", () => (
  <MyWelcome showComponent={linkTo("SimpleBox")} />
));

storiesOf("Button", module)
  .add("A", () => (
    <Button onClick={action("clicked")}>A</Button>
  ))
  .add("B", () => (
    <Button onClick={action("clicked")}>B</Button>
  ));
