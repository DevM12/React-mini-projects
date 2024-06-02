import Accordion from '../components/Accordion'


export default function AccordianPage(){
    const items=[
        {
            id:'zsfgawr4trgc',
            label:'Hello',
            content:'kfjadfhgdijdhligif'
        },
        {
            id:'dgaet4twsg',
            label:'Hello',
            content:'kfjadfhgdijdhligif'
        },
        {
            id:'fa35ref',
            label:'Hello',
            content:'kfjadfhgdijdhligif'
        }
    ]
    return (
        <div className="bg-blue-200">
            <Accordion items={items}/>
        </div>
    )
}