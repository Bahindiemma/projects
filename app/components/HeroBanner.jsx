import Slider from "../Slider";
import Carousel from "./Carousel";

export default function HeroBanner() {
  const images = [
    "https://images.unsplash.com/photo-1516655855035-d5215bcb5604?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
    "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60"
  ];

  return (
    <section className="h-[60vh] w-full bg-green-900 grid grid-cols-2 gap-6">
      <div className="grid grid-cols-1 gap-0 h-[48vh] w-[90%] mx-auto my-auto">
        <h1 className="text-justify text-6xl text-white">
          Did you know?
        </h1>
        <p className="text-2xl text-justify leading-lg text-white">
          On average, male lions weigh 190kg and females weigh 126kg. They need this weight and power behind them to hunt large prey and defend their pride.
        </p>
        <div className="text-justify text-base text-white">
          Book a visit with us to learn more about animals and plants
        </div>
        <a href="/booking" class="grid place-items-center text-xl text-center font-semibold leading-6 text-white bg-green-900 border-2 border-white w-[25%] px-4 rounded">
          Book Now
        </a>
      </div>
      <div className="h-[48vh] w-[90%] mx-auto my-auto rounded-lg bg-white">
        <Carousel />
      </div>
    </section>
  );
}
