import { OrderAction } from "../reducers/order-reducer"

const tipOptions = [
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
]

type TipFormProps = {
    dispatch:React.Dispatch<OrderAction>
}
function TipForm({dispatch}:TipFormProps) {
  return (
    <div>
        <h3 className="font-black text-2xl">Propina</h3>
        <form>
            {tipOptions.map((e)=>
                (
                    <div className="flex gap-2" key={e.id}>
                        <label htmlFor={e.id}>{e.label}</label>
                        <input type="radio" name="tip" id={e.id} value={e.value} onChange={evt => dispatch({type:"add-tip",payload:{value:+evt.target.value}})}/>
                    </div>
                )
            )}
        </form>
    </div>
  )
}

export default TipForm