import Sidebar1 from "./Sidebar1";
import Sidebar2 from "./Sidebar2";
import {Outlet} from 'react-router-dom'


function Accounts(props) {

    const viewHeight = window.outerHeight
    return ( 

<>
<div className="sidebar">
        <Sidebar1 state={props.state} setstate={props.setstate}/>
        <Sidebar2 state={props.state} setstate={props.setstate}/>
        </div>

        <div className="comp">
        <Outlet/>
        </div>
        </>
     );
}

export default Accounts;