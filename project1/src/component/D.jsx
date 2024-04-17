import { useContext } from 'react'
import { countercontext } from '../App'

export default function D() {
    const counter = useContext(countercontext)
  return (
    <div>D
        <button onClick={()=>{counter.dispatch('inc')}}>Inc</button>
        <button onClick={()=>{counter.dispatch('dec')}}>dec</button>
        <button onClick={()=>{counter.dispatch('res')}}>res</button>
    </div>
  )
}
