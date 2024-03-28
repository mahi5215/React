import back from '../assets/back.jpg'
import res from '../assets/res.pdf'
function Home() {
    let bg={
        backgroundImage:`url(${back})`,
        backgroundSize:"cover",
        backgroundPosition:"center"
    }
  return (

    <div style={bg} className="d-flex justify-content-center align-items-center  vh-100">
      <div className="text-center text-light">
      <div className="fs-1">My name is <span className="dislay-1 fw-bold">Maheshwari Darwade</span></div>
      <div className="fs-2">I am Fullstack Web Developer</div>
      <a href="" className="btn btn-light mt-4">Download Resume</a>
      </div>
      </div>
    
  )
}

export default Home
