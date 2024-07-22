import "./searchFlat.scss";
import searchBG from "../../assets/searchMap.png";
import mapMarker from "../../assets/icons/mapMarkerYellow.svg";
import whiteCircles from "../../assets/whiteCircles.svg";
import yellowCircles from "../../assets/yellowCircles.svg";
import search1 from "../../assets/search1.png";
import search2 from "../../assets/search2.png";
import arrowRigth from "../../assets/icons/arrowRigth.svg";
import arrowRigthWhite from "../../assets/icons/arrowRigthWhite.svg";
import SearchFlatItem from "../SearchFlatItem/SearchFlatItem";

const searchFatItems = [
  {
    image: search1,
    title: "Начните привлекать клиентов бесплатно!",
    descr: (
      <>
        Пройдя простую регистрацию на сайте у Вас появится личный кабинет, в
        котором возможно <strong>бесплатно создавать и публиковать</strong>{" "}
        объявления на сайте.
      </>
    ),
    button_text: "+ Разместить объявление",
  },
  {
    image: search2,
    title: "Поднимайте объявления",
    descr: (
      <>
        Вы в любое время можете <strong>поднимать</strong> объявления{" "}
        <strong>вверх первой страницы</strong> каталога, они разместятся сразу
        после платных объявлений до тех пор, пока другой пользователь не
        повторит процедуру.
      </>
    ),
    button_text: "Узнать стоимость услуги",
    button_icon: arrowRigth,
  },
  {
    isGold: true,
    title: "Приоритет Gold",
    descr: (
      <>
        Приоритетное размещение <strong>Gold</strong> позволяет{" "}
        <strong>закрепить ваше объявление</strong> в верхней части каталога!
        <br />
        <br />
        Gold объявления <strong>перемещаются каждые 5 мин</strong> на 1 позицию,
        что делает размещение одинаковым для всех.
      </>
    ),
    button_text: "Еще о тарифе Gold",
    button_icon: arrowRigthWhite,
  },
];

function SearchFlat() {
  return (
    <div className="search">
      <div className="search_bg">
        <img
          src={searchBG}
          alt="background image"
          className="search_bg_image"
        />
        <div className="search_bg_layout"></div>
      </div>
      <div className="container">
        <img src={whiteCircles} alt="circles" className="search_whiteCircles" />
        <div className="search_header">
          <div className="search_header_title">Поиск квартир на карте</div>
          <div className="search_header_descr">
            Ищите квартиры на сутки в центре города,
            <br /> возле парка или в живописном районе.
          </div>
          <button className="search_header_button">
            <img
              src={mapMarker}
              alt="map marker"
              className="search_header_button_icon"
            />
            <div className="search_header_button_text">Открыть карту</div>
          </button>
        </div>
        <div className="search_items">
          {searchFatItems.map((item) => {
            return <SearchFlatItem item={item} />;
          })}
        </div>
        <img
          src={yellowCircles}
          alt="circles"
          className="search_yellowCircles"
        />
      </div>
    </div>
  );
}

export default SearchFlat;
