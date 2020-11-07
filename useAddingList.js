import {useState} from 'react'

 function useAddingList() {
    const [values, setValue] = useState("")
    const [todoList, setTodoList] = useState([])
    

    const AddList = (e) => {
          setValue(e.target.value)
          console.log(e.target.value);
    
    }

    const handleSubmit = (e) => {
        e.preventDefault()
       setTodoList(prevState => prevState.concat({value: values}))
    }


    return [values, setValue, todoList, handleSubmit, setTodoList, AddList ]
}

export default useAddingList

