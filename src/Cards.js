import Sidebar3 from "./Sidebar3";
import Sidebar4 from "./Sidebar4";
import {Outlet} from 'react-router-dom'


function Cards(props) {
    return ( 
<>
<div className="sidebar">
        <Sidebar3 state={props.state} setstate={props.setstate}/>
        <Sidebar4 state={props.state} setstate={props.setstate}/>
        </div>

        <div className="comp">
        <Outlet/>
        </div>
        </>
     );
}

export default Cards;



