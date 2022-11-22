import { FunctionComponent, useEffect, useState } from "react";
import { Card } from "../interfaces/Card";
import { getAllCards } from "../services/cardService";
import { errorMsg } from "../services/feedbackService";
import Footer from "./Footer";
import Navbar from "./Navbar";
interface ProfessionalsProps {}

const Professionals: FunctionComponent<ProfessionalsProps> = () => {
  const [search, setSearch] = useState<string>("");
  const [cards, setCards] = useState<Card[]>([]);
  useEffect(() => {
    getAllCards()
      .then((result) => {
        setCards(result.data);
      })
      .catch((err) => {
        errorMsg("Something went Wrong, Try Agian");
      });
  }, []);
  return (
    <>
      <Navbar />
      <h1 className="text-center mt-5 mb-4">
        <i className="fa-regular fa-address-card"></i> אנשי מקצוע
        <span style={{ color: "#eeeeee" }}>({cards.length})</span>
      </h1>

      <div className="container-fluid _AllCards w-75 mb-5">
        <div className="row allCards">
          {/* Search Input */}
          <div className="input-group mx-auto mb-1">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              className="form-control "
              placeholder="Search Card..."
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
          {cards.length ? (
            cards
              .filter((card) => {
                return search.toLocaleLowerCase() == ""
                  ? card
                  : card.business_name.toLocaleLowerCase().includes(search);
              })
              .map((card: Card) => {
                return (
                  <div key={card.card_id} className="col-lg-4 card bizCard">
                    <div className="top">
                      <div className="col-lg-11 text-center">
                        <img
                          src={card.business_image}
                          className="card-img-top mx-auto"
                          alt="..."
                        />
                      </div>
                    </div>

                    <div className="card-body overflow">
                      <h3 className="card-title text-center">
                        {card.business_name}
                      </h3>
                      <hr />
                      <div className="card-text mb-2 mt-4 text-center">
                        {card.business_desc}
                      </div>
                      <hr />
                      <div className="card-text mb-2 text-center">
                        <i className="fa-solid fa-phone"></i>{" "}
                        {card.business_phone}
                      </div>
                      <hr />
                      <div className="card-text mb-2 text-center">
                        <i className="fa-solid fa-location-dot"></i>{" "}
                        {card.business_adress}
                      </div>
                      <hr />
                      <div className="card-text mb-2 text-center">
                        <button className="btn btn-success">
                          בחירת איש מקצוע זה
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
          ) : (
            <>
              <h4 className="text-center  mt-5">אין כרגע אנשים מקצוע...</h4>
              <img
                className="image mx-auto img-fluid"
                src="nocards.png"
                alt=""
              />
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Professionals;
