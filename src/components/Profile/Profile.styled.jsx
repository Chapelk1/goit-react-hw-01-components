import styled from "@emotion/styled";

export const Card = styled.div`
  width: 300px;
  height: 400px;
  background-color: #eaf1fe;
  border-radius: 4px;
  margin: 100px auto;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 250px;
  padding: 20px;
  border-bottom: #909db7;
  border-bottom: 1.5px solid rgba(54, 92, 107, 0.15);
  margin-bottom: 30px;
  background-color: #e0f2ff;
`;

export const Avatar = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 1px solid #9cb5ec;
    `

export const Paragraph = styled.p``;

export const StatsList = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Stat = styled.li`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`;

export const Label = styled.span``

export const Quantity = styled.span``;