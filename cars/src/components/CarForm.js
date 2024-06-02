import { useDispatch, useSelector } from "react-redux"
import { changeName, changeCost, addCar } from '../store'
export default function CarForm() {
    const dispatch = useDispatch();

    const name = useSelector((state) => {return state.form.name})
    const cost = useSelector((state) => {return state.form.cost})



    const handleFormSubmit=(event)=>{
        event.preventDefault();
        dispatch(addCar({name,cost}));
       
    }
    const handleNameChange = (event) => {
        dispatch(changeName(event.target.value))
    }

    const handleCostChange = (event) => {
        const carCost = parseInt(event.target.value) || 0;
        dispatch(changeCost(carCost))
    }

    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add Car!</h4>
            <form onSubmit={handleFormSubmit}>
                <div className="field-group">
                    <div className="field">
                        <label className="label">NAME</label>
                        <input
                            className="input is-expanded"
                            value={name}
                            onChange={handleNameChange}
                        />
                        <label className="label">COST</label>
                        <input
                            className="input is-expanded"
                            type="number"
                            value={cost || ''}
                            onChange={handleCostChange}
                        />
                    </div>
                </div>
            <button className="button is-link">Submit!</button>
            </form>

        </div>
    )
}