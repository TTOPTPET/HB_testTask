import mapMarker from "../../assets/icons/mapMarker.svg";
import mapMarkerYellow from "../../assets/icons/mapMarkerYellow.svg";
import heart from "../../assets/icons/heart.png";
import logo from "../../assets/logo.svg";
import "../../style/container.scss";
import "./header.scss";
import {
  Button,
  Dialog,
  DialogTrigger,
  Popover,
  Switch,
} from "react-aria-components";

function Header() {
  return (
    <>
      <div className="greyHeader_wrapper">
        <div className="container">
          <div className="greyHeader_items">
            <div className="greyHeader_links">
              <div className="greyHeader_link">Главная</div>
              <div className="greyHeader_link">Новости</div>
              <div className="greyHeader_link">Размещение и тарифы</div>
              <div className="greyHeader_link__withIcon">
                <img
                  src={mapMarker}
                  alt="map marker"
                  className="greyHeader_link__icon"
                />
                <div className="greyHeader_link">Объявления на карте</div>
              </div>
              <div className="greyHeader_link">Контакты</div>
            </div>
            <div className="greyHeader_buttons">
              <div className="greyHeader_bookmark">
                <div className="greyHeader_link greyHeader_link__regular">
                  Закладки
                </div>
                <img
                  src={heart}
                  alt="heart"
                  className="greyHeader_link__icon"
                />
              </div>
              <div className="greyHeader_singIn">Вход и регистрация</div>
            </div>
          </div>
        </div>
      </div>
      <div className="whiteHeader_wrapper">
        <div className="container">
          <div className="whiteHeader_items">
            <div className="whiteHeader_logo">
              <img src={logo} alt="logo" />
            </div>

            <div className="whiteHeader_tabs">
              <DialogTrigger>
                <div className="whiteHeader_tabWrapper">
                  <Button className="whiteHeader_tab">
                    <div className="whiteHeader_tabText">Квартиры на сутки</div>
                    <img
                      src={mapMarkerYellow}
                      alt="map marker"
                      className="whiteHeader_icon"
                    />
                  </Button>
                </div>
                <Popover
                  offset={20}
                  crossOffset={40}
                  className="whiteHeader_popover"
                >
                  <Dialog className="whiteHeader_dialog">
                    <div className="whiteHeader_menu">
                      <Switch className="whiteHeader_menuItem">
                        <div>Квартиры на сутки в Минске</div>
                      </Switch>
                      <Switch className="whiteHeader_menuItem">
                        <div>Квартиры на сутки в Гомеле</div>
                      </Switch>
                      <Switch className="whiteHeader_menuItem">
                        <div>Квартиры на сутки в Бресте</div>
                      </Switch>
                      <Switch className="whiteHeader_menuItem">
                        <div>Квартиры на сутки в Витебске</div>
                      </Switch>
                      <Switch className="whiteHeader_menuItem">
                        <div>Квартиры на сутки в Гродно</div>
                      </Switch>
                      <Switch className="whiteHeader_menuItem">
                        <div>Квартиры на сутки в Могилеве</div>
                      </Switch>
                    </div>
                  </Dialog>
                </Popover>
              </DialogTrigger>

              <DialogTrigger>
                <div className="whiteHeader_tabWrapper">
                  <Button className="whiteHeader_tab">
                    <div className="whiteHeader_tabText">
                      Коттеджи и усадьбы
                    </div>
                  </Button>
                </div>
                <Popover>
                  <Dialog></Dialog>
                </Popover>
              </DialogTrigger>

              <DialogTrigger>
                <div className="whiteHeader_tabWrapper">
                  <Button className="whiteHeader_tab">
                    <div className="whiteHeader_tabText">Бани и Сауны</div>
                  </Button>
                </div>
                <Popover>
                  <Dialog></Dialog>
                </Popover>
              </DialogTrigger>

              <DialogTrigger>
                <div className="whiteHeader_tabWrapper">
                  <Button className="whiteHeader_tab">
                    <div className="whiteHeader_tabText">Авто напрокат</div>
                  </Button>
                </div>
                <Popover>
                  <Dialog></Dialog>
                </Popover>
              </DialogTrigger>
            </div>
            <Button className="whiteHeader_button">
              <div className="whiteHeader_button__plus">+</div>
              <div className="whiteHeader_button__text">
                Разместить объявление
              </div>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
