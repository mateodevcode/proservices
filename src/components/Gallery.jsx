import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { imagenes } from "../data/Main";

const Gallery = () => {
  const images = imagenes.map((imagen) => {
    return {
      original: imagen.original,
      originalAlt: imagen.originalAlt,
    };
  });

  return (
    <div className="w-full h-auto">
      <ImageGallery
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
        showBullets={true}
        showNav={false}
      />
    </div>
  );
};

export default Gallery;
