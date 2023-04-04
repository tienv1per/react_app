import React, { useEffect, useState } from 'react'

function EventBind() {
    const [state, setState] = useState(false);

    const handleState = () => {
        console.log(state);
        setState(!state);
    }
    const value = state ? "Tien Nguyen Hung" : "Nguyen Hung Tien";
  return (
    <div>
        <button onClick={handleState}>Click</button>
        {value}
    </div>
  )
}

export default EventBind