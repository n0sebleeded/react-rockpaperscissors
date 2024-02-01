import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CardList from "./components/CardList.tsx";
import ErrorPage from "./components/ErrorPage.tsx";
import MainPage from "./components/MainPage.tsx";



function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/game" element={<CardList />} />
            <Route path="*" element={<ErrorPage />}/>
        </Routes>
    </Router>
  )
}

export default App
