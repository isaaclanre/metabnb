import styled from "styled-components";

export const NavStyle = styled.div`
  /* position: absolute; */
  width: 100%;
  height: 48px;

  //left: 10%;
  margin-top: 3%;

  top: 43px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-self: center;

  /* align-content: space-between; */
`;

export const Logo = styled.img`
  /* position: absolute; */
  left: 0%;
  width: 200px;
  /* right: 81.21%; */
  top: 7.64%;
  bottom: 15.97%;
`;

export const InnerNav = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: center;
  padding: 0px;
  gap: 5%;
  width: 37%;

  /* position: absolute; */
  /* left: 31.94%; */
  /* right: 17.58%; */
  top: 31.25%;
  bottom: 20.83%;
`;

export const InnerNavtext = styled.div`
  height: 25px;

  font-family: "Red Rose";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  /* identical to box height */

  /* text black */

  color: #434343;
`;

export const Button = styled.div`
  /* position: absolute; */
  /* left: 86.29%; */
  top: 0%;
  bottom: 0%;
  width: 157px;
  align-content: center;

  /* MAJOR */

  background: linear-gradient(90deg, #a02279 11.45%, #a02279 11.45%);
  border-radius: 10px;
`;

export const TextInButton = styled.span`
  position: relative;
  //width: 117px;
  height: 20px;
  left: 21px;
  top: 15px;

  font-family: "Red Rose";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  /* white */

  color: #ffffff;
`;
