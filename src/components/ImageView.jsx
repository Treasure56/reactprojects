"use client";
import { useState } from "react";
import Image from "@/components/Image";

export default function ImageView() {
  const ImgView = ({ images }) => {
    const [currentImage, setCurrentImage] = useState(images[0]);

    const handleImgClick = (image) => {
      setCurrentImage(image);
    };

    return (
      <div className="flex flex-col justify-center items-center mx-auto p-4">
        {currentImage && (
          <img
            className="border rounded-md h-80 w-1/2 border-red-100"
            src={currentImage}
            alt="Selected Image"
          />
        )}

        <div className="flex justify-center gap-8 mt-3">
          {images.map((image, index) => (
            <img key={index}
              className="h-36 w-36 rounded-md border border-red-100 transform   hover:scale-110 duration-500"
              src={image}
              alt={`Image ${index}`}
              onClick={() => handleImgClick(image)}
            />
          ))}
        </div>
      </div>
    );
  };

  const imagePaths = ["/img/img1.jpeg", "/img/img2.jpeg", "/img/img7.jpeg", "/img/img4.jpeg"];

  return <ImgView images={imagePaths} />;
}
