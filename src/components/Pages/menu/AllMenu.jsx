import img1 from "../../../assets/gallery/img1.png";
import img2 from "../../../assets/gallery/img2.png";
import img3 from "../../../assets/gallery/img3.png";
import img4 from "../../../assets/gallery/img4.png";
import img5 from "../../../assets/gallery/img5.png";
import img6 from "../../../assets/gallery/img6.png";
import img7 from "../../../assets/gallery/img7.png";
import img8 from "../../../assets/gallery/img8.png";
import img9 from "../../../assets/gallery/img9.png";

const AllMenu = () => {
  return (
    <section className="px-5 pb-5">
      {" "}
      <h1 className="py-8 uppercase text-3xl font-bold">Our Menu</h1>
      <div className="">
        <div className="grid grid-cols-3 gap-5">
          <div className="card bg-[#DAA640] w-96 h-72">
            <figure>
              <img src={img1} alt="burger" />
            </figure>
            <div className="card-body">
              <div className="card-actions justify-start">
                <h1 className="text-xl font-bold">Burger and Fries</h1>
              </div>
            </div>
          </div>
          <div className="card bg-[#DAA640]  w-96 h-72 ">
            <figure>
              <img src={img2} alt="Shoes" />
            </figure>
            <div className="card-body">
              <div className="card-actions justify-start">
                <h1 className="text-xl font-bold">Burger and Fried Chicken</h1>
              </div>
            </div>
          </div>
          <div className="card bg-[#DAA640]  w-full h-full ">
            <figure>
              <img src={img3} alt="milk" />
            </figure>
            <div className="card-body">
              <div className="card-actions justify-start">
                <h1 className="text-xl font-bold">Vegan Milk Shake</h1>
              </div>
            </div>
          </div>
          <div className="card bg-[#DAA640] w-56 h-80 -mt-44">
            <figure>
              <img src={img4} alt="tahini" />
            </figure>
            <div className="card-body">
              <div className="card-actions justify-start">
                <h1 className="text-xl font-bold">Spicy Tahini</h1>
              </div>
            </div>
          </div>
          <div className="card bg-[#DAA640] w-72 h-80 -ml-40 -mt-44">
            <figure>
              <img src={img7} alt="" />
            </figure>
            <div className="card-body">
              <div className="card-actions justify-start">
                <h1 className="text-xl font-bold">Falfal Pitha</h1>
              </div>
            </div>
          </div>
          <div className="card bg-[#DAA640] w-56 h-80 -ml-64 -mt-44">
            <figure>
              <img src={img6} alt="" />
            </figure>
            <div className="card-body">
              <div className="card-actions justify-start">
                <h1 className="text-xl font-bold mt-16">Twister Chicken</h1>
              </div>
            </div>
          </div>
          <div className="card bg-[#DAA640] h-72 w-96">
            <figure>
              <img src={img8} alt="" />
            </figure>
            <div className="card-body">
              <div className="card-actions justify-start">
                <h1 className="text-xl font-bold">Burger and Wings</h1>
              </div>
            </div>
          </div>
          <div className="card bg-[#DAA640] h-72 w-96">
            <figure>
              <img src={img9} alt="" />
            </figure>
            <div className="card-body">
              <div className="card-actions justify-start">
                <h1 className="text-xl font-bold">Pizza</h1>
              </div>
            </div>
          </div>
          <div className="card bg-[#DAA640] h-[448px] w-[390px] -mt-40">
            <figure>
              <img src={img5} alt="" />
            </figure>
            <div className="card-body">
              <div className="card-actions justify-start">
                <h1 className="text-xl font-bold">Burger Combo</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-5">
        <button className="btn bg-[#DAA640] border-[#DAA640] font-bold">
          See All Menu
        </button>
      </div>
    </section>
  );
};

export default AllMenu;
