import "./App.css";
import styled from "styled-components";

function App() {
  const Button = styled.button`
    background: ${(props) => (props.primary ? "palevioletred" : "white")};
    color: ${(props) => (props.primary ? "white" : "palevioletred")};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    display: block;
  `;

  const TomatoButton = styled(Button)`
    color: tomato;
    border-color: tomato;
  `;

  const ReversedButton = (props) => (
    <Button {...props} children={props.children.split("").reverse()} />
  );

  const Link = ({ className, children }) => (
    <a className={className}>{children}</a>
  );

  const StyledLink = styled(Link)`
    color: palevioletred;
    font-weight: bold;
  `;

  const Container = styled.div`
    text-align: center;
  `;

  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  const Wrapper = styled.section`
    padding: 4em;
    background: papayawhip;
  `;

  return (
    <div className="App">
      <Wrapper>
        <Title>Hi World!</Title>
      </Wrapper>
      <Container>
        <Button>Normal Button</Button>
        <Button as={ReversedButton}>
          Custom Button with Normal Button styles
        </Button>
        <Button as="a" href="/">
          Link with Button styles
        </Button>
        <TomatoButton as="a" href="/">
          Link with Tomato Button styles
        </TomatoButton>
        <Button primary>Primary Button</Button>
      </Container>
      <div>
        <Link>Unstyled, boring Link</Link>
        <br />
        <StyledLink>Styled, exciting Link</StyledLink>
      </div>
    </div>
  );
}

export default App;
