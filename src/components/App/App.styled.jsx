import styled from "@emotion/styled";
import {Button} from "../Button/Button";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 16px;
  padding-bottom: 24px;
  text-align:center;
`;


export const LoadButton = styled(Button)`
  justify-self: center;
  align-self: center;
`;
