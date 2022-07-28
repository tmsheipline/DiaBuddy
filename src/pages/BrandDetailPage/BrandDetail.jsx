import { useParams } from "react-router-dom";

export default function BrandDetailPage({ brands }) {
    let { brandName } = useParams();
  
    let brand = brands.find((brd) => brd.name === brandName);
  
    return (
      <div className="">
        <div>
          <h1 className="Movie-Detail">{brand.name}</h1>
          <img src={`${brand.image}`} alt="" />
        </div>
      </div>
    );
  }