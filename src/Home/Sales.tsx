import Card from "./Card";

function Sales() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 pl-9 gap-4">
      <div className="col-span-1 pt-4 md:pt-0">
        <Card
          imagePath="./Product2.png"
          name="Angel Wing Begonia"
          price="$169.00"
        />
      </div>
      <div className="col-span-1">
        <Card
          imagePath="./Product5.png"
          name="Blushing Bromeliad"
          price="$139.00"
        />
      </div>

      <div className="col-span-1 pt-4 md:pt-0">
        <Card
          imagePath="./Product6.png"
          name="Aluminum Plant"
          price="$179.00"
        />
      </div>
    </div>
  );
}

export default Sales;
