import img1 from "../../../assets/menu/burger.png";
import img2 from "../../../assets/menu/sandwich.png";
import img3 from "../../../assets/menu/pizza.png";
import img4 from "../../../assets/menu/bucket.png";

const FoodMenu = () => {
  return (
    <div className="">
      <h1 className="py-8 uppercase text-lg font-bold px-4">Explore Menu</h1>
      <div className="grid grid-cols-4 gap-5 px-20 ml-5">
        <div className="w-60 bg-[#DAA640] rounded-2xl">
          <div className="card-body bg-[#DAA640] rounded-t-2xl items-center">
            <h2 className="card-title text-2xl font-bold uppercase">Burgers</h2>
          </div>
          <figure className=" rounded-b-2xl">
            <img src={img1} className="w-60 rounded-b-2xl" alt="Burger" />
          </figure>
        </div>
        <div className="w-60 bg-[#DAA640] rounded-2xl">
          <div className="card-body bg-[#DAA640] rounded-t-2xl items-center">
            <h2 className="card-title text-2xl font-bold uppercase">
              Sandwiches
            </h2>
          </div>
          <figure className=" rounded-b-2xl">
            <img
              src={img2}
              className="w-60 rounded-b-2xl lg:ml-7"
              alt="Sandwich"
            />
          </figure>
        </div>
        <div className="w-60 bg-[#DAA640] rounded-2xl">
          <div className="card-body bg-[#DAA640] rounded-t-2xl items-center">
            <h2 className="card-title text-2xl font-bold uppercase">Pizza</h2>
          </div>
          <figure className=" rounded-b-2xl">
            <img
              src={img3}
              className="w-60 rounded-b-2xl flex justify-center"
              alt="Pizza"
            />
          </figure>
        </div>
        <div className="w-60 bg-[#DAA640] rounded-2xl">
          <div className="card-body bg-[#DAA640] rounded-t-2xl items-center">
            <h2 className="card-title text-xl font-bold uppercase">
              Chicken Buckets
            </h2>
          </div>
          <figure className=" rounded-b-2xl flex justify-center">
            <img src={img4} className="w-40 h-40 rounded-b-2xl" alt="Bucket" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default FoodMenu;
