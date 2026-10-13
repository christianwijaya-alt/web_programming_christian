// objek event meyediakan property target yang merujuk ke elemen DOM nya
// objek.target.value untuk mengambil teks isi elemen DOM

import { useState } from 'react';

function InputSederhana() {
    const [teks, setTeks] = useState('');
    const handleInputChange = (e) => {
        // e.target merujuk ke elemen <input>
        // e.target.value mengambil isi string input
        setTeks(e.target.value);
    };
    return (
        <div>
            <input
                type="text" onChange={handleInputChange}
                placeholder="Ketik sesuatu..."
            />
            <p>Karakter yang diketik: <strong>{teks}</strong></p>
        </div>
    );
}
export default InputSederhana;