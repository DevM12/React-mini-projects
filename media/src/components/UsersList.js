import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { fetchUsers, addUsers } from '../store'
import Skeleton from './Skeleton'
import Button from './Button';
import useThunkHook from '../hooks/use-thunk-hook'
import UserListItem from './UserListItems';


export default function UsersList() {
    const [doFetchUser] = useThunkHook(fetchUsers)
    const [doCreateUser, isCreatingUser, creatingUserError] = useThunkHook(addUsers)


    const { isLoading, data, error } = useSelector((state) => {
        return state.users;
    })

    useEffect(() => {
        doFetchUser()
    }, [doFetchUser])

    let content;


    if (isLoading) {
        content = <Skeleton times={6} className="h-10 w-full" />;
    } else if (error) {
        content = <div>ERROR FETCHING DATA!</div>
    } else {
        content = data.map((user) => {
            return <UserListItem key={user.id} user={user} />
        })
    }

    const handleUserAdd = () => {
        doCreateUser();
    }


    return (
        <div>
            <div className='flex flex-row items-center justify-between m-3'>
                <h1 className='m-2 text-xl'>Users!</h1>
                <Button loading={isCreatingUser} onClick={handleUserAdd}>+Add User</Button>
                {
                    creatingUserError && 'Error creating user'
                }
            </div>
            {content}
        </div>
    )
}