import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'
import React, { Component } from 'react'
import CardClass from './components/CardClass'
import FooterFunction from './components/FooterFunction'
import KartuProfil from './components/KartuProfil'
import KartuProfilClass from './components/KartuProfilClass'
import Counter from './components/Counter'
import FormObject from './components/FormObject'

class HeaderClass extends React.Component {
  render() {
    return (
        <header>
            <h1>Selamat Datang di React (Class)</h1>
        </header>
    );
    }
}

function Salam() {
  return (
    <h2>Hello dari Function Component!</h2>
  );
}

function ButtonSimpan(){
  return (
    <button>Simpan Data</button>
  );
}

const ButtonEdit = () => {
  return ( <button>Edit Data</button> );
}

const ButtonHapus = () => {
  <button className="btn-danger">Hapus Data</button>
}


function TombolAksi({ label, onClickHandler }) {
  return (
    <button onClick={onClickHandler} className="btn">
    {label}
    </button>
  );
}

function TampilanStatus({ status, angka }) {
  return <p>Status: {status} | Total: {angka}</p>;
}

function PengelolaAplikasi() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => setCount(count + 1); const handleReset = () => setCount(0);
  return (
    <div>
      <TampilanStatus status={count > 0 ? "Aktif": "Idle"} angka={count} />
      <TombolAksi label="Tambah Angka" onClickHandler={handleIncrement} />
      <TombolAksi label="Reset" onClickHandler={handleReset} />
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <div>
        <main />
        <Header />
        <Footer />
        <HeaderClass />
        <CardClass />
        <Salam />
        <p>Ini dibuat dalam 1 file menggunakan Function Component.</p>
        <FooterFunction />
        <ButtonSimpan />
        <ButtonEdit />
        <ButtonHapus />
        <KartuProfil nama="Budi Warsito" pekerjaan="Frontend Developer" />
        <KartuProfilClass nama="Siti Rahma" pekerjaan="UI/UX Designer" />
        <Counter />
        <PengelolaAplikasi />
        <FormObject />
      </div>
    );
  }
}
export default App;

function Profil(){
  const nama = "Budi Warsito";
  const umur = 20;

  return(
    <>
      <p>Nama: {nama}</p>
      <p>Tahun Depan Umur: {umur + 1} tahun</p>
    </>
  );
}

function formatNama(user) {
  return user.namaDepan + ' ' + user.namaBelakang;
}

const user = {
  namaDepan: 'Ahmad',
  namaBelakang: 'Dahlan'
};

const elemen = (
  <h2>Selamat Datang, {formatNama(user)}!</h2>
);

const isLogin = true;

function login(isLogin) {
  return(
    isLogin ? <p>Selamat Datang Kembali!</p> : <p>Silahkan Login Terlebih dahulu</p>
  );
}