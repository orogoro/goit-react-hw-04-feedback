import styled from 'styled-components';

export const FeedbackSection = styled.section`
  margin-left: 20px;
`;

export const FeedbackFormTitle = styled.h2`
  margin: 0;
  margin-bottom: 20px;
`;

export const FeedbackFormButton = styled.button`
  padding: 8px 15px;
  font-size: 15px;
  outline: none;
  border: none;
  color: ${props => props.color};

  border-radius: 3px;
  cursor: pointer;
  box-shadow: 0 1px 2px 1px #000;
  transition: 0.5s;

  & + & {
    margin-left: 15px;
  }

  &:hover {
    transform: scale(1.1);
    color: #000;
    box-shadow: 0 1px 4px 2px ${props => props.color};
  }
`;

export const StatisticsList = styled.ul`
  display: grid;
  grid-row-gap: 7px;
  list-style: none;
  padding: 0;
  font-size: 20px;
`;
