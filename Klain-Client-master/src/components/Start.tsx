import { FunctionComponent } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface StartProps {}

const Start: FunctionComponent<StartProps> = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid content ">
        <div className="row">
          <div className="col-lg-6 mt-5">
            <h1>מכל מה שרציתם לדעת על פינוי בינוי</h1>
            <p>
              בשנים האחרונות לא מעט ערים גדולות נאלצות להתמודד עם בעיות
              משמעותיות כמו מחסור בשטחים פתוחים וצפיפות אוכלוסייה, בעיות שהובילו
              לידי פתרון אידיאלי בדמות אחת מתוך הצורות של התחדשות העירונית:
              פינוי בינוי. במאמר זה נרחיב בפניכם אודות התהליך, יתרונותיו ויישומו
              בפועל.
            </p>
          </div>
          <div className="col-lg-6 mt-5 center">
            <img className="image img-fluid " src="about.png" alt="" />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 mt-5 center">
            <img className="image img-fluid" src="about1.png" alt="" />
          </div>
          <div className="col-lg-6 mt-5">
            <h1>איך הכל התחיל?</h1>
            <p>
              בשנת 1998 הכריזה ממשלת ישראל על הפינוי והבינוי כמדיניות רשמית של
              משרד הבינוי והשיכון של ישראל. מדיניות זו פותחה בעקבות יוזמה של
              מנהלת מעבר דירה האגף לתכנון עירוני במשרד השיכון דאז, האדריכלית
              אלדור אשר החליטה שיש למצוא פתרון למחסור בשטחי הבינוי בערים
              הגדולות, כדוגמת העיר תל אביב. המסקנה הייתה שהדרך היעילה ביותר לנצל
              את הקרקע הקיימת היא על ידי בנייה לגובה. נכון להיום, משרד הבינוי
              רשאי להכריז על שטח עירוני כמתחם פינוי בינוי וזאת באמצעות צו שתקף
              שש שנים, כאשר מסלול זה נחשב לאחד ממסלולי ההתחדשות העירונית
              הפופולאריים בישראל.
            </p>
          </div>
        </div>

        {/* <div className="row">
              <div className="col-lg-6 mt-5">
                <h1>The best contactless business card.</h1>
                <p>
                  BizCards digital business cards are germ-free—no physical contact
                  is necessary to send or receive a virtual card. Electronic
                  business cards can be shared with anyone, anywhere, anytime. Using
                  a digital business card means you can update your information with
                  a single tap, so you don’t need to go through ordering and
                  shipping new cards.
                </p>
              </div>
              <div className="col-lg-6 mt-5 center">
                {" "}
                <img className="image img-fluid" src="card3.png" alt="" />
              </div>
            </div> */}
      </div>
      <Footer />
    </>
  );
};

export default Start;
