import React, { useState } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import { BlueButton, GrayButton } from '../../components/Button';

const Main = styled.section`
  margin: 0 auto;
  width: 95%;

  > div {
    width: 100%;

    &:not(:last-child) {
      margin-bottom: .5rem;
    }

    h4 {
      margin: 0 0 .1rem;
    }

    input {
      padding: .5rem;
      width: 100%;
      font-size: 1rem;
      border: 1px solid ${p => p.theme.gray};
      border-radius: .25rem;
      outline: none;

      &[valid='false'] {
        border-color: ${p => p.theme.red};

        + span {
          display: block;
        }
      }

      + span {
        display: none;
        font-size: 14px;
        color: ${p => p.theme.red};
      }
    }

    textarea {
      padding: .5rem;
      width: 100%;
      min-height: 60px;
      font-size: 1rem;
      font-family: ${p => p.theme.globalFont};
      border: 1px solid ${p => p.theme.gray};
      border-radius: .25rem;
      outline: none;
    }

    button {
      margin: 1rem auto 0;
      width: 50%;
    }
  }

  @media only screen and (max-width: ${p => p.theme.screenMd}) {
    width: 90%;

    > div button {
      width: 100%;
    }
  }
`;

function AddItem(props) {
  const { data, onAdd, onUpdate, onCancel } = props;

  const initialForm = { name: '', nvalid: true, price: 0, pvalid: true, notes: '', ...data };
  const [form, setForm] = useState(initialForm);

  const validate = () => {
    const nvalid = form.name.length > 0;
    const pvalid = form.price > 0 && form.price < 1000;
    setForm({ ...form, nvalid, pvalid });
    return nvalid && pvalid;
  }

  const onSave = () => validate() ? onUpdate(form) || setForm(initialForm) : null;
  const onSubmit = () => validate() ? onAdd(form) || setForm(initialForm) : null;

  const onChange = (e) => {
    const key = e.target.name;
    let value = e.target.value;

    switch (key) {
      case 'price':
        if (value <= 0) {
          value = value.length === 1 ? value : '0';
        } else {
          value = parseInt(value, 10) + '';
          value = value > 1000 ? 999 : value;
        }
        break;
      default:
        break;
    }
    setForm({ ...form, [key]: value });
  };

  return (
    <Main>
      <div>
        <h4>Name</h4>
        <input name="name" valid={form.nvalid.toString()} type="text" value={form.name} onChange={onChange.bind(this)} />
        <span>Can not be empty.</span>
      </div>
      <div>
        <h4>Price</h4>
        <input name="price" valid={form.pvalid.toString()} type="number" value={form.price} onChange={onChange.bind(this)} />
        <span>Must be greater than zero.</span>
      </div>
      <div>
        <h4>Notes</h4>
        <textarea name="notes" value={form.notes} onChange={onChange.bind(this)} />
      </div>
      <div>
        {
          form.id
            ? <BlueButton onClick={() => onSave()}>Save</BlueButton>
            : <BlueButton onClick={() => onSubmit()}>Submit</BlueButton>
        }
        <GrayButton onClick={() => onCancel(false)}>Cancel</GrayButton>
      </div>
    </Main>
  );
}

AddItem.defaultProps = {
  data: {},
}

AddItem.propTypes = {
  data: propTypes.object,
  onAdd: propTypes.func.isRequired,
  onUpdate: propTypes.func.isRequired,
  onCancel: propTypes.func.isRequired,
}

export default AddItem;
