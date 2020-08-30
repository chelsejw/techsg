import React from 'react'

const StackOptions = (props) => {

    const checkboxes = props.stack.map(item => {
        return (
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value={item.name} id={`techid_${item.id}`}/>
                <label class="form-check-label" for={`techid_${item.id}`}>
                    {item.name}
                </label>
            </div>
        )
    })

    return (<div className="col-md-3 opt opt-stack">
    {checkboxes}
    </div>)

}

export default StackOptions