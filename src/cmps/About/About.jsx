import { Video } from "../UI/Video"
import "./About.css"
import errorImg from "../../assets/66.jpg"
import { useReavel } from "../../hooks/useReveal";
import CustomAccordation from "../UI/Accordation";
// customAccordation
const demoDesc = "לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית קולורס מונפרד אדנדום סילקוף, מרגשי ומרגשח. עמחליף לפרומי בלוף קינץ תתיח לרעח. לת צשחמי צש בליא, מנסוטו צמלח לביקו ננבי, צמוקו בלוקריה שיצמה ברורק. מוסן מנת. להאמית קרהשק סכעיט דז מא, מנכם למטכין נשואי מנורך. סחטיר בלובק. תצטנפל בלינדו למרקל אס לכימפו, דול, צוט ומעיוט - לפתיעם ברשג - ולתיעם גדדיש. קוויז דומור ליאמום בלינך רוגצה. לפמעט מוסן מנת. קולהע צופעט למרקוח איבן איף, ברומץ כלרשט מיחוצים. קלאצי לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי."


export const About = () => {
  useReavel()


    return (
        <section id="about">
         <div className="reveal">
            <CustomAccordation title="מהסיפור האישי אל היעוד המקצועי" desc={demoDesc}  />
                {/* <Avatar alt="Remy Sharp" src={sophieImg} sx={{ width: 56, height: 56 }} /> */}
            
            <div className="about container">
                <div className="about-ctx" >
                    <div className="video-container">
                        {/* <Video /> */}
                        <img src={errorImg} alt="errorImg" />    
                    </div>
                    <p className="typo textRight">
                         <span style={{fontWeight:'bold'}}>מילים מודגשות מילים מודגשות</span> <br />
                        לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי
                        לורם איפסום דולור סיט אמט, קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונסקטורר אדיפיסינג אלית. סת אלמנקום ניסי נון ניבאה. דס איאקוליס וולופטה דיאם. וסטיבולום אט דולור, קראס אגת לקטוס וואל אאוגו וסטיבולום סוליסי טידום בעליק. קונדימנטום קורוס בליקרה, נונסטי קלובר בריקנה סטום, לפריקך תצטריק לרטי
                    </p>
                </div>
            </div>
         </div>
        </section>
    )
}