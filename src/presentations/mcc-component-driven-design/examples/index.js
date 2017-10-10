// this file in a collection of all the others in this directory, but CRA doesn't let me import with raw-loader

export default {
  OGCss: `/* classic css */
  
  form legend {
    border:1px solid #999;
    position:relative;
    background-color:#ffffff;
    padding:3px;
    margin-left:5px;
    -moz-box-shadow: 3px 2px 5px #666;
    -webkit-box-shadow: 3px 2px 5px #666;
    box-shadow: 3px 2px 5px #666;
  }
  form label input, form label textarea {
    margin:0 5px;
    width:95%;
  }
  form [type=submit] {
    float:right; margin-right:15px;
  }`,
  BEM: `/* Block, Element, Modifier (BEM) CSS */
  
  .contact-form__legend {
    border:1px solid #999;
    position:relative;
    background-color:#ffffff;
    padding:3px;
    margin-left:5px;
    -moz-box-shadow: 3px 2px 5px #666;
    -webkit-box-shadow: 3px 2px 5px #666;
    box-shadow: 3px 2px 5px #666;
  }
  .contact-form__input {
    margin:0 5px;
    width:95%;
  }
  
  .contact-form__input--error {
    border: 1px solid red;
  }
  
  .contact-form__submit-button {
    float:right; margin-right:15px;
  }`,
  Sass: `/* Syntactically Awesome StyleSheets (SASS) */
  
  .contact-form {
    &-legend {
      border:1px solid #999;
      position:relative;
      background-color:#ffffff;
      padding:3px;
      margin-left:5px;
      @include box-shadow(3px 2px 5px #666);
    }
  
    &-input {
      margin:0 5px;
      width:95%;
      &-error {
        border: 1px solid red;
      }
    }
  
    &-submit-button {
      float:right; margin-right:15px;
    }
  }`,
  cssModules: {
    style: `.container { /* .style---container---[hash] */
      padding: 2rem;
      color: white;
      border: 2px solid white;
      box-shadow: 5px 5px 0 black;
      background-color: #f2621c;
      font-size: 1.2rem;
    }
    
    .big { /* .style---big---[hash] */
      font-size: 1.75rem;
    }`,
    app: `const styles = require('./style.css');
    
    module.exports = function Container(text, big) {
      const element = document.createElement('div');
      element.appendChild(document.createTextNode(text));
      element.className = styles.container;
      if (big) {
        element.className += \`\${styles.big}\`;
      }
      return element;
    }`,
  },
  react: `function App(props) {
    return (
      <div>
        <h1 style={{
          color: '#f2621c',
          textShadow: '2px 2px 0 black',
          paddingBottom: 20,
          borderBottom: '1px solid #f2621c',
        }}>{props.title}</h1>
        <h3>This is React!</h3>
        <p>These slides are written in React.</p>
        <i>Check out Spectacle!</i>
      </div>
    );
  }
  
  render(<App title="Hello MCC!" />, mountNode);`,
  glamorous: `const Container = glamorous.div(
    {
      fontFamily: "'Press Start 2P', cursive",
      padding: '2rem',
      color: 'white',
      border: '2px solid white',
      boxShadow: '5px 5px 0px  black',
      ':hover': {
        backgroundColor: '#334f99',
      }
    },
    ({ backgroundColor, big, width }) => ({
      fontSize: big ? '1.75rem' : '1.2rem',
      backgroundColor: backgroundColor || '#f2621c',
      width
    })
  );`,
  container: `function App() {
    return (<div>
    <Container>
      Hello Music City Code!
    </Container>
  </div>);
  }
  
  render(<App />, mountNode);`,
  styleComponents: `const Container = styled.div\`
  font-family: 'Press Start 2P', cursive;
  padding: 2rem;
  color: white;
  border: 2px solid white;
  box-shadow: 5px 5px 0 black;
  font-size: \${props => (props.big ? '1.75rem' : '1.2rem')};
  background-color: \${props => props.backgroundColor || '#f2621c'};
  width: \${props => props.width};
  &:hover {
    background-color: #334f99;
  }
\`;`,
};
