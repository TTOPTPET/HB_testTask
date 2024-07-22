import {
  Button,
  Input,
  Label,
  Tab,
  TabList,
  TabPanel,
  Tabs,
  TextField,
} from "react-aria-components";
import "../../style/container.scss";
import "./basicFilter.scss";
import settings from "../../assets/icons/settings.svg";
import mapMarkerPurple from "../../assets/icons/mapMarkerPurple.svg";
import arrowRigth from "../../assets/icons/arrowRigth.svg";
import MySelect from "../MySelect/MySelect";

function BasicFilter() {
  return (
    <div className="container">
      <div className="filter_wrapper">
        <div className="filter_bg"></div>
        <div className="filter_title">
          Sdaem.by - у нас живут{" "}
          <span className="filter_title filter_title__yellow">
            ваши объявления
          </span>
        </div>
        <Tabs className="filter_tabs">
          <TabList className="filter_tablist">
            <Tab id="Flats" className="filter_tab">
              Квартиры на сутки
            </Tab>
            <Tab id="House" className="filter_tab">
              Коттеджи и усадьбы
            </Tab>
            <Tab id="Sauna" className="filter_tab">
              Бани и сауны
            </Tab>
            <Tab id="Auto" className="filter_tab">
              Авто напрокат
            </Tab>
          </TabList>
          <TabPanel id="Flats" className="filter_tabpanel">
            <MySelect
              title="Город"
              listItems={["Минск", "Город 2", "Город 3", "Город 4", "Город 5"]}
            />

            <div className="filter_line"></div>

            <MySelect title="Комнаты" listItems={["1", "2", "3"]} />

            <div className="filter_line"></div>

            <TextField type="text" className="filter_textfield">
              <Label className="filter_label">Цена за сутки (BYN)</Label>
              <div className="filter_inputWrapper">
                <Input className="filter_input" placeholder="От" />
                <div className="filter_inputLine"></div>
                <Input className="filter_input" placeholder="До" />
              </div>
            </TextField>

            <div className="filter_line"></div>

            <div className="filter_textButton">
              <div className="filter_textButton_text">Больше опций</div>
              <img
                src={settings}
                alt="settings"
                className="filter_textButton_icon"
              />
            </div>

            <div className="filter_line"></div>

            <div className="filter_textButton filter_textButton__map">
              <div className="filter_textButton_text">На карте</div>
              <img
                src={mapMarkerPurple}
                alt="map marker"
                className="filter_textButton_icon"
              />
            </div>

            <Button className="filter_button">
              <div className="filter_button_text">Показать</div>
              <img
                src={arrowRigth}
                alt="arrow"
                className="filter_button_icon"
              />
            </Button>
          </TabPanel>
          <TabPanel id="House" className="filter_tabpanel">
            Панель 2
          </TabPanel>
          <TabPanel id="Sauna" className="filter_tabpanel">
            Панель 3
          </TabPanel>
          <TabPanel id="Auto" className="filter_tabpanel">
            Панель 4
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default BasicFilter;
