import './Contact.css'
import Map from '../UI/Map';
import visitCard from "../../assets/visitcard.jpeg"
import { CustomForm } from '../UI/CustomForm';


export const Contact = () => {

  const reveal = () => {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
  
  return (
      <section id="contact">
        <div className='contact-container container reveal'>
              <h2 >צרו איתי קשר</h2>
        <div className='contact-ctx'>
                  <div className='contact-info textRight'>  
                      <p>זמיר 2, צור יגאל, ישראל</p>
                      <p> 050-9605069</p>
                      <p>אימייל</p>
                  </div>
                  <div className='map-container'>
                    <Map />   
                  </div>
                  <div className='form-container'>
                    <CustomForm />
                  </div>
              </div>
        </div>
      </section>
  )
}
