// konsep uncontrolled component
// react menyediakan hook useRef untuk akses elemen DOM secara langsung tanpa render ulang
// kebalikan dari controlled component, elemen DOM di update tanpa sepengetahuan useState

import { useRef } from 'react';

function AutoFocusInput() {
    const inputRef = useRef(null);
    const beriFokus = () => {
        inputRef.current.focus(); // ubah atribut focus
        inputRef.current.style.border = "2px solid blue"; // ubah atribut style border
    };
    return ( // jangan lupa sambungkan inputRef ke elemen nya
    <div>
        <input ref={inputRef} type="text" placeholder="Klik tombol
        untuk fokus..." />
        <button onClick={beriFokus}>Fokuskan Input</button>
    </div>
    );
}
export default AutoFocusInput;