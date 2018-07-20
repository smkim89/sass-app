import React, {Component} from 'react';
import styled, {injectGlobal,css} from 'styled-components';

injectGlobal`
  body{
    margin : 0;
    padding : 0;
  }
`

//공통적으로 사용할 css를 캡슐화 할 수 있음.
const commonCss = css`
  box-shadow : 0 4px 6px rgba(50, 50, 93, 0.11), 0  1px 3px rgba(0, 0, 0, 0.08);
  background-color : white;
  border-radius : 10px;
  padding : 20;
`

const Input = styled.input.attrs({
  required : true

})`
border-radius : 5px;
${commonCss}
`

//styled.div -> html 요소를 선택함.
const Container = styled.div`
  height : 100vh;
  width : 100%;
  background-color : pink;
`;


class App extends Component {
  render() {
    return (
        <Container>
          <Input placeholder="HELLO" />
        </Container>
    );
  }
}
export default App;