import React, {Component} from 'react';
import styled, {injectGlobal,css, ThemeProvider} from 'styled-components';
import theme from './theme';

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

//모든 컴포턴트에서 props(<ThemeProvider theme={theme}>)안의 theme에서 값을 가져올 수 있음.
const Button = styled.button`
  border-radius : 30px;
  padding : 25px 15px;
  background-color : ${props => props.theme.successColor}
`;

//styled.div -> html 요소를 선택함.
const Container = styled.div`
  height : 100vh;
  width : 100%;
  background-color : pink;
`;

const Card = styled.div`
  background-color : red;
`;

const Form = () => (
  <Card>
    <Button>
      HELLO
    </Button>
  </Card>
);
  
//ThemeProvider 항상 theme를 찾고있음. {theme}는 theme.js의 export된 theme 
class App extends Component {
  render() {
    return (
        <ThemeProvider theme={theme}>
        <Container>
          <Form />
        </Container>
        </ThemeProvider>
    );
  }
}
export default App;