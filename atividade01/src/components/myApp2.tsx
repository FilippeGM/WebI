import { useState } from 'react';
import Ball from './ball';

function Ex2() {
  const [n, setN] = useState('');
  const [n2, setN2] = useState<number[]>([]);
  const addNumber = () => {
    const num = Number(n);
    if (Number.isFinite(num)) {
      const newNumbers = n2.length >= 12 ? n2.slice(1) : n2;
      setN2([...newNumbers, num]);
      setN('');
    }
  };
 
  const removeNumber = (num: number) => {
    setN2(n2.filter((n) => n !== num));
  };
 
  return (
    <div>
      <h2>Exercício 2</h2>
      <input type="number" value={n} onChange={(e) => setN(e.target.value)} />
      <button onClick={addNumber}>Adicionar Número</button>
      <div>{n2.map((num, index) => <Ball key={index} number={num} onRightClick={removeNumber} />)}</div>
    </div>
  );
}
 
export default Ex2;