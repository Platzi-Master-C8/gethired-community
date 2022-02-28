import {
  ItemCodeView,
  ItemButton,
  ItemButtonRun,
  ItemButtonSubmit,
  Loading,
  LoadingImg,
  SuccessContainer,
  SuccessDialogue,
  SuccessParagraph,
  SuccessTest,
  FailContainer,
  FailTest,
  FailParagraph,
  ContainerPG,
  ItemInfo,
  ItemTitle,
  ItemTitle2,
  ItemParagraph
} from '../../../components/challenges/playground/styledComponents';
import React, { useRef } from 'react';
import Editor from '@monaco-editor/react';
import Header from '../../../components/security/header/Header';
import Coolicon from '../../../public/icons/coolicon.svg';
import Image from 'next/image';
import iconSuccess from '../../../public/icons/successChallengeTest.png';
import iconFail from '../../../public/icons/testFail.png';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useUser } from '@auth0/nextjs-auth0';

const PlayGround = () => {
  const {
    query: { id }
  } = useRouter();

  const [state, setState] = React.useState({
    value: '',
    error: false,
    loading: false,
    confirmed: false,
    success: '',
    message: '',
    mounted: false,
    challenge: ''
  });
  const editorRef = useRef(null);
  const user = useUser();
  React.useEffect(() => {
    if (state.mounted) {
      fetch(`http://54.210.111.183/api/v1/runner/on/node/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          user: user.user.sub
        }
      })
        .then((data) => data.json())
        .then((data) => {
          setState({ ...state, challenge: data.data });
          editorRef.current.getModel().setValue(data.data.func_template);
        });
    }
  }, [state.mounted]);

  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
    setState({ ...state, mounted: true });
  }

  const onTest = () => {
    fetch(`http://54.210.111.183/api/v1/runner/check/node/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        user: user.user.sub
      },
      body: JSON.stringify({
        code: editorRef.current.getValue()
      })
    })
      .then((r) => r.json())
      .then((data) => onSuccess(data))
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmit = () => {
    fetch(`http://54.210.111.183/api/v1/runner/submit/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
        user: user.user.sub
      },
      body: JSON.stringify({
        challengeId: id,
        engine: 'node' //Hardcoded
      })
    });
  };

  const onSuccess = async (data) => {
    setState({
      ...state,
      success: data.test_result.status,
      message: data.test_result.status
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
      error: false,
      success: ''
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
    if (!state.loading) {
      if (state.success === 'passed') {
        onConfirmed();
      } else if (state.success === 'failed') {
        onError();
      }
    }
  }, [state.success]);

  const info = (
    <React.Fragment>
      <ItemInfo>
        <ItemTitle>{state.challenge.name ?? 'Loading...'}</ItemTitle>
        <ItemTitle2>Instrucciones</ItemTitle2>
        <ItemParagraph>
          {state.challenge.description ?? 'Loading...'}
        </ItemParagraph>
        <ItemTitle2>Objetivos</ItemTitle2>
        <ItemParagraph>
          {state.challenge.objectives ?? 'Loading...'}
        </ItemParagraph>
        <ItemCodeView>
          {state.loading && (
            <Loading>
              <LoadingImg />
              Ejecutando los test ...
            </Loading>
          )}
          <ItemButton>
            <ItemButtonRun
              onClick={() => {
                onCheck();
                onTest();
              }}
            >
              Run Tests
              <Image id="img-icon" src={Coolicon} alt="Run Challenge" />
            </ItemButtonRun>
            <ItemButtonSubmit
              onClick={() => {
                !state.confirmed
                  ? alert('Completa el desafío primero')
                  : onSubmit();
              }}
            >
              Submit
            </ItemButtonSubmit>
          </ItemButton>
        </ItemCodeView>
      </ItemInfo>
    </React.Fragment>
  );

  const error = (
    <React.Fragment>
      <FailContainer>
        <FailTest>
          <Image id="img-icon" src={iconFail} alt="Loading Icon" />0 Test
          pasados
        </FailTest>
        <SuccessDialogue>
          Encontramos unos errores en tu codigo
          <FailParagraph>{state.message}</FailParagraph>
          <FailParagraph>
            No te rindas, de los errores se aprende.
          </FailParagraph>
        </SuccessDialogue>
      </FailContainer>
      <ItemButton>
        <ItemButtonRun
          onClick={() => {
            onReset();
          }}
        >
          Regresar
        </ItemButtonRun>
      </ItemButton>
      ;
    </React.Fragment>
  );

  const success = (
    <React.Fragment>
      <SuccessContainer>
        <SuccessTest>
          <Image id="img-icon" src={iconSuccess} alt="Loading Icon"></Image>5
          Test pasados
        </SuccessTest>
        <SuccessDialogue>
          Felicidades pasaste el desafio
          <SuccessParagraph>
            Sigue adelante y no te rindas. aun queda mucho para llegar a la
            cima, haz click sobre el boton submit para guardar tu progreso y
            regresar a la seccion de categorias.
          </SuccessParagraph>
        </SuccessDialogue>
      </SuccessContainer>
      <ItemCodeView>
        <ItemButton>
          <ItemButtonRun
            onClick={() => {
              onReset();
            }}
          >
            Regresar
          </ItemButtonRun>
          <Link href="/challenges/categories" passHref>
            <ItemButtonSubmit
              onClick={() => {
                !state.confirmed
                  ? alert('Completa el desafio primero')
                  : onSubmit();
              }}
            >
              Submit
            </ItemButtonSubmit>
          </Link>
        </ItemButton>
      </ItemCodeView>
    </React.Fragment>
  );

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
      />
      <ItemInfo>
        {state.error ? error : !state.confirmed ? info : success}
      </ItemInfo>
    </ContainerPG>
  );
};
export default PlayGround;
