import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store"
import Skeleton from './Skeleton';
import Button from './Button';
import AlbumsListItems from "./AlbumsListItems";


export default function AlbumsList({ user }) {
    const { data, error, isFetching } = useFetchAlbumsQuery(user);
    const [addAlbum, results] = useAddAlbumMutation();

    const handleAddAlbum = () => {
        addAlbum(user);
    };



    let content;
    if (isFetching) {
        content = <Skeleton times={3} className="h-10 w-full" />;
    } else if (error) {
        content = <div>Error showing Albums</div>
    } else {
        content = data.map((album) => {
            return <AlbumsListItems key={album.id} album={album} />
        })
    }

    return (
        <div>
            <div className="flex flex-row items-center justify-between">
                <h3 className='text-lg font-bold' >
                    Albums for {user.name}
                </h3>
                <Button loading={results.isLoading} onClick={handleAddAlbum}>
                    +Add Album
                </Button>

            </div>
            <div className='py-2 px-5'>
                {content}
            </div>
        </div>
    )
}