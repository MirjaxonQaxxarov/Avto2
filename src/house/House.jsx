import './House.css'
import Context from './Context'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'
function House() {
    const [status,setstatus] = useState(1)
    const houseClick = (e,id)=>{

        if (id===1) {
            setstatus(1)
        }else{
            setstatus(0)
        }
        document.querySelectorAll('.house-02').forEach((event)=>{
            event.classList.remove('house-100')
        })
        e.target.classList.add('house-100')

    }

    return(
        <>
        <Link to={'/card'}>
                <div className="second"> 
                    <p className="first">Kabinet</p>
                    <i className='fa-solid fa-music'></i>
                    <i className='fa-solid fa-list'></i>
                </div> 
                <div className='second'>
                    <p className='house-1 house-100  house-02' onClick={(e)=>houseClick(e,1)}>Tasdiqlangan</p>
                    <p className='house-01 house-02' onClick={(e)=>houseClick(e,2)}>Faol emas</p>
                    <p className='house-001 house-02' onClick={(e)=>houseClick(e,3)}>Blok qilingan</p>
                </div>
                {
                    status===1?<Context/>:<div><h1 className='str-1'>Elon mavjud emas</h1></div>

                }
        </Link>
        <Footer/>

        </>
    )
}
export default House;