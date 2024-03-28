// import back from '../assets/back.jpg'
import '../styles/Olx.css'
// import '../App.css'
function Olx(props) {
    const{bikeImg,price,year,km,name,location,date}=props;
  return (
    
    <div className="frame1">
        <div className='item-container'>
        <div className="img">
            <img src={bikeImg} alt="" />
        </div>
        <div className="price">
            <h4>{price}</h4>
        </div>
        <div className="year-kms">
            <h6>{year} | {km} kms</h6>
        </div>
        <div className="name">
            <h6>{name}</h6>
        </div>
        <div className="location">
            <h6>{location}</h6>
            <span className='date'>{date}</span>
        </div>
    </div>
    </div>

  )
}

export default Olx
