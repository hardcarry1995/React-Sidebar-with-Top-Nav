import {Outlet, NavLink} from 'react-router-dom'
import {useState, useEffect} from 'react'



function Sidebar2(props) {

    const [state, setstate] = useState(false)

    function myfun(e){

        e.preventDefault();

       
        if(props.state[1]==="none"){
setstate(true)
            var array1 = ["none", "block"]
            props.setstate(array1)
        }

        else{
            var array1 = ["none", "none"]
            props.setstate(array1)
            setstate(false)
        }
    }

    useEffect(()=>{

        if(props.state[1]==="none"){
            setstate(false)
            
        }

        else{
            setstate(true)
        }

    })
    return ( 

<div>
<a className="anchor" href="" onClick={myfun}>Anchor2 <i className={state? "arrow1": 'arrow'}></i></a>
<ul style={{display: props.state[1]}}>
<li><NavLink style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'blue' })} to="comp4">Comp4</NavLink></li>
<li><NavLink style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'blue' })} to="comp5">Comp5</NavLink></li>
<li><NavLink style={({ isActive }) => ({ 
                            color: isActive ? 'greenyellow' : 'blue' })} to="comp6">Comp6</NavLink></li>
</ul>


</div>
     );
}

export default Sidebar2;