import { Container, Drawer, Typography } from '@material-ui/core';
import { ArrowDownward, Close, Menu } from '@material-ui/icons';
import styled from 'styled-components';

export const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
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

export const MHeaderBody = styled.div`
  width: 100vw;
  height: 13.8vw;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 0 5vw;
  box-sizing: border-box;
`;

export const MLogoImg = styled.img`
  width: 20vw;
`;

export const MMenuButton = styled(Menu)`
  &&& {
    font-size: 8vw;
    cursor: pointer;
  }
`;

export const MDrawer = styled(Drawer)``;

export const MDrawerBody = styled.div`
  &&& {
    width: 60vw;
    height: 100vh;
    background: #e2e2e2;
    padding: 5vw;
    box-sizing: border-box;
    position: relative;
  }
`;

export const MDrawerCloseButton = styled(Close)`
  &&& {
    font-size: 8vw;
    cursor: pointer;
    position: absolute;
    top: 5vw;
    right: 5vw;
  }
`;

export const MDrawerMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 8vw;
`;

export const MDrawerMenuWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px #939393 solid;
  cursor: pointer;
  margin-top: 6vw;
`;

export const MDrawerMenuTypo = styled(Typography)`
  &&& {
    font-size: 4vw;
  }
`;

export const MDrawerArrowDownButton = styled(ArrowDownward)`
  &&& {
    font-size: 4vw;
    color: #939393;
  }
`;

export const MBackgroundImg = styled.img`
  width: 100vw;
  margin-top: 13.8vw;
`;

export const MBar = styled.div`
  width: 100vw;
  height: 1px;
  position: absolute;
`;
