import '../style/navbar.css'
import Content from './Content'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faMicrochip ,faScrewdriverWrench ,faCircleCheck , faCartShopping} from '@fortawesome/free-solid-svg-icons'
function Navbar(){
    return(
        <>
<div className='overlay'>
<ul class="nav justify-content-center ">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" onClick={()=> {window.scrollTo(0,0)}}>Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" onClick={()=> {window.scrollTo(0,755)}}>about-us</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModalToggle">contact</a>
  </li>
  <li class="cart">
    <a class="nav-link" ><FontAwesomeIcon icon={faCartShopping} style={{color: "#ec4141",}} /></a>
  </li>
</ul>
<div className=' welcomeText text-center text-light'>
<h2 >hello in our store , hope you find your needs  <FontAwesomeIcon icon={faMicrochip} style={{color: "#62b7d7",}} /> <FontAwesomeIcon icon={faScrewdriverWrench} style={{color: "#bee96e",}} /> </h2>
</div>

</div>

<div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      
      <div class="modal-body">
        <p>tell us the problem</p>
        <hr/>
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Email to contact with you:</label>
            <input type="email" class="form-control" id="recipient-name"/>
          </div>
          <div class="mb-3">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">send</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
    <div class="modal-body">
       
          
          <div class="">
            <p className='thankMsg'>the message have been sent to us , the problem will be solve as soon as possible <FontAwesomeIcon icon={faCircleCheck} /> </p>
          </div>
        
      </div>
      
      <div class="modal-footer">
      <button type="button" class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close">close</button>      </div>
    </div>
  </div>
</div>
        </>
    )
}
export default Navbar;