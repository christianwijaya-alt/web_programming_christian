import {useState} from 'react';

function Counter() {
  const [jumlah, setJumlah] = useState(0);

  const tambah = () => {
    setJumlah(jumlah + 1);
  }

  const kurang = () => {
    setJumlah(jumlah - 1);
  }

  return (
    <div className="counter">
        <h2>Counter: {jumlah}</h2>
        <button onClick={tambah}>Tambah</button>
        <button onClick={kurang}>Kurang</button>
    </div>
  );
}
export default Counter;