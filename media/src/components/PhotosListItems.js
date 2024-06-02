import { useRemovePhotoMutation } from "../store"
import { FaTrashAlt } from "react-icons/fa";
export default function PhotosListItems({ photo }) {
    const [removePhoto] = useRemovePhotoMutation();
    const handleRemovePhoto = () => {
        removePhoto(photo);
    }



    return (
        <div onClick={handleRemovePhoto} className='relative cursor-pointer m-2'>
            <img className="h-20 w-20" src={photo.url} alt="failed fetching" />
            <div className='absolute inset-0 flex justify-center items-center hover:bg-gray-200 opacity-0 hover:opacity-80'>
                <FaTrashAlt className="text-3xl"/>
            </div>
        </div>
    )
}