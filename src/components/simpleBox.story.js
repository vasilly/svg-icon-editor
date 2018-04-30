import React from "react";

import { states } from "@bupa-digital/shades/helpers";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withInfo } from "@storybook/addon-info";

import { Button, Welcome } from "@storybook/react/demo";
import {SimpleBox as SimpleBoxWrapped}  from "./SimpleBox";


const SimpleBox = props => <SimpleBoxWrapped {...props}>{props.children}</SimpleBoxWrapped>;


// storiesOf("Button", module)
//   .add("with text", () => (
//     <Button onClick={action("clicked")}>SimpleBox Soon!</Button>
//   ))

storiesOf("SimpleBox", module)
// add Shades to stories individually
// not needed as we are adding Shades as decorator globally in the file
// '.storybook/config.js'
//
// .addDecorator(story => (
//   <Shades to={head}>
//     {story()}
//   </Shades>
// ))
.add(
  "SimpleBox",
  withInfo(`
      description or documentation about my component, supports markdown
      ~~~js
      <SimpleBox />
      ~~~
    `)(() => (
      <SimpleBox />
  ))
);


storiesOf('Component', module)
  .add('simple info',
    withInfo({
      styles: {
        header: {
          h1: {
            color: 'red'
          }
        }
      },
      text: 'String or React Element with docs about my component', // Warning! This option's name will be likely renamed to "summary" in 3.3 release. Follow this PR #1501 for details
      // other possible options see in Global options section below
    })(() =>
      <Button>Click the "?" mark at top-right to view the info.</Button>
    )
  )
// .add('custom info styles using a function',
//   withInfo()(() =>
//     <SimpleBox>Click the "?" mark at top-right to view the info.</SimpleBox>
//   )
// )
