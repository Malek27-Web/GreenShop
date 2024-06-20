import Card from "./Card";

function AllPlants() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 pl-9 gap-4">
      <div className="col-span-1">
        <Card
          imagePath="./Product.png"
          name="Barberton Daisy"
          price="$119.00"
        />
      </div>
      <div className="col-span-1 pt-4 md:pt-0">
        <Card
          imagePath="./Product2.png"
          name="Angel Wing Begonia"
          price="$169.00"
        />
      </div>
      <div className="col-span-1">
        <Card
          imagePath="./Product3.png"
          name="African Violet"
          price="$199.00"
        />
      </div>
      <div className="col-span-1 pt-4 md:pt-0">
        <Card
          imagePath="./Product3.png"
          name="Beach Spider Lily"
          price="$129.00"
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
      <div className="col-span-1">
        <Card
          imagePath="./Product7.png"
          name="Bird's Nest Fern"
          price="$99.00"
        />
      </div>
      <div className="col-span-1 pt-4 md:pt-0">
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
    </div>
  );
}

export default AllPlants;
