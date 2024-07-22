import "./flatRent.scss";
import MySelect from "../MySelect/MySelect";
import metro from "../../assets/icons/metro.svg";
import flat1 from "../../assets/flat1.png";
import flat2 from "../../assets/flat2.png";
import avatar from "../../assets/avatar.png";
import arrowLeftPurple from "../../assets/icons/arrowLeftPurple.svg";
import arrowRightPurple from "../../assets/icons/arrowRightPurple.svg";
import arrowRightWhite from "../../assets/icons/arrowRigthWhite.svg";

import FlatItem from "../FlatItem/FlatItem";

const flatInfo = [
  {
    image: flat1,
    price: 65,
    people: "4 (2+2)",
    rooms: 4,
    square: 179,
    adress: "Минск, б-р Мулявина, д. 10",
    metro: "Грушевка",
    area: "Шабаны",
    descr:
      "Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры,описание квартиры, описание квартиры,описание квартиры, описание квартиры,описание квартиры, описание квартиры,описание квартиры, описание квартиры, описание ...",
    avatar: avatar,
    name: "Dmitriy",
    phone: "+375 (29) 291-14-44",
    mail: "vladimir6234@tut.by",
  },
  {
    image: flat2,
    price: 65,
    people: "4 (2+2)",
    rooms: 4,
    square: 179,
    adress: "Минск, б-р Мулявина, д. 10",
    metro: "Грушевка",
    area: "Шабаны",
    descr:
      "Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры,описание квартиры, описание квартиры,описание квартиры, описание квартиры,описание квартиры, описание квартиры,описание квартиры, описание квартиры, описание ...",
    avatar: avatar,
    name: "Dmitriy",
    phone: "+375 (29) 291-14-44",
    mail: "vladimir6234@tut.by",
  },
  {
    image: flat2,
    price: 65,
    people: "4 (2+2)",
    rooms: 4,
    square: 179,
    adress: "Минск, б-р Мулявина, д. 10",
    metro: "Грушевка",
    area: "Шабаны",
    descr:
      "Какое-то описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры, описание квартиры,описание квартиры, описание квартиры,описание квартиры, описание квартиры,описание квартиры, описание квартиры,описание квартиры, описание квартиры, описание ...",
    avatar: avatar,
    name: "Dmitriy",
    phone: "+375 (29) 291-14-44",
    mail: "vladimir6234@tut.by",
  },
];

function FlatRent() {
  return (
    <div className="flatRent_wrapper">
      <div className="container">
        <div className="flatRent_header">
          <div className="flatRent_header_text">
            <div className="flatRent_header_text_title">Квартиры на сутки</div>
            <div className="flatRent_header_text_subtitle">
              Аренда квартир в Минске
            </div>
          </div>
          <div className="flatRent_header_selects">
            <MySelect
              placeholder="Метро"
              listItems={["Уручье", "Восток", "Московская", "Площадь победы"]}
              icon={metro}
              wide
            />
            <MySelect
              placeholder="Район"
              listItems={["Первомайский", "Советский", "Партизанский"]}
              wide
            />
          </div>
        </div>
        <div className="flatRent_items">
          {flatInfo.map((item) => {
            return <FlatItem item={item} />;
          })}
        </div>
        <div className="flatRent_buttons">
          <button className="flatRent_buttons_button">
            <img
              src={arrowLeftPurple}
              alt=""
              className="flatRent_buttons_icon"
            />
          </button>
          <button className="flatRent_buttons_button">
            <img
              src={arrowRightPurple}
              alt=""
              className="flatRent_buttons_icon"
            />
          </button>
        </div>
        <div className="flatRent_footer">
          <div className="flatRent_footer_content">
            <div className="flatRent_footer_content_text">
              <div className="flatRent_footer_content_text_title">341</div>
              <div className="flatRent_footer_content_text_title flatRent_footer_content_text_title_plus">
                +
              </div>
            </div>

            <div className="flatRent_footer_content_line"></div>
            <button className="flatRent_footer_content_button">
              <div className="flatRent_footer_content_button_text">
                Посмотреть все
              </div>
              <img
                src={arrowRightWhite}
                alt="arrow"
                className="flatRent_footer_content_button_icon"
              />
            </button>
          </div>
          <div className="flatRent_footer_descr">Предложений по Минску</div>
        </div>
      </div>
      <div className="flatRent_bg"></div>
    </div>
  );
}

export default FlatRent;
