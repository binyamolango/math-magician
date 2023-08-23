const Body = (props) => {
  return (
    <div class="container">
      <div class="top-layer">
        <p class="top-value">0</p>
      </div>

      <button id="side-layer1" class="side-layer rect">
        <p class="side-value">/</p>
      </button>

      <button id="side-layer2" class="side-layer rect">
        <p class="side-value">*</p>
      </button>

      <button id="side-layer3" class="side-layer rect">
        <p class="side-value">-</p>
      </button>

      <button id="side-layer4" class="side-layer rect">
        <p class="side-value">+</p>
      </button>

      <button id="side-layer5" class="side-layer rect">
        <p class="side-value">=</p>
      </button>

      <button id="main-layer1" class="main-layer rect">
        <p>AC</p>
      </button>
      
      <button id="main-layer2" class="main-layer rect">
        <p>+/-</p>
      </button>
      
      <button id="main-layer3" class="main-layer rect">
        <p>%</p>
      </button>
      
      <button id="main-layer4" class="main-layer rect">
        <p>7</p>
      </button>
      
      <button id="main-layer5" class="main-layer rect">
        <p>8</p>
      </button>
      
      <button id="main-layer6" class="main-layer rect">
        <p>9</p>
      </button>
      
      <button id="main-layer7" class="main-layer rect">
        <p>4</p>
      </button>
      
      <button id="main-layer8" class="main-layer rect">
        <p>5</p>
      </button>
      
      <button id="main-layer9" class="main-layer rect">
        <p>6</p>
      </button>
      
      <button id="main-layer10" class="main-layer rect">
        <p>1</p>
      </button>
      
      <button id="main-layer11" class="main-layer rect">
        <p>2</p>
      </button>
      
      <button id="main-layer12" class="main-layer rect">
        <p>3</p>
      </button>
      
      <button id="main-layer13" class="main-layer rect">
        <p>.</p>
      </button>
      
      <button class="large-rect">
        <p class="bottom-value">0</p>
      </button>
    </div>
  );
}

export default Body;