import { useState } from 'react';

function FormTerpisah() {
    const [nama, setNama] = useState('');
    const [email, setEmail] = useState('');
    const [umur, setUmur] = useState(0);
    return (
        <form>
            <input type="text" value={nama} onChange={(e) => setNama (e.target.value)} />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="number" value={umur} onChange={(e) => setUmur (Number(e.target.value))} />
        </form>
    );
}