import { useState, useEffect } from 'react'
import { Haptics } from '@capacitor/haptics'

import github from './assets/github-white.svg'

function App() {
  const [count, setCount] = useState(15)
  // let hapticsVibrate = async d => {
  //   await Haptics.vibrate(d)
  // }

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
        <a
          href='https://github.com/gI7DUmmY/foosball-chrono'
          rel='noreferrer'
          target='_blank'
        >
          <img
            src={github}
            alt='logo github'
            className='w-auto h-8 fixed top-2 right-2'
          />
        </a>
        <h1 className='text-5xl text-center font-semibold text-slate-200 p-2 mt-8'>
          Foosball Chrono
        </h1>
        <div className='font-extrabold text-[150px] subpixel-antialiased text-yellow-500 md:text-[180px]'>
          {count}
        </div>
        <div
          className='w-11/12 h-2/5 bg-slate-700 font-semibold cursor-pointer rounded-xl px-4 py-5 text-slate-200 fixed bottom-4 flex items-center md:h-3/5'
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
