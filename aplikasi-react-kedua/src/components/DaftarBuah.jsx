// untuk merender array menjadi elemen lewat jsx, React mengandalkan method map() dari javascript
// React menggunakan atribut key yang disisipkan di elemen terluar masing masing item array
// atribut key ini membantu internal React untuk mengidentifikasi item supaya lebih efisien saat rerender

function DaftarBuah() {
// Data array internal
    const buahBuahan = ['Apel', 'Jeruk', 'Mangga', 'Pisang'];
    return (
        <ul>
            {buahBuahan.map((buah, index) => (
                <li key={index}>{buah}</li>
            ))}
        </ul>
    );
}
export default DaftarBuah;