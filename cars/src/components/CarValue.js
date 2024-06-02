import { useSelectorcd ..
    
} from "react-redux"
export default function CarValue() {


    const totalCost = useSelector(({ cars: { carsList, searchTerm } }) => {
        const filteredCars= carsList.filter((car) =>
            car.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        let cost=0;
        for(let car of filteredCars){
            cost+=car.cost;
        }
        return cost;
    });


    return (
        <div className="car-value">
            Total Cost-${totalCost}
        </div>
    );
}