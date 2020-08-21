import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { rgba } from 'polished';

import { BlueButton } from '../../components/Button';

const Main = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 1rem 0 2rem;
  width: 95%;
  height: 60px;
  background-color: ${p => p.theme.white};
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    bottom: 1rem;
    width: 100%;
    height: 1px;
    background-color: ${p => p.theme.gray};
  }

  @media only screen and (max-width: ${p => p.theme.screenMd}) {
    padding: 1rem 2rem;
    margin-bottom: 1rem;
    width: 100%;
    color: ${p => p.theme.white};
    background-color: ${p => rgba(p.theme.gray, .98)};

    &::after {
      display: none;
    }
  }
`;

function CtrlBar(props) {
  const { toggle, onToggle } = props;
  return (
    <Main>
      <span>DailyDrinks{toggle ? ' - Add' : ''}</span>
      {toggle ? null : <BlueButton onClick={() => onToggle()}>Add</BlueButton>}
    </Main>
  );
}

CtrlBar.propTypes = {
  toggle: propTypes.bool.isRequired,
  onToggle: propTypes.func.isRequired,
}

export default CtrlBar;
