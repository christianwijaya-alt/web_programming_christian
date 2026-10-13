// contoh penggunaan ternary operator ? : pada jsx

import { useState } from 'react';

function StatusLogin() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div>
            {isLoggedIn ? (
                <h2>Selamat Datang Kembali, Pengguna!</h2>
                ) : (
                <h2>Silakan Login Terlebih Dahulu.</h2>
            )}
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? 'Logout' : 'Login'}
            </button>
        </div>
    );
}
export default StatusLogin;