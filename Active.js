import React from 'react'
import useAddingList from './useAddingList'

 function Active() {
     const [values, setValue, AddList, handleSubmit] = useAddingList("")
     const [todoList, setTodoList] = useAddingList([])


    return(
        <>
            <input
                type="text"
                placeholder="Add detail"
                className="input"
                value={values}
                onChange={AddList} />
            <button onClick={handleSubmit} >Add</button>
            {/* {values.map((list) => list.value && (
                <div><input type="checkbox" />{list.value}</div>
                ) )
                } */}
            <form>
                <input type="checkbox" />
                <label>Do code challenges</label>
            </form>
        </>
    )
}

export default Active