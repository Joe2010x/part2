import React from "react"

const Filter =(props) =>
{
    console.log(props)
    return (
      <div>
        filter shown with
        <input onChange={props.onChange} value={props.value}></input>
        
      </div>
    );

}

export default Filter;