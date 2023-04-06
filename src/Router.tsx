import { Route, Routes } from 'react-router-dom'
import { NoTasks } from './pages/NoTaks'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      
      <Route path='/' element={<DefaultLayout />} >
        <Route path='/' element={<NoTasks />} />
      </Route>
      
    </Routes>
  )
}