import './Home.css'
import {Link} from "react-router-dom";
function Home() {
return(
    <div>
       <div className='img-first'>
        <div className='img-2'>
            <div className='img-4'><p className='img-7'>Top</p></div>
            <div className='img-5'><i style={{color:"red", backgroundColor:'black', fontSize:'1.5rem', marginTop:'3rem',marginLeft:'1rem'}} className='fa-solid fa-heart'/></div>
        </div>
        <div className='img-3'>
            <div className='img-6'>
                <p className='font-10'>320</p>
                <p className='font-11'>5500 usd</p>
            </div>
        </div>
       </div> 
       <Link to={'/card'} className='second-div'>
       <h2 className='item'>Chevrolet Labo</h2>
        <h2 className='city'>Toshkent shahri Mirobod tumani</h2>
        <div className='div-search'>
            <div className='search'><p className='items'>2021-yil</p></div>
            <div className='search'><p className='items'>Mexanika</p></div>
            <div className='search'><p className='items'>Benzin</p></div>
            <div className='search'><p className='items'>120 km</p></div>
        </div>
        <h2 className='city'>Kirditga hisoblash</h2>
       </Link>

       <div className='img-01'>
        <div className='img-2'>
            <div className='img-4'><p className='img-7'>Top</p></div>
            <div className='img-5'><i style={{color:"red", backgroundColor:'black', fontSize:'1.5rem', marginTop:'3rem',marginLeft:'1rem'}} className='fa-solid fa-heart'/></div>
        </div>
        <div className='img-3'>
            <div className='img-6'>
                <p className='font-10'>320</p>
                <p className='font-11'>5500 usd</p>
            </div>
        </div>
       </div> 
       <Link to={'/card'} className='second-div'>
       <h2 className='item'>Chevrolet Spark</h2>
        <h2 className='city'>Nuroata shahri Uchquduq tumani</h2>
        <div className='div-search'>
            <div className='search'><p className='items'>2017-yil</p></div>
            <div className='search'><p className='items'>Mexanika</p></div>
            <div className='search'><p className='items'>Propan</p></div>
            <div className='search'><p className='items'>310 km</p></div>
        </div>
        <h2 className='city'>Kirditga hisoblash</h2>
       </Link>
       <div className='img-02'>
        <div className='img-2'>
            <div className='img-4'><p className='img-7'>Top</p></div>
            <div className='img-5'><i style={{color:"red", backgroundColor:'black', fontSize:'1.5rem', marginTop:'3rem',marginLeft:'1rem'}} className='fa-solid fa-heart'/></div>
        </div>
        <div className='img-3'>
            <div className='img-6'>
                <p className='font-10'>320</p>
                <p className='font-11'>5500 usd</p>
            </div>
        </div>
       </div>  
       <Link to={'/card'} className='second-div'>
       <h2 className='item'>Chevrolet Labo</h2>
        <h2 className='city'>Chirchiq shahri Uychi tumani</h2>
        <div className='div-search'>
            <div className='search'><p className='items'>2014-yil</p></div>
            <div className='search'><p className='items'>Mexanika</p></div>
            <div className='search'><p className='items'>Metan</p></div>
            <div className='search'><p className='items'>190 km</p></div>
        </div>
        <h2 className='city'>Kirditga hisoblash</h2>
       </Link>
       <div className='img-03'>
        <div className='img-2'>
            <div className='img-4'><p className='img-7'>Top</p></div>
            <div className='img-5'><i style={{color:"red", backgroundColor:'black', fontSize:'1.5rem', marginTop:'3rem',marginLeft:'1rem'}} className='fa-solid fa-heart'/></div>
        </div>
        <div className='img-3'>
            <div className='img-6'>
                <p className='font-10'>320</p>
                <p className='font-11'>5500 usd</p>
            </div>
        </div>
       </div> 
       <Link to={'/card'} className='second-div'>
       <h2 className='item'>Chevrolet Gentra</h2>
        <h2 className='city'>Nuroata shahri Uchquduq tumani</h2>
        <div className='div-search'>
            <div className='search'><p className='items'>2023-yil</p></div>
            <div className='search'><p className='items'>Avtomat</p></div>
            <div className='search'><p className='items'>Propan</p></div>
            <div className='search'><p className='items'>30 km</p></div>
        </div>
        <h2 className='city'>Kirditga hisoblash</h2>
       </Link>
       <div className='img-04'>
        <div className='img-2'>
            <div className='img-4'><p className='img-7'>Top</p></div>
            <div className='img-5'><i style={{color:"red", backgroundColor:'black', fontSize:'1.5rem', marginTop:'3rem',marginLeft:'1rem'}} className='fa-solid fa-heart'/></div>
        </div>
        <div className='img-3'>
            <div className='img-6'>
                <p className='font-10'>320</p>
                <p className='font-11'>5500 usd</p>
            </div>
        </div>
       </div> 
       <Link to={'/card'} className='second-div'>
       <h2 className='item'>Chevrolet Nexia2</h2>
        <h2 className='city'>Nuroata shahri Uchquduq tumani</h2>
        <div className='div-search'>
            <div className='search'><p className='items'>2005-yil</p></div>
            <div className='search'><p className='items'>Mexanika</p></div>
            <div className='search'><p className='items'>Propan</p></div>
            <div className='search'><p className='items'>300 km</p></div>
        </div>
        <h2 className='city'>Kirditga hisoblash</h2>
       </Link>
    </div>
)
}
export default Home;