import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import ProfilePage from "../pages/ProfilePage"
import ErrorPage from "../pages/ErrorPage"
import ProdutcIdPage from "../pages/ProductIdPage"

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path='/profile/:name' element={<ProfilePage />} />
                <Route path='*' element={<ErrorPage />} />
                <Route path='/product/:id' element={<ProdutcIdPage />} />
            </Routes>
        </BrowserRouter>
    )
}