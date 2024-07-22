import "./footer.scss";
import logo from "../../assets/logo.svg";
import inst from "../../assets/icons/inst.svg";
import vk from "../../assets/icons/vk.svg";
import facebook from "../../assets/icons/facebook.svg";
import visa from "../../assets/icons/visa.svg";
import webpay from "../../assets/icons/webpay.svg";
import verifiedVisa from "../../assets/icons/verifiedVisa.svg";
import mastercard from "../../assets/icons/mastercard.svg";
import securecode from "../../assets/icons/securecode.svg";
import belcart from "../../assets/icons/belcart.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_wrapper">
          <div className="footer_owner">
            <div className="footer_owner_logo">
              <img src={logo} alt="" className="footer_owner_logo_image" />
              <div className="footer_owner_logo_text">сдаём бай</div>
            </div>
            <div className="footer_owner_info">
              ИП Шушкевич Андрей Викторович
              <br /> УНП 192602485 Минским горисполкомом
              <br /> 10.02.2016
              <br /> 220068, РБ, г. Минск, ул. Осипенко, 21, кв.23
              <br /> +375 29 621 48 33, sdaem@sdaem.by
              <br /> Режим работы: 08:00-22:00
            </div>
          </div>
          <div className="footer_info">
            <div className="footer_info_main">
              <div className="footer_info_main_category">
                <div className="footer_info_main_category_text">
                  Коттеджи и усадьбы
                </div>
                <div className="footer_info_main_category_text">
                  Бани и сауны
                </div>
                <div className="footer_info_main_category_text">
                  Авто на прокат
                </div>
              </div>
              <div className="footer_info_main_flat">
                <div className="footer_info_main_flat_title">Квартиры</div>
                <div className="footer_info_main_flat_items">
                  <div className="footer_info_main_flat_items_wrapper">
                    <div className="footer_info_main_flat_item">
                      Квартиры в Минске
                    </div>
                    <div className="footer_info_main_flat_item">
                      Квартиры в Гомеле
                    </div>
                    <div className="footer_info_main_flat_item">
                      Квартиры в Бресте
                    </div>
                  </div>
                  <div className="footer_info_main_flat_items_wrapper">
                    <div className="footer_info_main_flat_item">
                      Квартиры в Витебске
                    </div>
                    <div className="footer_info_main_flat_item">
                      Квартиры в Гродно
                    </div>
                    <div className="footer_info_main_flat_item">
                      Квартиры в Могилеве
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer_info_main_link">
                <div className="footer_info_main_link_item">Новости</div>
                <div className="footer_info_main_link_item">
                  Размещения и тарифы
                </div>
                <div className="footer_info_main_link_item">
                  Объявления на карте
                </div>
                <div className="footer_info_main_link_item">Контакты</div>
              </div>
            </div>
            <div className="footer_info_links">
              <div className="footer_info_links_social">
                <div className="footer_info_links_social_title">
                  Мы в соцсетях
                </div>
                <div className="footer_info_links_social_icons">
                  <img
                    src={inst}
                    alt="instagram"
                    className="footer_info_links_social_icons_item"
                  />
                  <img
                    src={vk}
                    alt="vk"
                    className="footer_info_links_social_icons_item"
                  />
                  <img
                    src={facebook}
                    alt="facebook"
                    className="footer_info_links_social_icons_item"
                  />
                </div>
              </div>
              <div className="footer_info_links_credit">
                <img
                  src={visa}
                  alt="visa"
                  className="footer_info_links_credit_item"
                />
                <img
                  src={webpay}
                  alt="webpay"
                  className="footer_info_links_credit_item"
                />
                <img
                  src={verifiedVisa}
                  alt="verified by visa"
                  className="footer_info_links_credit_item"
                />
                <img
                  src={mastercard}
                  alt="mastercard"
                  className="footer_info_links_credit_item"
                />
                <img
                  src={securecode}
                  alt="secure code"
                  className="footer_info_links_credit_item"
                />
                <img
                  src={belcart}
                  alt="belcart"
                  className="footer_info_links_credit_item"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
