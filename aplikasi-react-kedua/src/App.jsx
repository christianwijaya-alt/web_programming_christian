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

function App() {
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
    </>
  )
}

export default App
