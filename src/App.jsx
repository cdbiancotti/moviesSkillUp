import { Detail } from "./components/Detail";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Listado } from "./components/Listado";
// import { Favorites } from "./components/Favorites";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/listado" element={<Listado />} />
                    <Route path="/detalle" element={<Detail />} />
                    {/* <Route path="/favorites" element={<Favorites />} /> */}
                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default App;
