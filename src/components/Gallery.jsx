import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1050/1600/600/",
      originalAlt:"Imagen inicio"
    },
    {
      original: "https://cdn.pixabay.com/photo/2014/10/16/21/16/photovoltaic-491702_1280.jpg",
    },
    {
      original: "https://picsum.photos/id/1019/1600/600/",
    },
  ];
  return (
    <div>
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
