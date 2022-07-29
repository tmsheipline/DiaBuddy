export default function FoodInfo({ item }) {
//   console.log(item);
  return (
    <>
      <div className="foodinfo">
        <span><img src={item.photo}alt="" /></span>
        <br />
        <span className="foodname">{item.tag_name} </span>
        <br />
        <span className="servinginfo">Serving Size: {item.serving_unit}</span>
        <br />
        <span className="carbinfo">Carbrohydrates: {item.carbs}</span>
        <hr />
      </div>
        <form action="">
          <input type="checkbox" />
          Add to meal
        </form>
    </>
  );
}
