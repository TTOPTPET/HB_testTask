import {
  Button,
  Label,
  ListBox,
  ListBoxItem,
  Popover,
  Select,
  SelectValue,
} from "react-aria-components";
import arrowDown from "../../assets/icons/arrowDown.svg";
import "./mySelect.scss";

interface IMySelectProps {
  title?: string;
  placeholder?: string;
  listItems: string[];
  icon?: string;
  wide?: boolean;
  shadow?: boolean;
}

function MySelect({
  title,
  listItems,
  icon,
  wide,
  placeholder = "Выберите",
}: IMySelectProps) {
  return (
    <Select placeholder={placeholder} className="select">
      {title && <Label className="select_label">{title}</Label>}
      <Button
        className={wide ? "select_button select_button__wide" : "select_button"}
      >
        {icon ? (
          <div className="select_withIcon">
            <img src={icon} alt="arrow" className="select_icon" />
            <SelectValue className="select_value" />
          </div>
        ) : (
          <SelectValue className="select_value" />
        )}
        <div>
          <img src={arrowDown} alt="arrow" />
        </div>
      </Button>
      <Popover className="select_popover">
        <ListBox className="select_listBox">
          {listItems.map((item) => {
            return (
              <ListBoxItem className="select_listBoxItem">{item}</ListBoxItem>
            );
          })}
        </ListBox>
      </Popover>
    </Select>
  );
}

export default MySelect;
