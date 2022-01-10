import { Container, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderBody = styled.div`
  width: 100%;
  height: 120px;
  background: #fff;
  display: flex;
  align-items: center;
  position: fixed;
`;

export const HeaderContainer = styled(Container)`
  &&& {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
  }
`;

export const HeaderLogo = styled.img`
  width: 175px;
  height: 82px;
`;

export const HeaderMenuContainer = styled.div`
  width: 512px;
  height: 35px;
  display: flex;
  justify-content: space-between;
`;

export const HeaderMenuTypo = styled(Typography)`
  &&& {
    font-family: NotoSans-Medium;
    font-size: 24px;
    color: #000;
    cursor: pointer;
  }
`;

export const BackgroundContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const BackgroundImg = styled.img`
  width: 1920px;
  margin-top: 120px;
`;
