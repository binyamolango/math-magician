const Top = () => {
  return (
    <div class="top-layer">
      <p class="top-value">{defaultProps.value}</p>
    </div>
  );
}

Top.defaultProps = {
  value: 0,
}

Top.propTypes = {
  value: PropTypes.number.isRequired,
}

const Side1 = (props) => {
  return (
    <button id="side-layer1" class="side-layer rect">
      <p class="side-value">{props.value1}</p>
    </button>
  );
}

const Side2 = (props) => {
  return (
    <button id="side-layer2" class="side-layer rect">
      <p class="side-value">{props.value2}</p>
    </button>
  );
}

const Side3 = (props) => {
  return (
    <button id="side-layer3" class="side-layer rect">
      <p class="side-value">{props.value3}</p>
    </button>
  );
}

const Side4 = (props) => {
  return (
    <button id="side-layer4" class="side-layer rect">
      <p class="side-value">{props.value4}</p>
    </button>
  );
}

const Side5 = (props) => {
  return (
    <button id="side-layer5" class="side-layer rect">
      <p class="side-value">{props.value5}</p>
    </button>
  );
}

class SideValue extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Side1 value1={"/"} />
    );
  }

  render() {
    return (
      <Side2 value2={"*"} />
    );
  }

  render() {
    return (
      <Side3 value3={"-"} />
    );
  }

  render() {
    return (
      <Side4 value4={"+"} />
    );
  }

  render() {
    return (
      <Side5 value5={"="} />
    );
  }
}

const Main1 = (props) => {
  return (
    <button id="main-layer1" class="main-layer rect">
      <p>{props.value1}</p>
    </button>
  );
}

const Main2 = (props) => {
  return (
    <button id="main-layer2" class="main-layer rect">
      <p>{props.value2}</p>
    </button>
  );
}

const Main3 = (props) => {
  return (
    <button id="main-layer3" class="main-layer rect">
      <p>{props.value3}</p>
    </button>
  );
}

const Main4 = (props) => {
  return (
    <button id="main-layer4" class="main-layer rect">
      <p>{props.value4}</p>
    </button>
  );
}

const Main5 = (props) => {
  return (
    <button id="main-layer5" class="main-layer rect">
      <p>{props.value5}</p>
    </button>
  );
}

const Main6 = (props) => {
  return (
    <button id="main-layer6" class="main-layer rect">
      <p>{props.value6}</p>
    </button>
  );
}

const Main7 = (props) => {
  return (
    <button id="main-layer7" class="main-layer rect">
      <p>{props.value7}</p>
    </button>
  );
}

const Main8 = (props) => {
  return (
    <button id="main-layer8" class="main-layer rect">
      <p>{props.value8}</p>
    </button>
  );
}

const Main9 = (props) => {
  return (
    <button id="main-layer9" class="main-layer rect">
      <p>{props.value9}</p>
    </button>
  );
}

const Main10 = (props) => {
  return (
    <button id="main-layer10" class="main-layer rect">
      <p>{props.value10}</p>
    </button>
  );
}

const Main11 = (props) => {
  return (
    <button id="main-layer11" class="main-layer rect">
      <p>{props.value11}</p>
    </button>
  );
}

const Main12 = (props) => {
  return (
    <button id="main-layer12" class="main-layer rect">
      <p>{props.value12}</p>
    </button>
  );
}

const Main13 = (props) => {
  return (
    <button id="main-layer13" class="main-layer rect">
      <p>{props.value13}</p>
    </button>
  );
}

class MainLayer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Main1 value1={"AC"} />
    );
  }

  render() {
    return (
      <Main2 value2={"+/-"} />
    );
  }

  render() {
    return (
      <Main3 value3={"%"} />
    );
  }

  render() {
    return (
      <Main4 value4={"7"} />
    );
  }

  render() {
    return (
      <Main5 value5={"8"} />
    );
  }

  render() {
    return (
      <Main6 value6={"9"} />
    );
  }

  render() {
    return (
      <Main7 value7={"4"} />
    );
  }

  render() {
    return (
      <Main8 value8={"5"} />
    );
  }

  render() {
    return (
      <Main9 value9={"6"} />
    );
  }

  render() {
    return (
      <Main10 value10={"1"} />
    );
  }

  render() {
    return (
      <Main11 value11={"2"} />
    );
  }

  render() {
    return (
      <Main12 value12={"3"} />
    );
  }

  render() {
    return (
      <Main13 value13={"."} />
    );
  }
}

const Bottom = () => {
  return (
    <button class="large-rect">
      <p class="bottom-value">{defaultProps.value}</p>
    </button>
  );
}

Bottom.defaultProps = {
  value: 0,
}

Bottom.propTypes = {
  value: PropTypes.number.isRequired,
}