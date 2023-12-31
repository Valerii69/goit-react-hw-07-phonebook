import styled from 'styled-components';
import { colors } from 'styles/vars';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-top: 10px;
  color: ${colors.colorTextContacts};
  font-size: 16px;
  font-weight: 500;
`;
export const Input = styled.input`
  width: 250px;
  padding: 5px;
  background: transparent;
  border-radius: 3px;
  border: ${colors.border};
  box-shadow: ${colors.boxShadow};
  color: ${colors.colorTextContacts};
`;
export const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: ${colors.border};
  color: ${colors.colorTextContacts};
  box-shadow: ${colors.boxShadow};
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  cursor: pointer;
`;

export const FormContainer = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
