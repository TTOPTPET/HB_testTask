import aboutImage from "../../assets/aboutImage.png";
import arrowRightPurple from "../../assets/icons/arrowRightPurple.svg";
import yellowCircles from "../../assets/yellowCircles.svg";

import "./about.scss";

function About() {
  return (
    <div className="container">
      <div className="about">
        <div className="about_info">
          <div className="about_info_title">что такое sdaem.by</div>
          <div className="about_info_subtitle">Квартира на сутки в Минске</div>
          <div className="about_info_wrapper">
            <div className="about_info_photo">
              <img
                src={aboutImage}
                alt="flat image"
                className="about_info_photo_image"
              />
              <img
                src={yellowCircles}
                alt="circles"
                className="about_info_photo_circles"
              />
            </div>
            <div className="about_info_text">
              <div className="about_info_text__bold">
                Нужна квартира на сутки в Минске?
              </div>{" "}
              <br />
              На веб-сайте sdaem.by вас ждет масса выгодных предложений. Каталог
              насчитывает{" "}
              <div className="about_info_text__bold">
                более 500 квартир.
              </div>{" "}
              Благодаря удобной навигации вы быстро найдете подходящий вариант.
              <br />
              <br />В каталоге представлены комфортабельные однокомнатные
              квартиры на сутки и квартиры с большим количеством комнат в разных
              районах города, с различной степенью удобства от дешевых до VIP с
              джакузи.
            </div>
          </div>
          <div className="about_info_footer">
            <div className="about_info_text">
              Чтобы снять квартиру на сутки в Минске, вам достаточно
              определиться с выбором и связаться с владельцем для уточнения
              условий аренды и заключить договор. Заметим, на сайте представлены
              исключительно квартиры на сутки без посредников, что избавляет
              посетителей от необходимости взаимодействовать с агентствами,
              тратя свое время и деньги. Также пользователи сайта могут
              совершенно бесплатно размещать объявления о готовности сдать
              квартиру на сутки.
            </div>
          </div>
        </div>
        <div className="about_news">
          <div className="about_news_title">Новости</div>
          <div className="about_news_items">
            <div className="about_news_item">
              <div className="about_news_item_title">
                Линия Сталина: суровый отдых в усадьбах на сутки
              </div>
              <div className="about_news_item_date">14 Январь</div>
            </div>
            <div className="about_news_line"></div>
            <div className="about_news_item">
              <div className="about_news_item_title">
                Аренда квартиры посуточно
              </div>
              <div className="about_news_item_date">14 Январь</div>
            </div>
            <div className="about_news_line"></div>
            <div className="about_news_item">
              <div className="about_news_item_title">
                Дворцово-парковый комплекс Чапских
              </div>
              <div className="about_news_item_date">14 Январь</div>
            </div>
            <div className="about_news_line"></div>
            <div className="about_news_item">
              <div className="about_news_item_title">
                Дворцово-парковый комплекс Чапских
              </div>
              <div className="about_news_item_date">14 Январь</div>
            </div>
            <div className="about_news_line"></div>
            <div className="about_news_item">
              <div className="about_news_item_title">
                Дворцово-парковый комплекс Чапских
              </div>
              <div className="about_news_item_date">14 Январь</div>
            </div>
          </div>
          <div className="about_news_button">
            <div className="about_news_button_text">Посмотреть все</div>
            <img
              src={arrowRightPurple}
              alt="arrow"
              className="about_news_button_icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
