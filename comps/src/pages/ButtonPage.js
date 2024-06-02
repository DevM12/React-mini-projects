import Button from "../components/Button"



export default function ButtonPage() {


    return (
        <div className="bg--400">
            <Button className='bg-green-500 border border-green-500 text-white' primary rounded  >BUY NOW!</Button>
            <Button secondary outline>HIDE ADS!</Button>
            <Button success outline rounded>CONGRATULATIONS!</Button>
            <Button warning>SEE DEAL!</Button>
            <Button danger outline>WATCH OUT!</Button>
        </div>
    )
}