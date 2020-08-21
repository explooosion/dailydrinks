import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: .5rem 0;
  width: 120px;
  font-size: 1rem;
  color: ${p => p.theme.black};
  border: 1px solid ${p => p.theme.black};
  border-radius: .25rem;
  outline: 0;
  cursor: pointer;

  &:hover {
    opacity: .9;
  }

  &:active {
    opacity: .8;
  }
`;

export const BlueButton = styled(Button)`
  color: ${p => p.theme.white};
  background-color: ${p => p.theme.blue};
  border: 0;
`;

export const GrayButton = styled(Button)`
  color: ${p => p.theme.white};
  background-color: ${p => p.theme.gray};
  border: 0;
`;

export default Button;
