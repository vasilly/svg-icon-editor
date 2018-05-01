import React from 'react';
import { render } from 'react-dom';
import shades, { Shades } from '@bupa-digital/shades/react';
import { states } from '@bupa-digital/shades/helpers';
import logo from './logo.svg';

const Icon = ({ icon }) => <img src={icon} alt="logo" />;

const ToolBar = shades.div({
  bottom: '0px',
  top: '0px',
  right: '0px',
  overflow: 'visible',
  padding: '10px',
  border: '1px solid',
  width: '50px',
  // height: "100%",
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  opacity: 1,
  zIndex: 'inherit',
  pointerEvents: 'all',
  visibility: 'visible',
  backgroundColor: 'rgba(30, 30, 30, 1)',
  // position: "absolute",
  position: 'fixed',
  fontSize: '13px',
  cursor: 'default',
  borderColor: {
    dark: 'purple',
    light: 'cyan',
    default: 'transparent'
  },
  color: {
    dark: 'purple',
    light: 'cyan',
    default: 'black'
  },
  fontWeight: ({ mode }) => mode === 'thin' && '200',
  ...states({
    hover: {
      backgroundColor: {
        dark: 'purple',
        light: 'lightblue'
      },
      color: {
        dark: 'white',
        light: 'blue'
      }
    }
  })
});

const styleSpace = {
  padding: '0.1rem',
  margin: '0.1rem'
};

const styleBorder = {
  border: '1px solid grey'
};

const SideNav = shades.div({
  ...styleBorder,
  backgroundColor: {
    dark: 'rgba(30, 30, 30, 1)',
    light: 'rgba(100, 100, 100, 1)',
    default: 'rgba(30, 30, 30, 1)'
  },
  color: {
    dark: 'white',
    light: 'black',
    default: 'white'
  },
  flex: '1',
  display: 'flex',
  overflow: 'auto',
  flexDirection: 'column',
  'justify-content': 'center',

  width: '50px',
  height: '100%',
  position: 'fixed',
  top: '0',
  right: '0'
});

const SideNavWrap = shades.div({
  ...styleBorder,
  ...styleSpace,
  minHeight: 'min-content',
  display: 'flex',
  flexDirection: 'column'
});

const SideNavWrapItem = shades.div({
  ...styleBorder,
  ...styleSpace,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

const SideNavIcon = shades.div({
  height: '48px',
  width: '48px'
});


const RightNav = () => (
  <SideNav dark>
    <SideNavWrap>
      <SideNavWrapItem>
        <SideNavIcon>
          <Icon icon={logo} />
        </SideNavIcon>
      </SideNavWrapItem>
      <SideNavWrapItem>
        <SideNavIcon>
          <Icon icon={logo} />
        </SideNavIcon>
      </SideNavWrapItem>
      <SideNavWrapItem>
        <SideNavIcon>
          <Icon icon={logo} />
        </SideNavIcon>
      </SideNavWrapItem>
      <SideNavWrapItem>
        <SideNavIcon>
          <Icon icon={logo} />
        </SideNavIcon>
      </SideNavWrapItem>
      <SideNavWrapItem>
        <SideNavIcon>
          <Icon icon={logo} />
        </SideNavIcon>
      </SideNavWrapItem>
      <SideNavWrapItem>
        <SideNavIcon>
          <Icon icon={logo} />
        </SideNavIcon>
      </SideNavWrapItem>
    </SideNavWrap>
  </SideNav>
);

export { RightNav };
export default RightNav;
