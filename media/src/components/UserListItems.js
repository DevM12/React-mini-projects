import { FaTrashCan } from "react-icons/fa6";
import Button from './Button';
import { deleteUsers } from '../store';
import useThunkHook from '../hooks/use-thunk-hook'
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";
export default function UserListItem({ user }) {
    const [doRemoveUser, deleteIsLoading, error] = useThunkHook(deleteUsers);
    const hadleDeleteClick = () => {
        doRemoveUser(user)
    }
    const header = <>
        <Button className='mr-3' loading={deleteIsLoading} onClick={hadleDeleteClick}>
            <FaTrashCan />
        </Button>
        {error && 'Error deleting user........'}
        <div className='flex p-2 justify-between items-center cursor-pointer'>
            {user.name}
        </div>
    </>
    return (
        <ExpandablePanel header={header}>
            <AlbumsList user={user} />
        </ExpandablePanel>
    )
}