import Card from "./Card";

function NewArrivals() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 pl-9 gap-4">
      <div className="col-span-1">
        <Card
          imagePath="./Product8.png"
          name="Broadleaf Lady Palm"
          price="$59.00"
        />
      </div>
      <div className="col-span-1">
        <Card
          imagePath="./Product9.png"
          name="Chinese Evergreen"
          price="$39.00"
        />
      </div>
      <div className="col-span-1">
        <Card
          imagePath="./Product7.png"
          name="Bird's Nest Fern"
          price="$99.00"
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

export default NewArrivals;
