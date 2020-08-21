import React, { useState, useContext } from 'react';
import styled from 'styled-components';

import ContextStore from '../store';
import { addDrink, updateDrink, removeDrink } from '../reducers';

import Screen from '../utils/Screen';

import { ItemList, AddItem, CtrlBar } from '../containers/Home';

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  margin: 0 auto;
  padding: 3rem 0;
  width: ${Screen.md + 'px'};
  height: 100%;

  @media only screen and (max-width: ${p => p.theme.screenMd}) {
    padding: 0 0 2rem;
  }
`;

function Home() {
  const [toggle, setToggle] = useState(false);
  const { drinks, dispatch } = useContext(ContextStore);
  const [data, setData] = useState({});

  // DATA FLOW
  const onAdd = (payload) => dispatch(addDrink(payload)) || setToggle(false);
  const onUpdate = (payload) => dispatch(updateDrink(payload)) || setToggle(false);
  const onRemove = (id) => dispatch(removeDrink(id));

  // UI FLOW
  const onEdit = (payload) => setData(payload) || setToggle(true);
  const onToggle = () => setData({}) || setToggle(true);

  return (
    <Main>
      <Container>
        <CtrlBar toggle={toggle} onToggle={onToggle} />
        {
          toggle
            ? <AddItem className={toggle ? 'toggle' : ''} onAdd={onAdd} onUpdate={onUpdate} onCancel={setToggle} data={data} />
            : <ItemList drinks={drinks} onRemove={onRemove} onEdit={onEdit} />
        }
      </Container>
    </Main>
  )
}

export default Home;
