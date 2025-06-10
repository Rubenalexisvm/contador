import React, { useState } from 'react';
import './App.css';
import './index.css';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div id="centrar">
      <p className="contador-borde">Contador: {count}</p>
      <div className="botones">
        <div class="btn-group">
          <button type="button" class="btn btn-danger" onClick={() => setCount(count - 1)}>Disminuir</button>
          <button type="button" class="btn btn-danger" onClick={() => setCount(count - 10)}>disminución x 10</button>
        </div>
        <button type="button" class="btn btn-warning" onClick={() => setCount(0)}>Reiniciar</button>
        <div class="btn-group">
          <button type="button" class="btn btn-success" onClick={() => setCount(count + 1)}>Aumentar</button>
          <button type="button" class="btn btn-success" onClick={() => setCount(count + 10)}>aumento x 10</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;