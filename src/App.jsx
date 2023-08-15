
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { Toaster } from 'react-hot-toast'
import { router } from './Routes/Router'

function App() {

  return (
    <div className='max-w-screen mx-auto'>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  )
}

export default App
