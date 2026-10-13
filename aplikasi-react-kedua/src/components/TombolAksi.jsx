// untuk komponen berbentuk function
// event handlernya adalah fungsi internal, biasanya berbentuk arrow function
// cukup sisipkan di jsx sama seperti objek lain

function TombolAksi() {
    const handleClick = () => {
        alert("Tombol berhasil diklik!");
    };
    return (
        <button onClick={handleClick} className="btn-primary">
            Klik Saya
        </button>
    );
}
export default TombolAksi;