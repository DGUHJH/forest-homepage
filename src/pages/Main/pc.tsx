import logo from 'assets/images/logo.png';
import background from 'assets/images/pc_background.png';
import * as Styled from './styled';

const pc = () => {
  const onClick = (id: number) => () => {
    if (id === 0) {
      scrollTo({ top: 960, behavior: 'smooth' });
    } else if (id === 1) {
      scrollTo({ top: 2021, behavior: 'smooth' });
    } else if (id === 2) {
      scrollTo({ top: 4661, behavior: 'smooth' });
    }
  };

  return (
    <Styled.Root>
      <Styled.HeaderBody>
        <Styled.HeaderContainer>
          <Styled.HeaderLogo src={logo} />
          <Styled.HeaderMenuContainer>
            <Styled.HeaderMenuTypo onClick={onClick(0)}>
              기업소개
            </Styled.HeaderMenuTypo>
            <Styled.HeaderMenuTypo onClick={onClick(1)}>
              핵심가치
            </Styled.HeaderMenuTypo>
            <Styled.HeaderMenuTypo onClick={onClick(2)}>
              TEAM
            </Styled.HeaderMenuTypo>
          </Styled.HeaderMenuContainer>
        </Styled.HeaderContainer>
      </Styled.HeaderBody>
      <Styled.BackgroundContainer>
        <Styled.BackgroundImg src={background} />
      </Styled.BackgroundContainer>
    </Styled.Root>
  );
};

export default pc;
