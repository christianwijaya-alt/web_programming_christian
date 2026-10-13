import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

import TombolAksi from './components/TombolAksi'
import TombolClass from './components/TombolClass'
import TombolDetail from './components/TombolDetail'
import FormPencarian from './components/FormPencarian'
import InputSederhana from './components/InputSederhana'
import ControlledForm from './components/ControlledForm'
import FormTransaksiLengkap from './components/FormTransaksiLengkap'
import AutoFocusInput from './components/AutoFocusInput'
import DafterBuah from './components/DaftarBuah'
import { daftarPekerjaan } from './daftarPekerjaan'
import TodoList from './components/TodoList'
import FormLogin from './components/FormLogin'

function App() {
  // props untuk UserList
  const dataPengguna = [
    { id: 'u1', name: 'Budi', email: 'budi@mail.com' },
    { id: 'u2', name: 'Siti', email: 'siti@mail.com' }
  ];

  return (
    <>
      <TombolAksi />
      <TombolClass />
      <TombolDetail />
      <FormPencarian />
      <InputSederhana />
      <ControlledForm />
      <FormTransaksiLengkap />
      <AutoFocusInput />
      <DafterBuah />
      <PekerjaanList />
      <UserList users={dataPengguna} />
      <TodoList />
      <FormLogin />
    </>
  )
}
export default App

function PekerjaanList() {
  return (
  <ul>
    {daftarPekerjaan.map((job) => (
      <li key={job.id}>{job.nama}</li>
    ))}
    </ul>
  );
}

// render data dari props
function UserList({ users }) {
  return (
    <div className="user-list">
      {users.map(user => (
        <div key={user.id} className="card">
          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}