import { useState, useEffect } from 'react'
import { Haptics } from '@capacitor/haptics'

import { ImQrcode, ImCancelCircle } from 'react-icons/im'
import github from './assets/github-white.svg'
import qrcode from './assets/qrcode.png'

function App() {
  const [count, setCount] = useState(15)
  const [showQrcode, setShowQrcode] = useState(false)

  let timer = null
  // let canVibrate = window.navigator.vibrate

  const start = () => {
    if (count > 0) {
      clearTimeout(timer)
      // navigator.vibrate(0)
      setCount(0)
    }
  }

  useEffect(() => {
    if (count === 10) {
      // navigator.vibrate([500, 20, 500])
      Haptics.vibrate()
    }
    if (count === 15) {
      // navigator.vibrate([500, 50, 500, 50, 500, 50, 500])
      Haptics.vibrate()
    }
    if (count < 15) {
      timer = setTimeout(() => {
        setCount(count + 1)
      }, 1000)
    }
  }, [count])

  return (
    <div className='App'>
      <div className='container min-w-full min-h-screen bg-slate-800 flex flex-col items-center gap-4 select-none'>
        {/* bouton pour afficher le QR Code de la page */}
        <button
          className='text-slate-200 fixed top-3 left-3 cursor-pointer'
          onClick={() => setShowQrcode(prev => !prev)}
        >
          {showQrcode && <ImCancelCircle className='w-auto h-8' />}
          {!showQrcode && <ImQrcode className='w-auto h-8' />}
        </button>

        {/* lien vers le repo */}
        <a
          href='https://github.com/gI7DUmmY/foosball-chrono'
          rel='noreferrer'
          target='_blank'
        >
          <img
            src={github}
            alt='logo github'
            className='w-auto h-8 fixed top-3 right-3'
          />
        </a>

        {/* titre de l'appli */}
        <h1 className='text-5xl text-center font-semibold text-slate-200 p-2 mt-8'>
          Foosball Chrono
        </h1>

        {showQrcode && (
          <img
            src={qrcode}
            alt='qrcode'
            className='w-5/6 mx-auto md:max-w-md'
          />
        )}

        {/* compteur */}
        <div
          className={
            showQrcode
              ? 'invisible'
              : 'font-extrabold text-[150px] subpixel-antialiased text-yellow-500 md:text-[180px]'
          }
        >
          <span className={count === 10 || count === 15 ? 'text-red-700' : ''}>
            {count}
          </span>
        </div>

        {/* bouton reset compteur */}
        <div
          className={
            showQrcode
              ? 'invisible'
              : 'w-11/12 h-2/5 bg-slate-700 font-semibold cursor-pointer rounded-xl px-4 py-5 text-slate-200 fixed bottom-4 flex items-center md:h-3/5'
          }
          onClick={() => start()}
        >
          <p className='w-full text-center text-7xl'>
            {-1 < count && count < 15 ? 'RESET' : 'START'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
