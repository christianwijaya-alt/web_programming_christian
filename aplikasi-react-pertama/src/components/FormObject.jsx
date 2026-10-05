import {useState} from "react";

function FormObject() {
    const [formData, setFormData] = useState({
        nama: '',
        email: '',
        umur: 0
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({...prevData,[name]: value}))
    };
    
    return (
        <form>
            <input
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                placeholder="Nama Transaksi"
            />
            <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />
        </form>
    );
}
export default FormObject;