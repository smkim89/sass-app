import React, { Component, Fragment } from 'react';
import styled, {injectGlobal} from 'styled-components';

injectGlobal`
  body{
    margin : 0;
    padding : 0;
  }
`

class App extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Button danger> danger </Button>
          <Button success> success </Button>
          <Anchor href="http://www.naver.com"> NAVER </Anchor>
        </Container>
      </Fragment>
    );
  }
}

//styled.div -> html 요소를 선택함.
const Container = styled.div`
  height : 100vh;
  width : 100%;
  background-color : red;
`;

const Button = styled.button`
  border-radius : 50px;
  padding : 5px;
  min-width : 120px;
  color : red;
  font-weight : 600px;
  webkit-appearance : none;
  cursor : pointer;
  &:active,
  &:focus {
    outline : none;
  }
  background-color : ${props => props.danger ? "black" : "white"}
`;

//Button 컴포넌트에 a태그 기능 추가
const Anchor = Button.withComponent("a").extend`
  text-decoration : none;
`


export default App;
