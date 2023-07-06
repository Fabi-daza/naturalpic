import React, { useContext } from 'react'
import { MyContext } from "../context/Mycontext"
import Heart from "./Heart";
import "../assets/css/galeria.css";

const Galeria = () => {
  const {images, setImages} = useContext(MyContext)
  console.log(images)

  const addFavorite = (id) => {
    const imageIndex = images.findIndex((image) => image.id === id)
    images[imageIndex].favorite = !images[imageIndex].favorite;
      setImages([...images]);

  }

  return (
    <div className="images-container">
      <div className="galeria">
                {images.map((image) => (
                    <div
                        className="card"
                        key={image.id}
                        onClick={() => addFavorite(image.id)}
                    >
                        <img src={image.src.tiny} alt={image.alt} />
                        <div className="heart-img">
                            <Heart filled={image.favorite} />
                        </div>
                        <div className="text">
                            <p>{image.alt}</p>
                        </div>
                    </div>
                ))}
            </div>
    </div>
  )
}

export default Galeria
