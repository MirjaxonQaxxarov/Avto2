import './Header.css'
function Header() {
    return(
    <div className='src'>

        <div className="second"> 
            <p className="first">Avto Baraka</p>
            <span><i className='fa-solid fa-search'></i></span>
        </div> 
         <div className="avto">
            <div className="car">
            <img className='img-uz' src="img/car-wash.png1712845717.png" alt="" />
                <div className='font-style'>Avtomashinalar</div>
                </div>
            <div className="car">
            <img className='img-uz' src="img/bycicle.png1712845780.png" alt="" />
                <div className='font-styl'>Mototexnika</div>
                </div>
            <div className="car">
                <img className='img-uz' src="img/truck.png1712845809.png" alt="" />
                <div className='font-style'>Yuk mashinalar</div></div>
        </div><br/><br/><br/><br/>

    </div>
    )
}
export default Header;

