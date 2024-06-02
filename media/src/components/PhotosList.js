import PhotosListItems from './PhotosListItems'
import { useFetchPhotosQuery, useAddPhotoMutation } from "../store"
import Skeleton from './Skeleton';
import Button from './Button'
export default function PhotosList({ album }) {
    const { data, error, isFetching } = useFetchPhotosQuery(album);
    const [addPhoto, results] = useAddPhotoMutation();
    const handleAddPhoto = () => {
        addPhoto(album);
    }


    let content;
    if (isFetching) {
        content = <Skeleton times={3} className="h-10 w-full" />;
    } else if (error) {
        content = <div>Error showing Photos</div>
    } else {
        content = data.map((photo) => {
            return <div key={photo.id}><PhotosListItems photo={photo} /></div>
        })
    }

    return (
        <div>
            <div className="flex flex-row items-center justify-between">
                <h3 className='text-lg font-bold' >
                    Photos of {album.title}
                </h3>
                <Button loading={results.isLoading} onClick={handleAddPhoto}>
                    +Add Photo
                </Button>

            </div>
            <div className='m-8 flex flex-row flex-wrap justify-center'>
                {content}
            </div>
        </div>
    );
}