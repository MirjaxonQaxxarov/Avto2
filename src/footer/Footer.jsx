import { NavLink } from 'react-router-dom';
import './Footer.css'
function Footer(){
    return(
        <div>
           <div className='footer'>
                <NavLink to={'/app'} className='icon'><p className='seond'><i className='fa-solid fa-home'></i></p></NavLink>
                <NavLink to={'/heart'} className='icon'><p className='seond'><i className='fa-solid fa-heart'></i></p></NavLink>
                <NavLink to={'/plus'} className='icon'><p className='seond'><i className='fa-solid fa-plus'></i></p></NavLink>
                <NavLink to={'/sms'} className='icon'><p className='seond'><i className='fa-solid fa-message mest'></i></p></NavLink>
                <NavLink to={'/house'} className='icon'><p className='seond'><i className='fa-solid fa-user'></i></p></NavLink>
        </div> 
        </div>
























    )
}
export default Footer;