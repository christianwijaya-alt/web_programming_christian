// konsep controlled component:
// React state menjadi single source of truth
// perubahan field input pada elemen langsung direkam oleh react state menggunakan onChange
// dari onChange, update state elemen menggunakan hook

import { useState } from 'react';

function ControlledForm() {
// 1. Set Default Input Value melalui initial value useState
    const [keterangan, setKeterangan] = useState('Beli Bensin');
    const [kategori, setKategori] = useState('Pengeluaran');
    return (
        <div className="form-group">
            <label>Keterangan Transaksi:</label>
            <input
                type="text"
                value={keterangan}
                onChange={(e) => setKeterangan(e.target.value)}
            />
            <label>Kategori:</label>
            <select value={kategori} onChange={(e) =>
            setKategori(e.target.value)}>
                <option value="Pemasukan">Pemasukan</option>
                <option value="Pengeluaran">Pengeluaran</option>
            </select>
        </div>
    );
}
export default ControlledForm;