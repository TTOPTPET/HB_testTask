import "./flatItem.scss";
import userIcon from "../../assets/icons/user.svg";
import adressIcon from "../../assets/icons/adressIcon.svg";
import metroIcon from "../../assets/icons/metro.svg";
import areaIcon from "../../assets/icons/ellipseIcon.svg";
import phoneIcon from "../../assets/icons/phoneIcon.svg";
import mailIcon from "../../assets/icons/mailIcon.svg";
import viberIcon from "../../assets/icons/viberIcon.svg";
import whatsappIcon from "../../assets/icons/whatsappIcon.svg";
import { Button, DialogTrigger, Popover } from "react-aria-components";

interface IFlatItem {
  image: string;
  price: number;
  people: string;
  rooms: number;
  square: number;
  adress: string;
  metro: string;
  area: string;
  descr: string;
  avatar: string;
  name: string;
  phone: string;
  mail: string;
}

type FlatItemProps = {
  item: IFlatItem;
};

function FlatItem({ item }: FlatItemProps) {
  const {
    image,
    price,
    people,
    rooms,
    square,
    adress,
    area,
    descr,
    metro,
    avatar,
    mail,
    name,
    phone,
  } = item;
  return (
    <div className="flatItem_wrapper">
      <div className="flatItem_status">Gold</div>
      <div className="flatItem_image_wrapper">
        <img src={image} alt="image" className="flatItem_image" />
      </div>
      <div className="flatItem_content_wrapper">
        <div className="flatItem_header">
          <div className="flatItem_price">
            <div className="flatItem_price_amount">{price.toFixed(2)} BYN</div>
            <div className="flatItem_price_descr">за сутки</div>
          </div>
          <div className="flatItem_info">
            <div className="flatItem_info_item_wrapper">
              <img
                src={userIcon}
                alt="people"
                className="flatItem_info_item_icon"
              />
              <div className="flatItem_info_item_text">{people}</div>
            </div>
            <div className="flatItem_info_item_wrapper">
              <div className="flatItem_info_item_text">{rooms} комн.</div>
            </div>
            <div className="flatItem_info_item_wrapper">
              <div className="flatItem_info_item_text">
                {square} м
                <sup className="flatItem_info_item_text_square">2</sup>
              </div>
            </div>
          </div>
        </div>
        <div className="flatItem_main">
          <div className="flatItem_main_adressInfo_wrapper">
            <img
              src={adressIcon}
              alt="adress"
              className="flatItem_main_adressInfo_icon"
            />
            <div className="flatItem_main_adressInfo_text">{adress}</div>
          </div>
          <div className="flatItem_main_adressInfo_wrapper flatItem_main_adressInfo_wrapper_metro">
            <img
              src={metroIcon}
              alt="metro"
              className="flatItem_main_adressInfo_icon"
            />
            <div className="flatItem_main_adressInfo_text">{metro}</div>
          </div>
          <div className="flatItem_main_adressInfo_wrapper flatItem_main_adressInfo_wrapper_area">
            <img
              src={areaIcon}
              alt="metro"
              className="flatItem_main_adressInfo_icon"
            />
            <div className="flatItem_main_adressInfo_text">{area}</div>
          </div>
        </div>
        <div className="flatItem_descr_wrapper">
          <div className="flatItem_descr_text">{descr}</div>
        </div>
        <div className="flatItem_line"></div>
        <div className="flatItem_buttons_wrapper">
          <DialogTrigger>
            <div className="flatItem_contact_wrapper">
              <Button className="flatItem_contact_button">
                <img
                  src={phoneIcon}
                  alt="map marker"
                  className="flatItem_contact_icon"
                />
                <div className="flatItem_contact_text">Контакты</div>
              </Button>
            </div>
            <Popover className="flatItem_contact_popover">
              <img
                src={avatar}
                alt="avatar"
                className="flatItem_contact_popover_avatar_image"
              />
              <div className="flatItem_contact_popover_owner">Владелец</div>
              <div className="flatItem_contact_popover_name">{name}</div>
              <div className="flatItem_contact_popover_phone">{phone}</div>
              <a href="#" className="flatItem_contact_popover_mail">
                {mail}
              </a>
              <div className="flatItem_contact_popover_links_wrapper">
                <div className="flatItem_contact_popover_links_item flatItem_contact_popover_links_item_viber">
                  <img
                    src={viberIcon}
                    alt="viber"
                    className="flatItem_contact_popover_links_item_image"
                  />
                </div>
                <div className="flatItem_contact_popover_links_item flatItem_contact_popover_links_item_whatsapp">
                  <img
                    src={whatsappIcon}
                    alt="whatsapp"
                    className="flatItem_contact_popover_links_item_image"
                  />
                </div>
                <div className="flatItem_contact_popover_links_item flatItem_contact_popover_links_item_mail">
                  <img
                    src={mailIcon}
                    alt="mail"
                    className="flatItem_contact_popover_links_item_image"
                  />
                </div>
              </div>
            </Popover>
          </DialogTrigger>
          <div className="flatItem_more">Подробнее</div>
        </div>
      </div>
    </div>
  );
}

export default FlatItem;
