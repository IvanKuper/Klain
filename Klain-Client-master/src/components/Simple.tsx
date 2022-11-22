import { FunctionComponent } from "react";
import Navbar from "./Navbar";

interface SimpleProps {}

const Simple: FunctionComponent<SimpleProps> = () => {
  return (
    <>
      <Navbar />
      <div className="container-fluid content ">
        <div className="row">
          <div className="col-lg-6 mt-5">
            <h1>מה זאת התחדשות עירונית?</h1>
            <p>
              אתם וודאי מכירים אותה בשם ״פינוי-בינוי״, בפרויקט מסוג זה נהנים
              הדיירים מבניין חדש ומדירה מודרנית וגדולה יותר המותאמת לחיים במאה
              ה-21, שערכה המסחרי זוכה לשדרוג משמעותי ובנוסף פיתוח סביבתי להשלמת
              החוויה והנוף מהמרפסת.
            </p>
          </div>
          <div className="col-lg-6 mt-5 center">
            <img className="image img-fluid " src="home3.png" alt="" />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 mt-5 center">
            <img className="image img-fluid" src="home4.png" alt="" />
          </div>
          <div className="col-lg-6 mt-5">
            <h1>מתכננים פינוי-בינוי?</h1>
            <p>
              חברת שפיר היא השותף הנכון שיעניק לכם את המעטפת הדרושה לפרויקט
              חייכם: מניסיון עשיר ועד ביטחון כלכלי, כולל ליווי אישי לאורך כל
              הדרך. הכל תחת קורת גג אחת, משלב התשתית, דרך הביצוע ועד הכניסה
              לדירה החדשה.
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

export default Simple;
