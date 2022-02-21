import React, { useRef } from "react";
import Editor from "@monaco-editor/react";
import Header from "../../../components/security/header/Header";
import styled from "@emotion/styled";
import Coolicon from "../../../public/icons/coolicon.svg";
import Image from "next/image";
import loadingIcon from "../../../public/icons/loading.png";
import progressBar from "../../../public/icons/progressbar.png";
import iconSucces from "../../../public/icons/successChallengeTest.png";
import iconFail from "../../../public/icons/testFail.png";

const ContainerPG = styled.div`
  overflow-y: hidden;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 60px 99%;
  grid-template-columns: 66% 34%;
  grid-template-areas:
    " header header"
    " codeView info";
`;

const ItemInfo = styled.div`
  grid-area: info;
`;

const ItemTitle = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg,
  rgba(95, 100, 255, 0.7) 0%,
  rgba(174, 78, 255, 0.85) 100%);
  font-size: 34px;
  color: white;
`;

const ItemTitle2 = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  align-items: center;
  justify-content: center;
  font-size: 21px;
  border-bottom: 2px solid #a779ff;
`;

const ItemParraf = styled.div`
  height: 100px;
  margin-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: justify;
  font-size: 15px;
  margin-bottom: 25px;
  line-height: 25px;
`;

const datos = {
  title: "Reto # 1",
  // eslint-disable-next-line prettier/prettier
  "instructions": "El ejercicio clasico e introductorio. Tan solo un Hola, Mundo!!. Hola ,Mundo! es el tradicional primer programa para acercarse al ambiente en un lenjuague de programación.",
  objectives:
    "Crea una función que retorne una cadena de texto \"Hola mundo\". Corre el codigo y asegurate de que sea exitoso. Si tu solución es correcta estaràs listo para pasar al siguiente ejercicio y adentrarte en el maravilloso mundo de JavaScript.",
  debug:
    "When a test fails, a message is displayed describing what went wrong and for which input. You can also use the fact that any console output will be shown too. You can write to the console using:  \"Console.log(\"Debug Message\")\"",
  solved:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\"s standard dummy text ever since the 1500s, .",
  error: {
    errorMsj: "Test Suite Failed to Run",
    errorCode: "Syntax Error"
  }
};

const ItemCodeView = styled.div`
  height: 39%;
  box-shadow: 3px 3px 3px #a779ff;
  grid-area: codeView;

  & section {
    margin: 0;
  }
`;

const ItemButton = styled.div`
  display: flex;
  width: 100%;
  padding: 3.5rem 0 1rem 0;
  justify-content: center;
  align-items: center;
`;

const ItemButtonRun = styled.div`
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
  padding-top: 3px;

  &:hover {
    color: white;
    background-color: #a779ff;
    border: 0.5px solid rgba(85, 91, 255, 0.79);
    cursor: pointer;
  }
`;

const ItemButtonSubmit = styled.div`
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
const Loadign = styled.div`
  height: 81%;
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

const SuccesConteiner = styled.div`
  height: 80%;
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
const SuccesDialogue = styled.div`
  height: 50%;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
`;
const SuccesParraf = styled.p`
  font-size: 1.5rem;
  text-align: justify;
`;
const SuccesTest = styled.p`
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid #0ac433;
  display: flex;
  gap: 1rem;
`;
const FailContainer = styled(SuccesConteiner)`
  border: 2px solid #9a0707;
`;

const FailTest = styled(SuccesTest)`
  border: 2px solid #9a0707;
`;

const ChallengeTrue = "pasado";

const PlayGround = () => {
  const [state, setState] = React.useState({
    value: "",
    error: false,
    loading: false,
    deleted: false,
    confirmed: false
  });

  const editorRef = useRef(null);

  function handleEditorDidMount (editor, monaco) {
    editorRef.current = editor;
    fetch("http://54.210.111.183/api/v1/runner/on/163")
    .then((data) => data.json())
    .then((data) => {
      editorRef.current.getModel().setValue(data.template);
    });
  }

  function handleEditorChange (value, event) {
    console.log("here is the current model value:", value);
  }

  const onSubmit = () => {
    fetch("http://54.210.111.183/api/v1/runner/check/163",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          code: editorRef.current.getValue()
        })
      }).then(r => r.json()).then(data => {console.log(data);});
  };

  const onWrite = (newValue) => {
    setState({
      ...state,
      value: newValue
    });
  };

  const onCheck = () => {
    setState({
      ...state,
      loading: true
    });
  };

  const onError = () => {
    setState({
      ...state,
      error: true,
      loading: false,
      confirmed: false
    });
  };

  const onReset = () => {
    setState({
      ...state,
      confirmed: false,
      error: false
    });
  };

  const onConfirmed = () => {
    setState({
      ...state,
      error: false,
      loading: false,
      confirmed: true
    });
  };

  React.useEffect(() => {
    if (!!state.loading) {
      setTimeout(() => {
        if (state.value === ChallengeTrue) {
          onConfirmed();
        } else {
          onError();
        }
      }, 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.loading]);

  if (!state.confirmed && !state.error) {
    return (
      <ContainerPG>
        <Header />
        <Editor
          height="90vh"
          width="100%"
          defaultLanguage="javascript"
          defaultValue={state.value}
          theme="vs-dark"
          onMount={handleEditorDidMount}
          onChange={(value) => {
            onWrite(value);
          }}
        />
        <ItemInfo>
          <ItemTitle>{datos.title}</ItemTitle>
          <ItemTitle2>Instrucciones</ItemTitle2>
          <ItemParraf>{datos.instructions}</ItemParraf>
          <ItemTitle2>Objetivos</ItemTitle2>
          <ItemParraf>{datos.objectives}</ItemParraf>
          <ItemCodeView>
            {state.loading && (
              <Loadign>
                <Image
                  id="img-icon"
                  src={loadingIcon}
                  alt="Loading Icon"
                ></Image>
                <Image
                  id="img-icon"
                  src={progressBar}
                  alt="Progress Bar"
                ></Image>
                Cargando ...
              </Loadign>
            )}
            <ItemButton>
              <ItemButtonRun
                onClick={() => {
                  onCheck();
                }}
              >
                Run Tests
                <Image id="img-icon" src={Coolicon} alt="Run Challenge" />
              </ItemButtonRun>
              <ItemButtonSubmit onClick={onSubmit}>
                Submit
              </ItemButtonSubmit>
            </ItemButton>
          </ItemCodeView>
        </ItemInfo>
      </ContainerPG>
    );
  } else if (state.confirmed) {
    return (
      <ContainerPG>
        <Header />
        <Editor
          height="90vh"
          width="100%"
          defaultLanguage="javascript"
          defaultValue={state.value}
          theme="vs-dark"
          onMount={handleEditorDidMount}
          onChange={handleEditorChange}
        />
        <ItemInfo>
          <SuccesConteiner>
            <SuccesTest>
              <Image id="img-icon" src={iconSucces} alt="Loading Icon"></Image>5
              Test pasados
            </SuccesTest>
            <SuccesDialogue>
              Parece que pasaste tu primer desafio
              <SuccesParraf>
                Sigue adelante y no te rindas. aun queda mucho para llegar a la
                cima, haz click sobre el boton submit para guardar tu progreso.
              </SuccesParraf>
            </SuccesDialogue>
          </SuccesConteiner>
          <ItemCodeView>
            <ItemButton>
              <ItemButtonRun
                onClick={() => {
                  onReset();
                }}
              >
                Regresar
              </ItemButtonRun>
              <ItemButtonSubmit onClick={onSubmit}>
                Submit
              </ItemButtonSubmit>
            </ItemButton>
          </ItemCodeView>
        </ItemInfo>
      </ContainerPG>
    );
  } else if (state.error) {
    return (
      <ContainerPG>
        <Header />
        <Editor
          height="90vh"
          width="100%"
          defaultLanguage="javascript"
          defaultValue={state.value}
          theme="vs-dark"
          onMount={handleEditorDidMount}
          onChange={handleEditorChange}
        />
        <ItemInfo>
          <FailContainer>
            <FailTest>
              <Image id="img-icon" src={iconFail} alt="Loading Icon"></Image>0
              Test pasados
            </FailTest>
            <SuccesDialogue>
              Encontramos unos errores en tu codigo
              <SuccesParraf>
                No te rindas, recuerda que que nunca hay que rendirse.
              </SuccesParraf>
            </SuccesDialogue>
          </FailContainer>
          <ItemCodeView>
            <ItemButton>
              <ItemButtonRun
                onClick={() => {
                  onReset();
                }}
              >
                Regresar
              </ItemButtonRun>
            </ItemButton>
          </ItemCodeView>
        </ItemInfo>
      </ContainerPG>
    );
  }
};

export default PlayGround;
