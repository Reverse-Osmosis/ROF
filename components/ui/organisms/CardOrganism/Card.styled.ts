import styled from 'styled-components';


export const CardWrapper = styled.div`
  //background-color: ${props => props.theme.colors.custom['900']};
  background: linear-gradient(180deg, #221551 0%, #221551 100%);
  width: 35rem;
  //height: 35rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1.8rem;
  padding: 3.6rem 3.4rem 7rem 3.4rem;
  row-gap: 2.5rem;
  position: relative;
`;

export const CardProjectInfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CardProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CardProjectInfoRRSS = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 1rem;
  width: 100%;
`;

export const CardProjectLaunch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

export const CardProjectRewardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
`;

export const CardProjectRewards = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 1rem;
  width: 100%;
`;

export const CardProjectTokensWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const CardProjectTokensSubWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardProjectTokensBG = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFFFFF;
  border: 1px solid #E2E2E2;
  box-shadow: inset 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
`;

export const CardProjectButtonWrapper = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
`;
