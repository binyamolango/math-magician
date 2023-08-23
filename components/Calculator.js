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
    <div id="side-layer1" class="side-layer">
      <p class="side-value">{props.value1}</p>
    </div>
  );
}

const Side2 = (props) => {
  return (
    <div id="side-layer2" class="side-layer">
      <p class="side-value">{props.value2}</p>
    </div>
  );
}

const Side3 = (props) => {
  return (
    <div id="side-layer3" class="side-layer">
      <p class="side-value">{props.value3}</p>
    </div>
  );
}

const Side4 = (props) => {
  return (
    <div id="side-layer4" class="side-layer">
      <p class="side-value">{props.value4}</p>
    </div>
  );
}

const Side5 = (props) => {
  return (
    <div id="side-layer5" class="side-layer">
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