// React router menyediakan sebuah hook untuk navigasi, useNavigate
// update isi useNavigate dengan "route" yang ingin dituju
// maka React router akan navigasi ke halaman tsb

import { useNavigate } from "react-router-dom";

function FormLogin() {
    // Inisialisasi fungsi navigasi
    const navigate = useNavigate();
    const handleLogin = (e) => {
        // Logika verifikasi/login autentikasi...
        const isSuccess = true;
        if (isSuccess) {
            alert("Login Berhasil!");
            // 1. Pindah ke halaman lain secara programatik
            navigate('/about');
        }
    };
    return (
        <div>
            <h2>Halaman Login</h2>
            <button onClick={handleLogin}>Masuk Aplikasi</button>
            <button onClick={() => navigate(-1)}>Kembali</button>
        </div>
    );
}
export default FormLogin;