
import "../../Views/Styles/Catalog.css";
import addcart from "../../Assets/svg/addcart.svg";
import { Link } from "react-router-dom";

export function ButtonPersonalizer({route, id}) {
    console.log()
  return (
    <div>
      <Link className='link' to={route} onClick={() => console.log(id)}>
        <button className="personalizer_products">
          <p>Personalizar</p> <img src={addcart} alt="" width="30px" />
        </button>
      </Link>
    </div>
  );
}
