import { Routes, Route } from 'react-router-dom'
import { Home, CreatePost, PageNotFound } from '../pages'

export const AllRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='create' element={<CreatePost />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </main>
  )
}