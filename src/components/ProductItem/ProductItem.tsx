import arrowRigthWhite from "../../assets/icons/arrowRigthWhite.svg";

import "./productItem.scss";

interface IProductItemProps {
  title: string;
  subtitle: string;
  wide: boolean;
  image: string;
  cities?: string[];
}

function ProductItem({
  title,
  subtitle,
  cities,
  wide,
  image,
}: IProductItemProps) {
  return (
    <div
      className={
        wide
          ? "productItem_wrapper productItem_wrapper__wide"
          : "productItem_wrapper"
      }
    >
      <img src={image} alt="image" className="productItem_bg" />
      <div className="productItem_layout"></div>
      <div className="productItem_title">{title}</div>
      <div className="productItem_subtitle">{subtitle}</div>
      {cities ? (
        <div className="productItem_cities_wrapper">
          {cities.map((item) => {
            return <div className="productItem_cities_item">{item}</div>;
          })}
        </div>
      ) : (
        <div className="productItem_button">
          <img
            src={arrowRigthWhite}
            alt="arrow"
            className="productItem_button_icon"
          />
        </div>
      )}
    </div>
  );
}

export default ProductItem;
