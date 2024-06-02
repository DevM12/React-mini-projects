import ImgShow from "./ImgShow"
import './ImgList.css'
export default function ImgList({ images }) {
    const renderedImages = images.map((image) => {
      return <ImgShow key={image.id} image={image} />;
    });
  
    return <div className="list">{renderedImages}</div>;
  }