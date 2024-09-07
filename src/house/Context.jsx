import './House.css'
function Context() {
    return(
        <div>
                     <hr/>
                <div className='img-04'>
        <div className='img-2'>
            <div></div>
            <div className='img-5'><i style={{color:"red", backgroundColor:'black', fontSize:'1.5rem', marginTop:'3rem',marginLeft:'1rem'}} className='fa-solid fa-heart'/></div>
        </div>
        <div className='img-3'>
            <div className='img-6'>
                <p className='font-10'>320</p>
                <p className='font-11'>5500 usd</p>
            </div>
        </div>
       </div> 
       <div className='second-div'>
       <h2 className='item'>Chevrolet Nexia2</h2>
        <h2 className='city'>Nuroata shahri Uchquduq tumani</h2>
        <div className='div-search'>
            <div className='search'><p className='items'>2005-yil</p></div>
            <div className='search'><p className='items'>Mexanika</p></div>
            <div className='search'><p className='items'>Propan</p></div>
            <div className='search'><p className='items'>300 km</p></div>
        </div>

             <div className='house-2'>
                 <div className='house-3'><p className='house-5'>Narxni ozgartirish</p></div>
                 <div className='house-3'><p className='house-5'>Topga chiqarish</p></div>
                 <div className='house-4'><p className='house-5'>O'chirish</p></div>
            </div>
        </div>
        </div>
    )
}
export default Context;