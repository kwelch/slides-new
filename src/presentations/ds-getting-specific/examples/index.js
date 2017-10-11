// this file in a collection of all the others in this directory, but CRA doesn't let me import with raw-loader

export default {
  OGCss: `/* classic css */
  
  form legend {
    border:1px solid #999;
    position:relative;
    background-color:#ffffff;
    padding:3px; margin-left:5px;
    -moz-box-shadow: 3px 2px 5px #666;
    -webkit-box-shadow: 3px 2px 5px #666;
    box-shadow: 3px 2px 5px #666;
  }
  form label input, form label textarea {
    margin:0 5px; width:95%;
  }
  form [type=submit] {
    float:right; margin-right:15px;
  }`,
  BEM: `/* Block, Element, Modifier (BEM) CSS */
  
  .contact-form__legend {
    border:1px solid #999;
    position:relative;
    background-color:#ffffff;
    padding:3px; margin-left:5px;
    -moz-box-shadow: 3px 2px 5px #666;
    -webkit-box-shadow: 3px 2px 5px #666;
    box-shadow: 3px 2px 5px #666;
  }
  .contact-form__input {
    margin:0 5px; width:95%;
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
      padding:3px; margin-left:5px;
      @include box-shadow(3px 2px 5px #666);
    }
  
    &-input {
      margin:0 5px; width:95%;
      
      &-error {
        border: 1px solid red;
      }
    }
  
    &-submit-button {
      float:right; margin-right:15px;
    }
  }`,
  cssModules: {
    style: `body:global {
      /* selector: body */
      background-color: #305a79;
      font-family: Arial, sans-serif;
    }
    
    .container {
      /* selector: style---container---1_mx9 */
      width: 300px;
      margin: auto;
    }
    
    .fieldset {
      /* selector: style---fieldset---2pcf1 */
      background-color: white;
      border: 1px solid #004070;
    }
    `,
    style2: `.title {
      /* style---title---RVy7q */
      color: white; padding: 0.3rem 1rem;
      background-color: #305a79;
      border: 1px solid #334070;
      box-shadow: .2rem .2rem .5rem rgba(0,0,0,0.3);
    }
    .submitButton{
      /* style---submitButton---1u5h0 */
      float:right; font-size: 1.1rem;
      background-color: #305a79;
      border: 1px solid #334070;
      box-shadow: .2rem .2rem .5rem rgba(0,0,0,0.3);
      color: white; margin: .25rem 0.5rem;
      padding: .2rem 1rem; box-sizing: border-box;
    }`,
  },
  react: `const ContactForm = ({name, phone, email, comments}) => {
    return (<form method="post">
        <fieldset>
          <legend>Contact Us</legend>
          Name: <input
            required
            placeholder="John Doe"
            value={name}
          />
          Phone: <input
            placeholder="555-555-5555"
            value={phone}
          />
          Email: <input
            placeholder="example@email.com"
            value={email}
          />
          Comments: <textarea
            required
          >{comments}</textarea>
          <button>
            Submit
          </button>
        </fieldset>
      </form>);
};

const state = {
  name: null,
  email: null,
  phone: null,
  comments: null,
  errors: {
    name:'',
    comments:''
  }
};

render(<ContactForm {...state} />, mountNode);`,
  glamorous: `const TextInput = ({ label, isRequired,
    multiline = false, error, className, ...props }) => {
    const inputProps = {label, ...props};
    return (<label className={className}>
      <Span width="150px">
        {label}:
        {isRequired && <Span fontSize='.8rem' color='red'>*</Span>}
      </Span>
      {!multiline
          ? <InputStyled {...inputProps} />
          : <TextAreaStyled {...inputProps} />
      }
    </label>);
  };
  
  const TextInputStyled = glamorous(TextInput)({
    display: 'flex',
    padding: '.5rem',
  }, ({error, multiline}) => ({
    '& textarea': {
      border: error && '2px solid red'
    },
    '& input': {
      borderBottom: error && '2px solid red'
    },
    flexDirection: (multiline ? 'column': 'row')
  }));`,
  aphrodite: `const styles = StyleSheet.create({
    container: {
      fontFamily: "'Press Start 2P', cursive",
      padding: "2rem",
      color: "white",
      border: "2px solid white",
      boxShadow: "5px 5px 0px  black",
      fontSize: "1.2rem",
      ":hover": {
        backgroundColor: "#334f99",
      },
    },
    big: {
      fontSize: "1.75rem",
    },
  });
  
  render() {
    return (
      <div
        className={css([styles.container, big && styles.big, this.props.styles])}
      >
        Hello Scenic City Summit
      </div>
    );
  }
  `,
  container: `render() {
    return (<Form>
      <Title>Contact Us</Title>
      {/* TODO: Show error summary section */}
      <Input label="Name" isRequired placeholder="John Doe"
        value={this.state.name} error={errors.name}
      />
      <Input label="Phone" placeholder="555-555-5555"
        value={this.state.phone} error={errors.phone}
      />
      <Input label="Email" placeholder="example@email.com"
        value={this.state.email} error={errors.email}
      />
      <Input label="Comments" isRequired multiline
        value={this.state.comments} error={errors.comments}
      />
      <Button label="Submit" onClick={this.submit} />
    </Form>);
  }`,
  styleComponents: `
  const TextInput = ({ label, isRequired,
    multiline = false, error, className, ...props }) => {
    const inputProps = {label, ...props};
    return (<label className={className}>
      <Label>
        {label}:
        {isRequired && <Required>*</Required>}
      </Label>
      {!multiline
          ? <InputStyled {...inputProps} />
          : <TextAreaStyled {...inputProps} />
      }
    </label>);
  };

  const Input = styled(TextInput)\`
    display:flex;
    padding: .5rem;

    \${({error}) => (error && css\`& \${TextAreaStyled} {
      border: 2px solid red;
    }
    & \${InputStyled} {
      border-bottom: 2px solid red;
    })}

    \${({multiline}) => (multiline && 'flex-direction:column;')}
  \`;`,
};
