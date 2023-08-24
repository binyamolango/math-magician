const Calculator = () => (
  <div className="container grid">

    <div className="row1">
      <div className="top-layer">0</div>
    </div>

    <div className="row2 rowSame">
      <button type="button" id="main-layer1" className="main-layer rect">AC</button>
      <button type="button" id="main-layer2" className="main-layer rect">+/-</button>
      <button type="button" id="main-layer3" className="main-layer rect">%</button>
      <button type="button" id="side-layer1" className="side-layer rect">/</button>
    </div>

    <div className="row3 rowSame">
      <button type="button" id="main-layer4" className="main-layer rect">7</button>
      <button type="button" id="main-layer5" className="main-layer rect">8</button>
      <button type="button" id="main-layer6" className="main-layer rect">9</button>
      <button type="button" id="side-layer2" className="side-layer rect">*</button>
    </div>

    <div className="row4 rowSame">
      <button type="button" id="main-layer7" className="main-layer rect">4</button>
      <button type="button" id="main-layer8" className="main-layer rect">5</button>
      <button type="button" id="main-layer9" className="main-layer rect">6</button>
      <button type="button" id="side-layer3" className="side-layer rect">-</button>
    </div>

    <div className="row5 rowSame">
      <button type="button" id="main-layer10" className="main-layer rect">1</button>
      <button type="button" id="main-layer11" className="main-layer rect">2</button>
      <button type="button" id="main-layer12" className="main-layer rect">3</button>
      <button type="button" id="side-layer4" className="side-layer rect">+</button>
    </div>

    <div className="row6 rowSame">
      <button type="button" className="large-rect">0</button>
      <button type="button" id="main-layer13" className="main-layer small-rect">.</button>
      <button type="button" id="side-layer5" className="side-layer small-rect">=</button>
    </div>

  </div>
);

export default Calculator;
