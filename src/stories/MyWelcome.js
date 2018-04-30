import React from 'react';
import {func, string} from 'prop-types';

import shades, { Shades } from '@bupa-digital/shades/react';
import LinkTo from '@storybook/addon-links/react';

const Main = shades.article({
  margin: 15,
  maxWidth: 600,
  lineHeight: 1.4,
  fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
});

const Title = shades.h1({});

const Note = shades.p({
  opacity: 0.5,
});

const InlineCode = shades.code({
  fontSize: 15,
  fontWeight: 600,
  padding: '2px 5px',
  border: '1px solid #eae9e9',
  borderRadius: 4,
  backgroundColor: '#f3f2f2',
  color: '#3a3a3a',
});

const linkStyles = {
  color: '#1474f3',
  textDecoration: 'none',
  borderBottom: '1px solid #1474f3',
  paddingBottom: 2,
};

const Link = shades.a(linkStyles);
const LinkButton = shades.button(linkStyles);

const NavButton = shades.button({
  ...linkStyles,
  borderTop: 'none',
  borderRight: 'none',
  borderLeft: 'none',
  backgroundColor: 'transparent',
  padding: 0,
  cursor: 'pointer',
  font: 'inherit',
});

const MyWelcome = props => (
  <Main>
    <Title>Welcome to Valhalla storybook</Title>
    <p>This is a UI component dev environment for your app.</p>
    <p>
      Global stories and <InlineCode>README.md</InlineCode> files are in <InlineCode>src/stories</InlineCode> directory.
      <br />
      A story is a single state of one or more UI components. You can have as many stories as you
      want.
      <br />
      (Basically a story is like a visual test case.)
    </p>
    <p>
      See these sample{' '}
      {props.showComponent ? (
        <NavButton onClick={props.showComponent}>stories1</NavButton>
      ) : (
        <LinkTo kind={props.showKind} story={props.showStory}>
          stories2
        </LinkTo>
      )}{' '}
      for a component called <InlineCode>SimpleBox</InlineCode>
      .
    </p>
    <p>
      Just like that, you can add your own components as stories.
      <br />
      You can also edit those components and see changes right away.
      <br />
      (Try editing the <InlineCode>Button</InlineCode> stories located at{' '}
      <InlineCode>src/stories/index.js</InlineCode>.)
    </p>
    <p>
      Usually we create stories with smaller UI components in the app.<br />
      Have a look at the{' '}
      <Link
        href="https://storybook.js.org/basics/writing-stories"
        target="_blank"
        rel="noopener noreferrer"
      >
        Writing Stories
      </Link>{' '}
      section in the storybook documentation.
    </p>
    <Note>
      <b>NOTE:</b>
      <br />
      Have a look at the <InlineCode>.storybook/webpack.config.js</InlineCode> to add webpack
      loaders and plugins you are using in this project.
    </Note>
  </Main>
);

MyWelcome.displayName = 'MyWelcome';
MyWelcome.propTypes = {
  showComponent: func,
  showKind: string,
  showStory: string,
};
MyWelcome.defaultProps = {
  showComponent: null,
  showKind: null,
  showStory: null,
};

export default MyWelcome;
