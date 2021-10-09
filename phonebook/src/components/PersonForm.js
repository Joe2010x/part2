import React from "react"

const PersonForm =(props) =>{
    return (
      <form>
        <div>
          name:
          <input value={props.nName} onChange={props.aName} />
        </div>
        <div>
          number:
          <input value={props.nNumber} onChange={props.aNumber} />
        </div>
        <div>
          <button onClick={props.hClick} type="submit">
            add
          </button>
        </div>
      </form>
    );
}

export default PersonForm