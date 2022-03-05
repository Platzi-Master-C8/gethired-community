import styled from '@emotion/styled';

export const ContainerPG = styled.div`
  overflow-y: hidden;
  width: 100%;
  display: grid;
  grid-template-rows: 60px 99%;
  grid-template-columns: 66% 34%;
  grid-template-areas:
    ' header header'
    ' codeView info';
`;

export const ItemInfo = styled.div`
  grid-area: info;
`;

export const ItemTitle = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;
  //@formatter:off
  background: linear-gradient(
    90deg,
    rgba(95, 100, 255, 0.7) 0%,
    rgba(174, 78, 255, 0.85) 100%
  );
  //@formatter:on
  font-size: 34px;
  color: white;
`;

export const ItemTitle2 = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content: center;
  font-size: 21px;
  border-bottom: 2px solid #a779ff;
`;

export const ItemParagraph = styled.div`
  height: 100px;
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: justify;
  font-size: 15px;
  margin-bottom: 25px;
  line-height: 25px;
`;

export const ItemCodeView = styled.div`
  height: 39%;
  box-shadow: 3px 3px 3px #a779ff;
  grid-area: codeView;

  & section {
    margin: 0;
  }
`;

export const ItemButton = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem 0 0 0;
  justify-content: center;
  align-items: center;
`;

export const ItemButtonRun = styled.div`
  height: 35px;
  width: 131px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #a779ff;
  background-color: white;
  border-radius: 6px;
  border: 1px solid #a779ff;
  font-size: 14px;
  font-weight: bold;

  &:hover {
    color: white;
    background-color: #a779ff;
    border: 0.5px solid rgba(85, 91, 255, 0.79);
    cursor: pointer;
  }
`;

export const ItemButtonSubmit = styled.div`
  height: 35px;
  width: 82px;
  font-size: 14px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
  font-weight: bold;
  background-color: #a779ff;
  border-radius: 6px;
  border: 1px solid #a779ff;
  padding-top: 3px;
  margin: 0 30px;

  &:hover {
    color: #a779ff;
    background-color: white;
    border: 0.5px solid rgba(85, 91, 255, 0.79);
    cursor: pointer;
  }
`;
export const Loading = styled.div`
  height: 89%;
  width: 34%;
  padding: 0 1rem;
  position: absolute;
  top: 60px;
  z-index: 1;
  grid-area: info;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 2rem;
  color: black;
`;

export const LoadingImg = styled.div`
  width: 70px;
  height: 70px;
  border: 10px solid #eee;
  border-top: 10px solid #a779ff;
  border-radius: 50%;
  animation-name: girar;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  z-index: 2;
  @keyframes girar {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const SuccessContainer = styled.div`
  height: 85%;
  width: 95%;
  margin: 0 auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 2rem;
  color: black;
  border: 2px solid #a779ff;
`;
export const SuccessDialogue = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
`;
export const SuccessParagraph = styled.p`
  font-size: 1.5rem;
  text-align: justify;
`;
export const SuccessTest = styled.p`
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid #0ac433;
  display: flex;
  gap: 1rem;
`;
export const FailContainer = styled(SuccessContainer)`
  border: 2px solid #f04925;
`;

export const FailTest = styled(SuccessTest)`
  border: 2px solid #f04925;
`;

export const FailParagraph = styled(SuccessParagraph)``;

