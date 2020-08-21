import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Container = styled.div`
  margin: 0 auto;
  width: 95%;

  @media only screen and (max-width: ${p => p.theme.screenMd}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 90%;
  }
`;

const Row = styled.div`
  display: flex;
  margin: .5rem 0;
  padding: .5rem;
  width: 100%;

  @media only screen and (max-width: ${p => p.theme.screenMd}) {
    border: 1px solid ${p => p.theme.gray};
    box-shadow: 2px 2px 2px ${p => p.theme.gray};
    flex-wrap: wrap;
  }
`;

const RowHead = styled(Row)`
  font-weight: bold;

  div:nth-child(3)::before {
    content: '';
    margin-right: 0;
  }

  @media only screen and (max-width: ${p => p.theme.screenMd}) {
    display: none;
  }
`;

const Col = styled.div`
  text-align: center;

  > svg {
    margin: 0 .25rem;
    padding: .5rem;
    font-size: 2rem;
    color: #fff;
    border-radius: .25rem;
    cursor: pointer;

    &:hover {
      opacity: .9;
    }

    &:active {
      opacity: .8;
    }

    &[action='edit'] {
      background-color: ${p => p.theme.green};
    }

    &[action='delete'] {
      background-color: ${p => p.theme.red};
    }
  }

  @media only screen and (min-width: ${p => p.theme.screenMd}) {
    &:nth-child(1) {
      flex: 1;
    }

    &:nth-child(2) {
      flex: 2;
    }

    &:nth-child(3)::before {
      content: '$';
      margin-right: .15rem;
    }

    &:nth-child(4) {
      flex: 4;
    }

    &:nth-child(5) {
      flex: 2;
    }
  }

  @media only screen and (max-width: ${p => p.theme.screenMd}) {
    display: flex;
    align-items: center;

    &:nth-child(1) {
      width: 14%;

      &::before {
        content: '#';
        margin-right: .15rem;
      }
    }

    &:nth-child(2) {
      justify-content: center;
      width: 43%;

      &::before {
        content: 'Name:';
        margin-right: .15rem;
      }
    }

    &:nth-child(3) {
      justify-content: flex-end;
      width: 43%;

      &::before {
        content: 'Price: $';
        margin-right: .15rem;
      }
    }

    &:nth-child(4) {
      width: 70%;
      color: ${p => p.theme.gray};
    }

    &:nth-child(5) {
      justify-content: flex-end;
      margin-top: .25rem;
      width: 30%;
    }
  }
`;

function ItemList(props) {
  const { drinks, onRemove, onEdit } = props;

  const renderItem = (item, index) => {
    const { id, name, price, notes } = item;
    return (
      <Row key={`item-${index}`}>
        <Col>{index + 1}</Col>
        <Col>{name}</Col>
        <Col>{price}</Col>
        <Col>{notes ? notes : '-'}</Col>
        <Col>
          <FaEdit action="edit" onClick={() => onEdit(item)} />
          <FaTrash action="delete" onClick={() => onRemove(id)} />
        </Col>
      </Row>
    )
  }

  const renderHead = () => {
    return (
      <RowHead>
        <Col>#</Col>
        <Col>Name</Col>
        <Col>Price</Col>
        <Col>Notes</Col>
        <Col>Actions</Col>
      </RowHead>
    )
  }

  return (
    <Container>
      {renderHead()}
      {drinks.map(renderItem.bind(this))}
    </Container>
  );
}

ItemList.defaultProps = {
  drinks: [],
}

ItemList.propTypes = {
  drinks: propTypes.array,
  onRemove: propTypes.func.isRequired,
  onEdit: propTypes.func.isRequired,
}

export default ItemList;
