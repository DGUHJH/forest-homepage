import logo from 'assets/images/logo.png';
import background from 'assets/images/mobile_background.png';
import { useRef, useState } from 'react';
import * as Styled from './styled';

const mobile = () => {
  const [open, setOpen] = useState(false);
  const ref = [useRef<any>(null), useRef<any>(null), useRef<any>(null)];

  const onClick = (id: number) => () => {
    ref[id].current?.scrollIntoView();
    setOpen(false);
  };

  return (
    <Styled.Root>
      <Styled.MHeaderBody>
        <Styled.MLogoImg src={logo} />
        <Styled.MMenuButton onClick={() => setOpen((prev) => !prev)} />
      </Styled.MHeaderBody>
      <Styled.MDrawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Styled.MDrawerBody>
          <Styled.MDrawerMenuContainer>
            <Styled.MDrawerMenuWrapper onClick={onClick(0)}>
              <Styled.MDrawerArrowDownButton />
              <Styled.MDrawerMenuTypo>기업소개</Styled.MDrawerMenuTypo>
            </Styled.MDrawerMenuWrapper>
            <Styled.MDrawerMenuWrapper onClick={onClick(1)}>
              <Styled.MDrawerArrowDownButton />
              <Styled.MDrawerMenuTypo>핵심가치</Styled.MDrawerMenuTypo>
            </Styled.MDrawerMenuWrapper>
            <Styled.MDrawerMenuWrapper onClick={onClick(2)}>
              <Styled.MDrawerArrowDownButton />
              <Styled.MDrawerMenuTypo>TEAM</Styled.MDrawerMenuTypo>
            </Styled.MDrawerMenuWrapper>
          </Styled.MDrawerMenuContainer>
          <Styled.MDrawerCloseButton onClick={() => setOpen(false)} />
        </Styled.MDrawerBody>
      </Styled.MDrawer>
      <Styled.MBar ref={ref[0]} style={{ top: '140vw' }} />
      <Styled.MBar ref={ref[1]} style={{ top: '362vw' }} />
      <Styled.MBar ref={ref[2]} style={{ top: '992vw' }} />
      <Styled.MBackgroundImg src={background} />
    </Styled.Root>
  );
};

export default mobile;
