import React from "react";
import { Link } from "react-router-dom";

export default function DogBreedImages(props) {
  const { images, breed } = props;
  return (
    <div className="dog-breed-images">
      <h1>Dogs {breed} Breed Images</h1>
      This page will show images of the {breed} breed.
      <div>
        <ul>
          {" "}
          {images &&
            images.map(url => (
              <li>
                <img src={url} alt="Dog" />
              </li>
            ))}
          {!images && "Loading..."}
        </ul>
      </div>
      <Link to="/">Go back to the index</Link>
    </div>
  );
}
