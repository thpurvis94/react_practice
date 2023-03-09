import { ChangeEvent, FormEvent, useReducer } from "react"
import Button from "../components/Button"
import Panel from "../components/Panel"

interface Props {
    initialCount: number
}

enum ActionTypes {
    Count = 'count',
    ValueToAddChange = 'valueToAddChange',
    AddValueToAddToCount = 'aAddValueToAddToCount'
}

type Action = {
    type: ActionTypes.Count | ActionTypes.ValueToAddChange | ActionTypes.AddValueToAddToCount
    value: number
}

interface State {
    count: number,
    valueToAdd: number
}

const reducer = (state: State, payload: Action) => {
    switch(payload.type){
        case ActionTypes.Count: 
            return {
                ...state,
                count: state.count + payload.value
            }
        case ActionTypes.ValueToAddChange: {
            return {
                ...state,
                valueToAdd: payload.value
            }
        }
        case ActionTypes.AddValueToAddToCount: {
            return {
                ...state,
                count: state.count + state.valueToAdd,
                valueToAdd: 0
            }
        }
    }
}

const CounterPage: React.FC<Props> = (props: Props) => {

   const [state, dispatch] = useReducer(reducer, {
    count: props.initialCount,
    valueToAdd: 0
   })

    const increment = () => {
        dispatch({
            type: ActionTypes.Count,
            value: 1
        })
    }

    const decrement = () => {
        dispatch({
            type: ActionTypes.Count,
            value: -1
        })
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(event.target.value) || 0
        dispatch({
            type: ActionTypes.ValueToAddChange,
            value: value
        })
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()
        dispatch({
            type: ActionTypes.AddValueToAddToCount,
            value: state.valueToAdd
        })
    }

    return (
        <Panel className="m-3">
            <h1 className="text-lg">Count is: {state.count}</h1>
            <div className="flex flex-row">
                <Button onClick={increment} primary>Increment</Button>
                <Button onClick={decrement} primary>Decrement</Button>
            </div>
            
            <form onSubmit={handleSubmit}>
                <label>Add a lot</label>
                <input value={state.valueToAdd || ''}
                    onChange={handleChange}
                    type={'number'} 
                    className='p-1 m-3 bg-gray-50 border border-gray-300' />
                <Button>Add it!</Button>
            </form>
        </Panel>
    )
}
export default CounterPage