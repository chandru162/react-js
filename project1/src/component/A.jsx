import { useContext } from 'react'
import { countercontext } from '../App'

export default function A() {
    const counter = useContext(countercontext)
  return (
    <div>
        A
        <button onClick={()=>{counter.dispatch('inc')}}>Inc</button>
        <button onClick={()=>{counter.dispatch('dec')}}>dec</button>
        <button onClick={()=>{counter.dispatch('res')}}>res</button>
    </div>
  )
}
