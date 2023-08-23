import '../App.css';

const Calculator = () => {
  return (
    <div className="container grid">

      <div className="row1">
        <div className="top-layer">0</div>
      </div>

      <div className="row2 rowSame">
        <button id="main-layer1" className="main-layer rect" label="AC" />
        <button id="main-layer2" className="main-layer rect" label="+/-" />
        <button id="main-layer3" className="main-layer rect" label="%" />
        <button id="side-layer1" className="side-layer rect" label="/" />
      </div>

      <div className="row3 rowSame"> 
        <button id="main-layer4" className="main-layer rect" label="7" />
        <button id="main-layer5" className="main-layer rect" label="8" />
        <button id="main-layer6" className="main-layer rect" label="9" />
        <button id="side-layer2" className="side-layer rect" label="*" />
      </div>

      <div className="row4 rowSame">
        <button id="main-layer7" className="main-layer rect" label="4" />
        <button id="main-layer8" className="main-layer rect" label="5" />
        <button id="main-layer9" className="main-layer rect" label="6" />
        <button id="side-layer3" className="side-layer rect" label="-" />
      </div>

      <div className="row5 rowSame">
        <button id="main-layer10" className="main-layer rect" label="1" />
        <button id="main-layer11" className="main-layer rect" label="2" />
        <button id="main-layer12" className="main-layer rect" label="3" />
        <button id="side-layer4" className="side-layer rect" label="+" />
      </div>

      <div className="row6 rowSame">
        <button className="large-rect" label="0" />
        <button id="main-layer13" className="main-layer rect" label="." />
        <button id="side-layer5" className="side-layer rect" label="=" />
      </div>

    </div>
  );
}

export default Calculator;