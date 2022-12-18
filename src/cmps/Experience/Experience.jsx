
import visitCard from "../../assets/visitcard.jpeg"
import sophieImg from "../../assets/sophie1.jpg"
import "./Experience.css"

export const Experience = () => {

    function reveal() {
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
      <section id="experience">
        <div className=" reveal container" >
            <h2 className="exp-title">ניסיון תעסוקתי</h2>
          <div className="experience-container">
                <div className="exp-img">
                    <img src={sophieImg} alt="visit card" />
                </div>
                <div className="exp-ctx textRight">
                    <p><strong>מילים מודגשות מילים מודגשות:</strong>לורם איפסום דולור סיט אמט, קונסקטורר</p> <br />
                    <p><strong>מילים מודגשות:</strong>לורם איפסום דולור סיט אמט, קונסקטורר</p> <br />
                    <p><strong>מילים מודגשות מילים מודגשות:</strong> קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק .לורם איפסום דולור סיט אמט, קונסקטורר</p> <br />
                    <ul style={{}}>
                     <li>תואר ראשון ב</li>   
                     <li>תואר שני ב</li>   
                     <li>דוקטורט ב</li>   
                     <li>פוסט דוקטורט ב</li>   
                    </ul>
            </div>
            </div>
            </div>
        </section>
    )
}