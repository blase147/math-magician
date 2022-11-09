class Calculator extends React.Component {
  constructor() {
    super(props);
  }

  render() {
    return (
      <div className="grid-container">
        <div className="grid">{props.result}</div>
        <div className="grid">AC</div>
        <div className="grid">+/-</div>
        <div className="grid">%</div>
        <div className="grid">+</div>
        <div className="grid">7</div>
        <div className="grid">8</div>
        <div className="gird">9</div>
        <div className="grid">X</div>
        <div className="grid">4</div>
        <div className="grid">5</div>
        <div className="grid">6</div>
        <div className="grid">-</div>
        <div className="grid">1</div>
        <div className="grid">2</div>
        <div className="grid">+</div>
        <div className="grid">0</div>
        <div className="grid">.</div>
        <div className="grid">=</div>
      </div>
    );
  }
}

Calculator.defaultProps = {
  result: 0,
};

export default { Calculator };
