import {Outlet, NavLink} from 'react-router-dom'
import {useState, useEffect} from 'react'



function Sidebar1(props) {

    const [state, setstate] = useState(false)

    function myfun(e){

        e.preventDefault();

       
        if(props.state[0]==="none"){
setstate(true)
            var array1 = ["block", "none"]
            props.setstate(array1)
        }

        else{
            var array1 = ["none", "none"]
            props.setstate(array1)
            setstate(false)
        }
    }


    useEffect(()=>{

        if(props.state[0]==="none"){
            setstate(false)
            
        }

        else{
            setstate(true)
        }

    })
    return ( 

<div>
<a className="anchor" href="" onClick={myfun}>Anchor1 <i className={state? "arrow1": 'arrow'}></i></a>
<ul style={{display: props.state[0]}}>
<li><NavLink style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'blue' })} to="comp1">Comp1</NavLink></li>
<li><NavLink style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'blue' })} to="comp2">Comp2</NavLink></li>
<li><NavLink style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'blue' })} to="comp3">Comp3</NavLink></li>
</ul>


</div>
     );
}

export default Sidebar1;