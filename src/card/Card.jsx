import './Card.css'
import {Link} from "react-router-dom";
function Card() {
    return(
        <div>

            <div className='card-1'>
                <Link to={'..'} style={{textDecoration:'none'}} className='fa-solid fa-arrow-left'></Link>
                <div className='card-2'>Chevrolet Lacetti</div>
                <div className='card-3'><i className='fa-solid fa-share'></i></div>
            </div>

            <div className='card-4'>
                <div className='img-6'>
                    <p className='font-10'>320</p>
                    <p className='font-11'>5500 usd</p>
                </div>
            </div>

            <div className='card-5'>
                <div className='card-6'>
                    <p className='card-7'>Kokdala tumani Qashqasdaryo</p>
                    <div className='card-8'><i className='fa-solid fa-place-of-worship'></i></div>
                </div>
                <p className='card-9'>Parametrlar</p>

                <div className='card-10'>
                    <div className='card-11'><p className='card-12'>Chiqarilgan yili</p></div>
                    <div className='card-11'><p className='card-13'>2023</p></div>
                </div>
                <div className='card-10'>
                    <div className='card-11'><p className='card-12'>Dvigatel hajmi</p></div>
                    <div className='card-11'><p className='card-18'>1.6</p></div>
                </div>
                <div className='card-10'>
                    <div className='card-11'><p className='card-12'>Yurgan masofa</p></div>
                    <div className='card-11'><p className='card-14'>18500km</p></div>
                </div>
                <div className='card-10'>
                    <div className='card-11'><p className='card-12'>Uzatuv qutisi</p></div>
                    <div className='card-11'><p className='card-15'>Tanlanmagan</p></div>
                </div>
                <div className='card-10'>
                    <div className='card-11'><p className='card-12'>Kuzov turi</p></div>
                    <div className='card-11'><p className='card-19'>Sedan</p></div>
                </div>
                <div className='card-10'>
                    <div className='card-11'><p className='card-12'>Tortuvchi tomon</p></div>
                    <div className='card-11'><p className='card-16'>oldi gildirak</p></div>
                </div>
                <div className='card-10'>
                    <div className='card-11'><p className='card-12'>Yoqilgi turi</p></div>
                    <div className='card-11'><p className='card-20'>Benzin</p></div>
                </div>
                <div className='card-10'>
                    <div className='card-11'><p className='card-12'>Boyoq holati</p></div>
                    <div className='card-11'><p className='card-21'>Yangi</p></div>
                </div>
                <div className='card-10'>
                    <div className='card-11'><p className='card-12'>Kridetga</p></div>
                    <div className='card-11'><p className='card-17'>Iloji yoq</p></div>
                </div>

                <p className='card-22'>Boshqa Gentra avtomobillari orasida narx darajasi</p>
                <img className='card-23' src="img/1721366586_6699f83a88938_image_0.jpg" alt="" />
            </div>
            <div className='card-24'>
                    <div className='card-25'><i className='fa-solid fa-ring'></i></div>
                    <div className='card-25'><i className='fa-solid fa-timeline'></i></div>
                    <div className='card-25'><i className='fa-solid fa-message'></i></div>
                    <div className='card-26'>
                        <Link to={'tel:998993178882'} className='fa-solid fa-phone'></Link>
                        <p className='card-27'>Sotuvchiga qongiroq qilish</p>
                     </div>
            </div>
        </div>
    )
}
export default Card;