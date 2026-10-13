// contoh short-circuit AND
// boolean && action

function NotifikasiPesan({ jumlahPesan }) {
    // jika jumlahPesan lebih besar dari nol maka print paragraf
    return (
        <div>
            <h2>Kotak Masuk</h2>
            {jumlahPesan > 0 && (
            <p style={{ color: 'red' }}>Anda memiliki {jumlahPesan} pesan
            baru yang belum dibaca!</p>
            )}
        </div>
    );
}
export default NotifikasiPesan;