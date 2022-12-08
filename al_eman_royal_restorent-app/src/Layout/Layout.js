import './Layout.css'
import Header  from '../components/header/header' 
import { Outlet } from "react-router-dom";

function Layout(){

return <main className="Layout">
    <Header></Header>
<Outlet/>
</main>

} 

export default Layout