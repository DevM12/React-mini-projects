import { FaTrashAlt } from "react-icons/fa";
import ExpandablePanel from "./ExpandablePanel";
import {useRemoveAlbumMutation} from '../store';
import Button from "./Button";
import PhotosList from './PhotosList'


export default function AlbumsListItems({ album }) {
    
    const [removeAlbum] = useRemoveAlbumMutation();

    const handleRemoveAlbum = () => {
        removeAlbum(album);
    };

    const header = <>
        <div className='px-2'>
            <Button onClick={handleRemoveAlbum}>
                <FaTrashAlt />
            </Button>
        </div>
        {album.title}
    </>
    return (
        <ExpandablePanel header={header}>
            <PhotosList album={album}/>
        </ExpandablePanel>
    )
}