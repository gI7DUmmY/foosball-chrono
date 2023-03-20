import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(15)
  let timer = null

  const start = () => {
    if (count > 0) {
      clearTimeout(timer)
      navigator.vibrate(0)
      setCount(0)
    }
  }
  useEffect(() => {
    if (count === 10) navigator.vibrate([500, 20, 500])
    if (count === 15) navigator.vibrate([500, 50, 500, 50, 500, 50, 500])
    if (count < 15) {
      timer = setTimeout(() => {
        setCount(count + 1)
      }, 1000)
    }
  }, [count])

  return (
    <div className='App'>
      <div className='container min-w-full min-h-screen bg-slate-800 flex flex-col items-center gap-8 select-none'>
        <h1 className='text-5xl text-center font-semibold text-slate-200 p-2'>
          Foosball Chrono
        </h1>
        <div className='font-extrabold text-[200px] subpixel-antialiased text-yellow-500'>
          {count}
        </div>
        <div
          className='w-11/12 h-64 bg-slate-700 font-semibold cursor-pointer rounded-xl px-4 py-5 text-slate-200 fixed bottom-4 flex items-center md:h-4/6'
          onClick={() => start()}
        >
          <p className='w-full text-center text-7xl'>
            {count > 0 && count < 15 ? 'RESET' : 'START'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
