import './Sms.css'
import Footer from '../footer/Footer';
import {Link} from "react-router-dom";
function Sms() {
    return(
        <div>
            <p className='sms-1'>Suhbatlar</p><br />
                <Link to={'/sms2'} className='sms-2'>
                    <div className='sms-3'><i className='fa-solid fa-message'></i></div>
                    <p className='sms-4'>934567890</p>
                    <p className='sms-5'>2024-15-45 15:07:23</p>
                </Link><br />
                <Link to={'/sms2'} className='sms-2'>
                    <div className='sms-3'><i className='fa-solid fa-message'></i></div>
                    <p className='sms-4'>Admin</p>
                    <p className='sms-6'>2024-15-45 17:34:20</p>
                </Link><br />
                <Link to={'/sms2'} className='sms-2'>
                    <div className='sms-3'><i className='fa-solid fa-message'></i></div>
                    <p className='sms-4'>9346738508</p>
                    <p className='sms-5'>2024-15-45 09:45:29</p>
                </Link>

         <Footer/>
        </div>
    )
}
export default Sms;