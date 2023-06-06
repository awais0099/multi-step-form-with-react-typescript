import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useMultistepForm } from '../hooks/useMultiStepForm'
import { UserForm } from '../components/UserForm';
import { AddressForm } from '../components/AddressForm';
import { AccountForm } from '../components/AccountForm';
import { FormEvent, useState } from 'react';

type FormData = {
  firstname: string,
  lastname: string,
  age: string,
  street: string,
  city: string,
  state: string,
  zip: string,
  email: string,
  password: string,
  address: string
}

const INITIAL_DATA: FormData = {
  firstname: '',
  lastname: '',
  age: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  email: '',
  password: '',
  address: ''
}

export default function Home() {
  const [data, setData] = useState(INITIAL_DATA);
  
  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev, ...fields}
    })
  }

  const { currentStepIndex, steps, step, next, back } = useMultistepForm([
    <UserForm {...data} updateFields={updateFields} />,
    <AddressForm {...data} updateFields={updateFields} />,
    <AccountForm {...data} updateFields={updateFields} />
  ]);




  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (currentStepIndex !== steps.length - 1) return next();
    alert('Successful Account Creation');
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div style={{
          position: 'relative',
          background: 'white',
          border: '1px solid black',
          padding: '2rem',
          margin: '1rem',
          borderRadius: '.5rem',
          fontFamily: 'arial'
        }}>
          <form onSubmit={onSubmit}>
            <div style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
              {currentStepIndex + 1} / {steps.length}
            </div>
            {step}
            <div style={{ marginTop: '1rem', display: 'flex', gap: '.5rem', justifyContent: 'flex-end' }}>
              {currentStepIndex !== 0 && <button type='button' onClick={back}>back</button>}
              <button type='submit'>next</button>
            </div>
          </form>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
