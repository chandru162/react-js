import { useContext } from 'react'
import { countercontext } from '../App'

export default function F() {
    const counter = useContext(countercontext)
  return (
    <div>F
        <button onClick={()=>{counter.dispatch('inc')}}>Inc</button>
        <button onClick={()=>{counter.dispatch('dec')}}>dec</button>
        <button onClick={()=>{counter.dispatch('res')}}>res</button>
    </div>
  )
}
