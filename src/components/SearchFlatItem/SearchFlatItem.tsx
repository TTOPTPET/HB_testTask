import "./searchFlatItem.scss";
import goldBG from "../../assets/goldBg.png";

interface ISearchFlatItem {
  image?: string;
  title: string;
  descr: JSX.Element;
  isGold?: boolean;
  button_text: string;
  button_icon?: string;
}

type SearchFlatItemProps = {
  item: ISearchFlatItem;
};

function SearchFlatItem({ item }: SearchFlatItemProps) {
  const { button_icon, button_text, descr, isGold, image, title } = item;
  return (
    <div
      className={
        isGold ? "searchFlatItem searchFlatItem__gold" : "searchFlatItem"
      }
    >
      {isGold && (
        <img src={goldBG} alt="background" className="searchFlatItem_goldBG" />
      )}
      {isGold ? (
        <div className="searchFlatItem_title">{title}</div>
      ) : (
        <div className="searchFlatItem_imageTitle">
          <div className="searchFlatItem_imageTitle_wrapper">
            <img
              src={image}
              alt="title image"
              className="searchFlatItem_imageTitle_image"
            />
          </div>
          <div className="searchFlatItem_imageTitle_text">{title}</div>
        </div>
      )}
      <div className="searchFlatItem_descr">{descr}</div>
      <button
        className={
          isGold
            ? "searchFlatItem_button searchFlatItem_button__gold"
            : "searchFlatItem_button"
        }
      >
        {!button_icon ? (
          <div className="searchFlatItem_button_text">{button_text}</div>
        ) : (
          <>
            <div className="searchFlatItem_button_text">{button_text}</div>
            <img
              src={button_icon}
              alt="button icon"
              className="searchFlatItem_button_icon"
            />
          </>
        )}
      </button>
    </div>
  );
}

export default SearchFlatItem;
