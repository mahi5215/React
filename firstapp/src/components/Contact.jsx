import Comp1 from './Comp1.jsx'
import Comp2 from './Comp2.jsx'
import Comp3 from './Comp3.jsx'
function Contact() {
  return (
    <div>
        <h1 className='text-warning '>Contact</h1>
      <div className='d-flex justify-content-between'>
      <Comp1/>
      <Comp2 />
      <Comp3/>
      </div>
    </div>
  )
}

export default Contact
