import { useState } from 'react'
import{v4 as uuidv4} from 'uuid';
import './index.css'

export default function todoval(){

    const [todo, setTodo] = useState("");
    const [task, setTask] = useState([{taskname: 'Simple-Task', id : uuidv4(), isDone: false }] );
    // setTodo(
    // )
    let addTodo = () => {
        console.log("button click");
        setTask( [...task, { taskname: todo, id: uuidv4(), isDone: false}] );   //...task  is creates new copy and passes to render
        setTodo("");
    }

    let updateTodo = (event) => {
        setTodo(event.target.value) // targets the value in the input box
    }

    let delTask = (id) => {
    //    console.log(id);
        setTask( task.filter((task)=> task.id != id ));
   }

   let taskDone = (id) =>{
        setTask(
            (prevTask) => 
                prevTask.map((task) => {
                    if(task.id == id){
                        return{
                            ...task, isDone: true,
                        };
                    }else{
                        return todo;
                    }
                })
            );
         };
return(

  <div style={{ margin: '50px'}}>
        <h1 style={{ color:'blue'}}>Todo</h1>
            <input type="text"  placeholder='Add Your Task...'  onChange={updateTodo} value={todo}/>
{/* okko digit value enter chesaka updateTodo function call avtundi and render chesi todo lo save chestundi */}

                <button onClick={addTodo}>add</button>
{/* call addTodo, setTask save ina todo value task array lo save i render avtundi*/}


        <h2>Your Tasks are here: </h2>
            
            <ul>
                {task.map((todo) => (
                        <li key={todo.id}>
                            <span style={task.isDone ? {textDecorationLine: "line-through" }: {}}>{task.taskname}</span>
                            {todo.taskname}
                                <button onClick={ () => delTask(todo.id)} >delect</button>
                                <button onClick={ () => taskDone(todo.id)} >Done</button>

                    </li>)
                )}

            </ul>
  </div>

)
}