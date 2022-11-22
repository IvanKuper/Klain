import { FunctionComponent } from "react";
import Navbar from "./Navbar";

interface CheckProps {}

const Check: FunctionComponent<CheckProps> = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid content ">
        <div className="row">
          <div className="col-lg-6 mt-5">
            <h1>מפינוי בינוי - מה זה בעצם ?</h1>
            <p>
              'פינוי בינוי' הוא תהליך בו הורסים מבנים קיימים ובונים במקומם מבנים
              חדשים, כאשר היתרונות של התהליך כוללים תשתיות משופרות, הגדלת שטח
              הדירות, תוספת מרחב מוגן (ממ"ד), תוספת מרפסת שמש, איכות חיים משופרת
              וקבלת דירה בעלת שווי גבוה יותר מהדירה המקורית. יתרון מרכזי נוסף של
              פרויקט מסוג זה לעומת תמ"א 38 , הוא שמתבצע תכנון של מתחם שלם הכולל
              מספר בניינים ומביא בחשבון את הצרכים הציבוריים הנדרשים, כגון מבני
              ציבור, גני ילדים, גינות ושטחים ירוקים וכיוצא בזה.
            </p>
          </div>
          <div className="col-lg-6 mt-5 center">
            <img className="image img-fluid " src="check.png" alt="" />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 mt-5 center">
            <img className="image img-fluid" src="check1.png" alt="" />
          </div>
          <div className="col-lg-6 mt-5">
            <h1>ממתכנון ליישום – תהליך פינוי בינוי</h1>
            <p>
              בעלי דירות שמעוניינים בפרויקט פינוי בינוי בשכונתם יפנו אל יזם
              פינוי בינוי שייקח על עצמו את הוצאת הפרויקט אל הפועל. החברה היזמית
              תחתים את כל הדיירים על הסכם הפרויקט בו הדיירים יקבלו דירה חדשה,
              בתמורה להעברת זכויות הבניה הנוספות במתחם לידי היזם. בנוסף, היזם
              יישא בכל העלויות הכרוכות בפרויקט והדיירים לא יידרשו להוצאה כלשהי
              מכיסם. במהלך תקופת הבניה של הבניין החדש ישלם היזם לדיירים תשלום
              שכר דירה עד להשלמת הפרויקט וחזרת הדיירים אל הבניין החדש. את
              הפרויקט כולו ניתן לבצע ללא עלות לדיירים בזכות העובדה שניתן לבנות
              בניין חדש ובו יותר דירות מהבניין הישן, כאשר הדירות הנוספות נמכרות
              בשוק החופשי לרוכשים חדשים ובכך ממומן כל התהליך. היזם יהיה אחראי על
              כל הקשור בפרויקט ויפעל בשיתוף פעולה עם נציגות הדיירים אל מול הרשות
              המקומית והמחוזית. הוא זה שיבצע את הבדיקות הדרושות וימליץ לוועדה
              הרלוונטית על אותו מתחם שלדעתו יתאים לפרויקט. באם הועדה אכן מקבלת
              את ההמלצה, ניתן להתחיל מהלך רישוי לטובת אישור פרויקט פינוי בינוי.
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
    </>
  );
};

export default Check;
