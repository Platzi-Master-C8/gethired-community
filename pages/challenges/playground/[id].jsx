import {
  ContainerPG,
  FailContainer,
  FailParagraph,
  FailTest,
  ItemButton,
  ItemButtonRun,
  ItemButtonSubmit,
  ItemCodeView,
  ItemInfo,
  ItemParagraph,
  ItemTitle,
  ItemTitle2,
  Loading,
  LoadingImg,
  SuccessContainer,
  SuccessDialogue,
  SuccessParagraph,
  SuccessTest
} from '../../../components/challenges/playground/styledComponents';
import React, { useContext, useRef } from 'react';
import Editor from '@monaco-editor/react';
import Header from '../../../components/security/header/Header';
import Coolicon from '../../../public/icons/coolicon.svg';
import Image from 'next/image';
import iconSuccess from '../../../public/icons/successChallengeTest.png';
import iconFail from '../../../public/icons/testFail.png';
import { useRouter } from 'next/router';
import UserProvider from '../../../Providers/UserProvider';
import Link from 'next/link';

const PlayGround = () => {
  const user = useContext(UserProvider);
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

  React.useEffect(() => {
    if (state.mounted && user) {
      fetch(`https://www.uthsocial.com/api/v1/runner/on/node/${id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          user: user.sub
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
    fetch(`https://www.uthsocial.com/api/v1/runner/check/node/${id}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        user: user.sub
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
    const fetcher = async () => {
      await fetch(`https://www.uthsocial.com/api/v1/runner/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          user: user.sub
        },
        body: JSON.stringify({
          challengeId: id,
          engine: 'node' //Hardcoded
        })
      }).catch((err) => {
        console.log(err);
      });
    };
    fetcher();
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
        <ItemTitle2>Instructions</ItemTitle2>
        <ItemParagraph>
          {state.challenge.description ?? 'Loading...'}
        </ItemParagraph>
        <ItemTitle2>Goals</ItemTitle2>
        <ItemParagraph>
          {state.challenge.objectives ?? 'Loading...'}
        </ItemParagraph>
        <ItemCodeView>
          {state.loading && (
            <Loading>
              <LoadingImg />
              Running the tests...
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
                  ? alert('Complete the challenge first.')
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
          completed
        </FailTest>
        <SuccessDialogue>
          We found some errors in your code.
          <FailParagraph>{state.message}</FailParagraph>
          <FailParagraph>
            Do not give up, you can learn from your mistakes.
          </FailParagraph>
        </SuccessDialogue>
      </FailContainer>
      <ItemButton>
        <ItemButtonRun
          onClick={() => {
            onReset();
          }}
        >
          Go back
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
          Completed tests.
        </SuccessTest>
        <SuccessDialogue>
          Congratulations you passed the challenge.
          <SuccessParagraph>
            Keep going and do not give up. There is still a long way to go to
            reach the top, click on the submit button to save your progress and
            return to the categories section.
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
            Go back
          </ItemButtonRun>
          <Link href="/challenges/categories" passHref>
            <ItemButtonSubmit onClick={onSubmit}>Submit</ItemButtonSubmit>
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
