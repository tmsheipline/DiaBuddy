import { Link } from "react-router-dom";

export default function BrandCard(props) {
  return (
    <>
      <Link to={`/brands/${props.brand.name}`}>
        <div
          style={{
            background: `url(${props.brand.image}) no-repeat center center`,
            WebkitBackgroundSize: "cover"
          }}
          className="item-card"
        >
          <div className="title">
            <h1>{props.brand.name}</h1>
          </div>
        </div>
      </Link>
    </>
  );
}