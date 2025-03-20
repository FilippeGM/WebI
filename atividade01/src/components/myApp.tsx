import React, { useState } from 'react';
import Ball from './ball';

const Ex1: React.FC = () => {
  const [balls, setBalls] = useState<number>(0);
  const [n, setN] = useState<number[]>([]);

  const handleGenerateNumbers = () => {
    const i = Math.min(balls, 12);
    const generatedN = Array.from({ length: i }, () => Math.floor(Math.random() * 100));
    setN(generatedN.sort((a, b) => a - b));
  };

  return (
    <div>
      <h2>Exercise 1: Gerar Números Aleatórios</h2>
      <label>Quantidade:</label>
      <input type="number" value={balls} onChange={(e) => setBalls(Number(e.target.value))} max={12} min={1}/>
      <button onClick={handleGenerateNumbers}>Gerar</button><br></br>
      <div>{n.map((num, index) => (
          <Ball key={index} number={num} onRightClick={() => {}} />
        ))}
      </div>
    </div>
  );
};

export default Ex1;