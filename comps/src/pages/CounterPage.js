import { useReducer } from 'react'
import Button from '../components/Button'
import Panel from '../components/Panel'

const HANDLE_CHANGE = 'handle-change'
const INCREMENT_COUNT = 'increment-count'
const DECREMENT_COUNT = 'decrement-count'
const ADD_VALUE_TO_COUNT = 'add-value-to-count'
const RESET_VALUE = 'reset-value'



function reducer(state, action) {
    switch (action.type) {
        case INCREMENT_COUNT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT_COUNT:
            return {
                ...state,
                count: state.count - 1
            }
        case ADD_VALUE_TO_COUNT:
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0
            }
        case HANDLE_CHANGE:
            return {
                ...state,
                valueToAdd: parseInt(action.payload),
                count: parseInt(state.count)
            }
        case RESET_VALUE:
            return {
                ...state,
                count: 0,
                valueToAdd: 0
            }


    }
}
export default function CounterPage({ initialCount }) {
    const [state, dispatch] = useReducer(reducer, {
        count: initialCount,
        valueToAdd: 0
    })

    const handleChange = (event) => {
        dispatch({
            type: HANDLE_CHANGE,
            payload: event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch({
            type: ADD_VALUE_TO_COUNT
        })

    }


    const handleIncrement = () => {
        dispatch({
            type: INCREMENT_COUNT
        })

    }
    const handleDecrement = () => {
        dispatch({
            type: DECREMENT_COUNT
        })

    }
    const handleReset = () => {
        dispatch({
            type: RESET_VALUE
        })
    }



    return (
        <Panel className='text-center'>
            <h1 className='mb-5'>Count is {state.count} </h1>
            <div className='flex justify-center'>
                <Button success rounded outline onClick={handleIncrement}>Increment Value</Button>
                <Button success rounded outline onClick={handleDecrement}>Decrement Value</Button>
            </div>

            <form className='mt-5 flex justify-center' onSubmit={handleSubmit}>
                <input
                    className='border rounded border-gray-800 bg-gray-300'
                    value={state.valueToAdd || ''}
                    onChange={handleChange}
                    type='number'
                    placeholder='Enter a value to add' />
                <Button primary outline rounded>ADD VALUE</Button>
            </form>
            <Button warning rounded onClick={handleReset}>Reset</Button>
        </Panel>
    )
}