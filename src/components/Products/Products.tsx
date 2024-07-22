import ProductItem from "../ProductItem/ProductItem";
import car from "../../assets/car.png";
import flat from "../../assets/flat.png";
import sauna from "../../assets/sauna.png";
import house from "../../assets/house.png";
import yellowCircles from "../../assets/yellowCircles.svg";

import "./products.scss";
import ProdutsList from "../ProdutsList/ProdutsList";

const products = [
  {
    title: "снять квартиру",
    subtitle: "Квартиры на сутки",
    cities: ["Минск", "Витебск", "Гродно", "Гомель", "Брест", "Могилев"],
    wide: true,
    image: flat,
    id: 1,
  },
  {
    title: "снять коттедж на праздник",
    subtitle: "Коттеджи и усадьбы",
    wide: false,
    image: house,
    id: 2,
  },
  {
    title: "попариться в бане с друзьями",
    subtitle: "Бани и сауны",
    wide: false,
    image: sauna,
    id: 3,
  },
  {
    title: "если срочно нужна машина",
    subtitle: "Авто на прокат",
    wide: true,
    image: car,
    id: 4,
  },
];

const productsList = [
  {
    title: "Квартиры",
    more: false,
    itemsWithCount: [
      { title: "Квартиры в Минске", count: 3567 },
      { title: "Квартиры в Гомеле", count: 2032 },
      { title: "Квартиры в Гродно", count: 2303 },
      { title: "Квартиры в Могилеве", count: 110 },
      { title: "Квартиры в Бресте", count: 110 },
      { title: "Квартиры в Витебске", count: 110 },
    ],
    id: 1,
  },
  {
    title: "Коттеджи и усадьбы",
    more: true,
    itemsWithCount: [
      { title: "Аггроусадьбы", count: 110 },
      { title: "Коттеджи", count: 110 },
      { title: "Загородный комплекс", count: 110 },
      { title: "Базы отдыха", count: 110 },
    ],
    id: 2,
  },
  {
    title: "Популярные направления",
    more: false,
    items: [
      "Коттеджи и усадьбы на о. Брасласких ",
      "Коттеджи и усадьбы (жилье) на Нарочи",
      "Коттеджи и усадьбы (жилье) у воды, на берегу, на озере",
    ],
    id: 3,
  },
];

function Products() {
  return (
    <div className="products">
      <div className="container">
        <div className="products_wrapper">
          <div className="products_items_wrapper">
            {products.map((item) => {
              return (
                <ProductItem
                  key={item.id}
                  title={item.title}
                  subtitle={item.subtitle}
                  wide={item.wide}
                  cities={item.cities || undefined}
                  image={item.image}
                />
              );
            })}
          </div>
          <div className="products_list_wrapper">
            {productsList.map((item) => {
              return (
                <ProdutsList
                  key={item.id}
                  title={item.title}
                  more={item.more}
                  items={item.items || undefined}
                  itemsWithCount={item.itemsWithCount || undefined}
                />
              );
            })}
          </div>
        </div>
      </div>
      <img src={yellowCircles} alt="circles" className="products_circles" />
    </div>
  );
}

export default Products;
