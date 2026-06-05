import React from "react";
import Navlinks from "../Navlinks/Navlinks";
import Footer from "../Components/Footer";

const page = () => {
  const benefits = [
    {
      icon: "https://ocdetailmn.com/wp-content/uploads/2024/02/icon_umbrella.svg",
      title: "Protects from Harmful UV Rays",
      description:
        "The sun's ultraviolet rays can cause paint to oxidize and fade over time. Ceramic coatings protect a vehicle’s paint from the sun’s harsh rays, thereby reducing the risk of oxidization.",
    },
    {
      icon: "https://ocdetailmn.com/wp-content/uploads/2024/02/icon_umbrella.svg",
      title: "Hydrophobic Properties",
      description:
        "One of the most noteworthy features of ceramic coatings is their hydrophobic (water-repellent) quality. This means water beads up and rolls off the surface, picking up dirt and grime along the way.",
    },
    {
      icon: "https://ocdetailmn.com/wp-content/uploads/2024/02/icon_umbrella.svg",
      title: "Chemical Stain Resistance",
      description:
        "Everyday contaminants like acid rain, bird droppings, and tree sap can mar a vehicle’s exterior. Ceramic coatings create a chemically resistant surface, ensuring that contaminants are easily washed away without leaving stains.",
    },
    {
      icon: "https://ocdetailmn.com/wp-content/uploads/2024/02/icon_umbrella.svg",
      title: "Enhanced Durability",
      description:
        "Unlike traditional waxes that need frequent reapplication, ceramic coatings are incredibly durable. They don’t wear off under normal atmospheric conditions, providing protection that lasts for years.",
    },
    {
      icon: "https://ocdetailmn.com/wp-content/uploads/2024/02/icon_umbrella.svg",
      title: "Aesthetic Appeal",
      description:
        "Ceramic coating enhances the depth and clarity of the car’s paint, giving it a constant 'just-washed' glossy finish. This sheen is much coveted by car enthusiasts and everyday drivers alike.",
    },
  ];

  return (
    <div className="w-full min-h-full">
      <Navlinks isComplete={true}/>
      <>
        <div className="bg-black text-white py-16 px-6 md:py-24 flex flex-col items-center text-center ">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 uppercase ">
            Paint Protection Film (PPF)
          </h2>
          <p className=" lg:px-60 text-center text-gray-300">
            Paint Protection Film (PPF) is a virtually invisible, yet incredibly
            durable layer applied to a vehicle's painted surfaces to shield it
            from the daily wear and tear of the road. This thin film acts as a
            sacrificial barrier, absorbing impacts from stone chips, bug
            splatters, minor scratches, and other environmental hazards, thus
            preserving the original factory paint and maintaining the vehicle's
            pristine appearance and resale value for years to come.
          </p>
        </div>

        <div className="bg-black text-white  py-6 px-6 md:px-60">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            {/* Left Text Section */}
            <div className="md:col-span-1 text-sm md:px-6">
              <h1 className="text-sm font-bold mb-2">About Services</h1>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 p-0">
                What Is
                <br />{" "}
                <span className="text-[#00DAFF]">
                  {" "}
                  Paint Protection Film (PPF)?
                </span>
              </h2>
              <p className="text-gray-300 mb-4">
                PPF is typically applied to the most vulnerable, high-impact
                areas of a vehicle, such as the hood, front bumper, fenders,
                side mirrors, rocker panels, and areas around the wheel wells.
              </p>
              <p className="text-gray-300 mb-4">
                However, it can also be applied to the entire vehicle for
                comprehensive protection. While the initial investment in PPF
                might seem significant, it is widely considered a cost-effective
                measure in the long run, as it helps to preserve the vehicle's
                appearance, protect its resale value, and reduce the need for
                expensive paint repairs.
              </p>
              {/* <p className="text-gray-300">
                The technology behind PPF has evolved significantly since its
                initial use by the military to protect helicopter rotor blades,
                resulting in today's highly conformable, optically clear, and
                incredibly durable automotive protection solutions.
              </p> */}
            </div>

            {/* Middle Image Section */}
            <div className="relative">
              <img
                src="https://ocdetailmn.com/wp-content/uploads/2024/02/img-10-min.jpg"
                alt="Ceramic Coating"
                className="rounded-lg"
              />
              <div className="md:absolute md:bottom-[-20px] md:left-[-40px] absolute bottom-[-20px] left-[80px] border-4 border-white rounded-lg">
                <img
                  src="https://ocdetailmn.com/wp-content/uploads/2024/02/img-11.jpg"
                  alt="Detailing"
                  className="w-32 md:w-40 rounded-lg"
                />
              </div>
            </div>

            {/* Right Text Section */}
            <div className="md:col-span-1">
              <div className="mb-8 ">
                <h3 className="text-[18px] font-semibold mb-2">
                  Invisible and Durable Protection:
                </h3>
                <p className="text-gray-300 text-xs mb-2">
                  PPF offers a virtually undetectable layer of defense against
                  common road hazards like stone chips and scratches, preserving
                  the vehicle's original paint without altering its appearance.
                </p>
              </div>
              <div className="">
                <img
                  src="https://ocdetailmn.com/wp-content/uploads/2024/02/men_bmw-min.jpg"
                  className="rounded my-4"
                  alt=""
                />
              </div>
              <div>
                <h3 className="text-[18px] font-semibold mb-2">
                  Preserves Value and Appearance:{" "}
                </h3>
                <p className="text-gray-300 text-xs">
                  By safeguarding the paint from damage, PPF helps maintain the
                  vehicle's pristine condition, protecting its resale value and
                  ensuring a consistently flawless aesthetic over time.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black text-white py-16 px-4 md:px-20 0 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Benefits Of<span className="text-[#00daff]"> Ceramic Coating</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8 md:mt-20 md:py-6 py-4">
            {benefits.slice(0, 3).map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img src={benefit.icon} alt="icon" className="w-16 mb-4" />
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                <p className="text-gray-300 mt-2 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8 mt-8 w-3/4 mx-auto">
            {benefits.slice(3).map((benefit, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <img src={benefit.icon} alt="icon" className="w-16 mb-4" />
                <h3 className="text-lg font-semibold">{benefit.title}</h3>
                <p className="text-gray-300 mt-2 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </>
      <Footer/>
    </div>
  );
};

export default page;