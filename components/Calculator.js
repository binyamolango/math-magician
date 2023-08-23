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
    <div id="side-layer1" class="side-layer rect">
      <p class="side-value">{props.value1}</p>
    </div>
  );
}

const Side2 = (props) => {
  return (
    <div id="side-layer2" class="side-layer rect">
      <p class="side-value">{props.value2}</p>
    </div>
  );
}

const Side3 = (props) => {
  return (
    <div id="side-layer3" class="side-layer rect">
      <p class="side-value">{props.value3}</p>
    </div>
  );
}

const Side4 = (props) => {
  return (
    <div id="side-layer4" class="side-layer rect">
      <p class="side-value">{props.value4}</p>
    </div>
  );
}

const Side5 = (props) => {
  return (
    <div id="side-layer5" class="side-layer rect">
      <p class="side-value">{props.value5}</p>
    </div>
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
    <div id="main-layer1" class="main-layer rect">
      <p>{props.value1}</p>
    </div>
  );
}

const Main2 = (props) => {
  return (
    <div id="main-layer2" class="main-layer rect">
      <p>{props.value2}</p>
    </div>
  );
}

const Main3 = (props) => {
  return (
    <div id="main-layer3" class="main-layer rect">
      <p>{props.value3}</p>
    </div>
  );
}

const Main4 = (props) => {
  return (
    <div id="main-layer4" class="main-layer rect">
      <p>{props.value4}</p>
    </div>
  );
}

const Main5 = (props) => {
  return (
    <div id="main-layer5" class="main-layer rect">
      <p>{props.value5}</p>
    </div>
  );
}

const Main6 = (props) => {
  return (
    <div id="main-layer6" class="main-layer rect">
      <p>{props.value6}</p>
    </div>
  );
}

const Main7 = (props) => {
  return (
    <div id="main-layer7" class="main-layer rect">
      <p>{props.value7}</p>
    </div>
  );
}

const Main8 = (props) => {
  return (
    <div id="main-layer8" class="main-layer rect">
      <p>{props.value8}</p>
    </div>
  );
}

const Main9 = (props) => {
  return (
    <div id="main-layer9" class="main-layer rect">
      <p>{props.value9}</p>
    </div>
  );
}

const Main10 = (props) => {
  return (
    <div id="main-layer10" class="main-layer rect">
      <p>{props.value10}</p>
    </div>
  );
}

const Main11 = (props) => {
  return (
    <div id="main-layer11" class="main-layer rect">
      <p>{props.value11}</p>
    </div>
  );
}

const Main12 = (props) => {
  return (
    <div id="main-layer12" class="main-layer rect">
      <p>{props.value12}</p>
    </div>
  );
}

const Main13 = (props) => {
  return (
    <div id="main-layer13" class="main-layer rect">
      <p>{props.value13}</p>
    </div>
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
    <div class="large-rect">
      <p class="bottom-value">{defaultProps.value}</p>
    </div>
  );
}

Bottom.defaultProps = {
  value: 0,
}

Bottom.propTypes = {
  value: PropTypes.number.isRequired,
}