import styled from '@emotion/styled'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin: 0 auto;
  background-color: rgb(207, 208, 208);
  border-radius: 4px;
  margin-bottom: 30px;
`;
export const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  height: 60px;
  justify-content: center;
  background-color: ${getRandomHexColor()};
`;