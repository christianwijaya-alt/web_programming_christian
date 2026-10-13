// konsep dynamic handler
// dalam controlled component dibawah, hanya ada satu fungsi handler
// tetapi dengan menggunakan objek SyntheticEvent, dapat handle update elemen untuk kedua field input
// objek prevForm adalah kondisi form sebelumnya, sebelum update terbaru
// objek prevForm disediakan oleh react

import { useState } from 'react';

function FormTransaksiLengkap() {
    const [form, setForm] = useState({
        judul: '',
        jumlah: 0,
        tipe: 'Pengeluaran'
    });

    // Dynamic Handler untuk semua elemen input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prevForm) => ({
            ...prevForm, // gunakan prevForm untuk isi semua field dengan nilai lawas
            [name]: value // perbarui properti yang berubah dengan data dari objek event
            // jika yang yang dirubah input judul, maka name="judul", maka [name] menjadi judul, maka judul: value
            // jika yang yang dirubah input judul, maka name="jumlah", maka [name] menjadi jumlah, maka judul: value
        }));
    };

    return (
        <form>
            <input
                name="judul"
                type="text"
                value={form.judul}
                onChange={handleChange}
                placeholder="Judul"
            />
            <input
                name="jumlah"
                type="number"
                value={form.jumlah}
                onChange={handleChange}
                placeholder="Jumlah"
            />
            <select name="tipe" value={form.tipe} onChange={handleChange}>
                <option value="Pemasukan">Pemasukan</option>
                <option value="Pengeluaran">Pengeluaran</option>
            </select>
        </form>
    );
}
export default FormTransaksiLengkap;