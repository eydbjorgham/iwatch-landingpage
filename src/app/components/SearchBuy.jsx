import { CiSearch } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";

const SearchBuy = () => {
  return (
    <div className="searchbuy-icons">
      <CiSearch size={30} color={"white"} />
      <div className="vertical-line"></div>
      <FiShoppingBag size={30} color={"white"} />
    </div>
  );
};

export default SearchBuy;
