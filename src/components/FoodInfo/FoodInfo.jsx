export default function FoodInfo({ item }) {
  console.log(item);
  return (
    <>
      <div className="foodinfo">
        <br />
        <span className="foodname">{item.tag_name} </span>
        <br />
        <span className="carbinfo">Carbrohydrates: {item.carbs}</span>
        <br />
        <input type="checkbox" />
        <hr />
        <span>{item.photo}</span>
      </div>
    </>
  );
}
