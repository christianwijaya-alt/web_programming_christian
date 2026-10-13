// untuk pass nilai ke fungsi handler, cara praktisnya adalah menggunakan pembungkus generik
// fungsi hapusProduk adalah fungsi handler sesungguhnya, menerima parameter-parameter yang kita inginkan
// pada jsx, onClick diberi arrow function generik, yang kemudian diisi dengan panggilan ke hapusProduk
// panggilan hapusProduk inilah dimana nilai parameter disisipkan

function DaftarProduk() {
    const hapusProduk = (id, nama) => {
        console.log(`Menghapus produk ID: ${id} - ${nama}`);
    };
    return (
        <ul>
            <li>
                Laptop Asus
                <button onClick={() => hapusProduk(101, "Laptop Asus")}>Hapus</button>
            </li>
        </ul>
    );
}
export default DaftarProduk;