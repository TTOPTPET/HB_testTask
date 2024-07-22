import "./produtsList.scss";
import arrowDownYellow from "../../assets/icons/arrowDownYellow.svg";

type ListItems = {
  title: string;
  count: number;
};

interface IProdutsListProps {
  title: string;
  more: boolean;
  itemsWithCount?: ListItems[];
  items?: string[];
}

function ProdutsList({
  title,
  more,
  itemsWithCount,
  items,
}: IProdutsListProps) {
  return (
    <div className="productList_wrapper">
      <div className="productList_title">{title}</div>
      {itemsWithCount ? (
        <div className="productList_itemsWithCount_wrapper">
          {itemsWithCount?.map((item) => {
            return (
              <div className="productList_itemsWithCount_item">
                <div className="productList_itemsWithCount_item_text">
                  {item.title}
                </div>
                <div className="productList_itemsWithCount_item_count">
                  {item.count}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="productList_item">
          {items?.map((item) => {
            return <div className="productList_item_text">{item}</div>;
          })}
        </div>
      )}
      {more && (
        <div className="productList_moreButton">
          <div className="productList_moreButton_text">Ещё</div>
          <img
            src={arrowDownYellow}
            alt="arrow"
            className="productList_moreButton_icon"
          />
        </div>
      )}
    </div>
  );
}

export default ProdutsList;
