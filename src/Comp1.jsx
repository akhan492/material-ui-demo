import React from 'react'
function Comp1() {
  return (
    <div>
    <h1>Component 1</h1>
    <label htmlFor="check">check1</label>
    <input type="checkbox" checked/>
    <label htmlFor="name">name</label>
    <input type="text" name="" id="" />
    <label htmlFor="email">email</label>
    <input type="text" />
    <button>submit</button>
    <input type="reset">rest</input>
    </div>
  )
}
export default Comp1;