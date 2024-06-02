import './ImgShow.css'
export default function ImgShow({image}){
    return <div className="images">
        <img src={image.urls.small} alt='image' className='img' />
        </div>;
}