import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import { MyContext } from "./context/Mycontext";

export default function App() {
  const endpoint = "/fotos.json";
  const [images, setImages] = useState([]);

    const getPhotos = async () => {
        const res = await fetch( "/fotos.json" );
        let  datosFotos = await res.json();
        let fotos = datosFotos.photos
        setImages(fotos)
    };

    useEffect(() => {
        getPhotos();
    }, []);


  return (
    <div className="App">
      <MyContext.Provider value={{images, setImages}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}
