import "../../Views/Styles/Catalog.css";
import addcart from "../../Assets/svg/addcart.svg";
import { Link } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";

export function ButtonPersonalizer({ id, route, image, name, price, size, type }) {
  const { info, setInfo } = useProducts();
  let personalize = () => {
    info.image = image
    info.name = name
    info.price = price
    info.size = size
    info.type = type
    info.id = id
    setInfo(info);
  };
  return (
    <div>
      <Link className="link" to={route} onClick={personalize}>
        <button className="personalizer_products">
          <p>Personalizar</p> <img src={addcart} alt="" width="30px" />
        </button>
      </Link>
    </div>
  );
}
