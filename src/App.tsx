import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import ListaProdutos from "./pages/listasProdutos/ListaProdutos";
import Home from "./pages/home/Home";
import DetProdutos from "./pages/detProdutos/DetProdutos";
import Login from "./pages/login/Login";
import AdmProdutos from "./pages/admProdutos/AdmProdutos";

export default function App(){
    return(
        <>
        <Header />
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/produtos" element={<ListaProdutos/>}/>
            <Route path="/detProdutos" element={<DetProdutos/>} />
            <Route path="/Login" element={<Login/>} />
            <Route path="/AdmProdutos" element={<AdmProdutos/>} />
            <Route path="*" element={<img className="container-notfound" src="https://www.dochipo.com/wp-content/uploads/2024/01/404-Error-Animation-4.gif" alt="Imagem de não encontrado"/>}/>
        </Routes>
        <Footer />
        </>
    )
}