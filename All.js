import React from 'react'
import useAddingList from './useAddingList'

function All() {
    const [values, setValue, AddList] = useAddingList("")
    const [todoList, setTodoList, handleSubmit] = useAddingList([])
    return(
        <>
            <input
                type="text"
                placeholder="Add detail"
                className="input"
                value={values}
                onChange={AddList} />
              <button >Add</button>
            {/* {todoList.map((list) => list.value && (
                <div><input type="checkbox" />{list.value}</div>
                ) )
                } */}
            <form>
                <input type="checkbox" />
                <label>Do code challenge</label>
            </form>
           
        </>
    )
}

export default All