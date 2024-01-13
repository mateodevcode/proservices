import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Gallery = () => {
  const images = [
    {
      original: "https://picsum.photos/id/1018/1600/600/",
    },
    {
      original: "https://picsum.photos/id/1015/1600/600/",
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
