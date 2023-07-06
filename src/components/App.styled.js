import styled from 'styled-components';
import { colors } from 'styles/vars';

export const Title = styled.h2`
  color: ${colors.colorTextContacts};
  font-size: 30px;
  padding: 0;
`;
export const Section = styled.section`
  width: 500px;
  margin: 10px;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
`;
export const Container = styled.div`
  max-width: 500px;
  text-align: center;
  margin: auto;
  padding: 30px;
`;
