import styled from "@emotion/styled";

export const Item = styled.li`
  width: 400px;
  height: 100px;
  border-radius: 4px;
  background-color: #e3e0e0;
  display: flex;
  padding: 10px;
  padding-left: 30px;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  background-color: #000000;
  border-radius: 50%;
  margin-right: 30px;

  background-color: ${
    props => {
        return props.statusOnline ? '#00e80c' : '#e10000';
    }}
`;

export const Avatar = styled.img`
  margin-right: 32px;
  width: 48px;
`;

export const Paragraph = styled.p`
`;


