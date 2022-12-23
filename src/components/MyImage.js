import React, { useState } from "react";

export default function MyImage({ images = [{ url: "" }] }) {
  const [mainImage, setMainImage] = useState(images[0]);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            {images.map((currentElement, id) => (
              <div key={id} className="row">
                <img
                  className="img-fluid my-2 px-0  rounded-2"
                  key={id}
                  src={currentElement.url}
                  alt={currentElement.filename}
                  onClick={() => setMainImage(currentElement)}
                />
              </div>
            ))}
          </div>
          <div className="col-md-8 my-auto">
            <img
              className="img-fluid rounded-2"
              src={mainImage.url}
              alt={mainImage.filename}
            />
          </div>
        </div>
      </div>
    </>
  );
}
