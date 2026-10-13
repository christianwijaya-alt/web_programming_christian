// defaultnya, submit form akan reload halaman
// cegah reload halaman dengan method preventDefault() dalam objek SyntheticEvent

import { useState } from 'react';

function FormPencarian() {
    const [keyword, setKeyword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!keyword.trim()) {
            alert("Kata kunci tidak boleh kosong!");
            return;
        }
        console.log("Mengirim pencarian untuk:", keyword);
    };
    return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            placeholder="Cari transaksi..."
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
        />
        <button type="submit">Cari</button>
    </form>
    );
}
export default FormPencarian;