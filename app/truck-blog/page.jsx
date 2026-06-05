"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faThreads } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Navlinks from "../Navlinks/Navlinks";
import Footer from "../Components/Footer";

const page = () => {
  return (
    <div>
      <Navlinks isComplete={true} />
      <div className=" py-20 w-full h-auto bg-[#0C0D14] flex flex-col items-center justify-center px-4 md:px-6 lg:px-0">
        <div>
          <p className="text-gray-600 poppins text-center text-sm mt-10">
            March 18, 2025 <span>·</span> 3 min read
          </p>
        </div>
        <div className="w-full md:w-[90%] lg:w-[80%] mt-6 md:mt-10">
          <h1 className="text-white bebas leading-[1.2em] md:leading-[1em] text-3xl md:text-4xl lg:text-5xl text-center">
            Unleashing Brilliance and Strength: Why OCDetailMN.com Trusts
            Gtechniq and ROAR Coatings
          </h1>
        </div>
        <div className="mt-8 md:mt-15 w-full md:w-auto">
          <img
            src="https://ocdetailmn.com/wp-content/uploads/2025/03/Facebook2-e1743450032540.jpg"
            alt=""
            className="w-full md:w-auto"
          />
        </div>
        <div className="text-white mt-6 md:mt-10 poppins w-full md:w-[80%] lg:w-[64%] px-4 md:px-0">
          <p className="leading-[1.7em]">
            Imagine your vehicle cutting through the morning mist—whether it's a
            sleek sedan glistening under the sun or a rugged work truck
            shrugging off the elements. At OCDetailMN.com, we believe every ride
            deserves a finish that commands attention and protection that
            endures. That's why we've partnered with two powerhouse names in
            ceramic coatings: Gtechniq for automobiles and ROAR Coatings for
            heavy-duty industrial vehicles. Together, these top-tier products
            deliver unmatched beauty and resilience to our clients. Let's dive
            into why ceramic coatings are a must-have and how Gtechniq and ROAR
            set the gold standard for automotive and industrial excellence.
          </p>
        </div>
        <div className="w-full md:w-[80%] lg:w-216 h-auto mt-10 md:mt-20 px-4 md:px-0">
          <h1 className="text-white bebas text-3xl md:text-4xl">
            The Power of Ceramic Coatings: Beyond a Basic Shine
          </h1>
          <p className="text-white poppins leading-[1.6rem] mt-6 md:mt-8">
            Ceramic coatings aren't your grandpa's wax job. These advanced
            formulas, built from cutting-edge compounds like silicon dioxide
            (SiO2), chemically bond with your vehicle's surface to form a
            near-impenetrable shield. This isn't just a layer—it's a
            transformation. Hydrophobic properties repel water, dirt, and grime,
            while the coating stands tough against UV rays, oxidation, and
            chemical stains. The payoff? A finish that stays vibrant and
            protected for years, not just a season.
          </p>
          <p className="text-white poppins mt-6 md:mt-8 leading-[1.6rem]">
            But it's not all about defense. Ceramic coatings slash maintenance
            time—water beads up and rolls off, taking contaminants with it,
            leaving your vehicle cleaner with less effort. Say goodbye to
            endless scrubbing and frequent reapplications. Whether you're a car
            enthusiast chasing perfection or a fleet owner prioritizing
            durability, ceramic coatings deliver a superpower: effortless upkeep
            paired with jaw-dropping looks.
          </p>
        </div>
        <div className="w-full md:w-[80%] lg:w-216 h-auto mt-10 md:mt-20 px-4 md:px-0">
          <h1 className="text-white bebas text-3xl md:text-4xl">
            Gtechniq: The Pinnacle of Automotive Elegance
          </h1>
          <p className="text-white poppins leading-[1.6rem] mt-6 md:mt-8">
            For your daily driver, weekend cruiser, or prized classic, Gtechniq
            is the name that shines brightest. Known worldwide for its
            professional-grade ceramic coatings, Gtechniq brings a level of
            sophistication and performance that OCDetailMN proudly offers to
            automobile owners. With products like Crystal Serum Ultra, Gtechniq
            creates a glass-like layer that enhances your car's natural gloss,
            delivering a deep, mirror-finish shine that turns heads wherever you
            go.
          </p>
          <p className="text-white poppins mt-6 md:mt-8 leading-[1.6rem]">
            Gtechniq's advanced technology doesn't just beautify—it protects.
            Its industry-leading hardness rating guards against swirl marks,
            scratches, and environmental damage, while its slick, hydrophobic
            surface makes washing a breeze. Minnesota's brutal winters and
            scorching summers? No match for Gtechniq. At OCDetailMN, we choose
            Gtechniq because it's the perfect blend of luxury and
            longevity—keeping your car showroom-ready year after year.
          </p>
        </div>
        <div className="w-full md:w-[80%] lg:w-216 h-auto mt-10 md:mt-20 px-4 md:px-0">
          <h1 className="text-white bebas text-3xl md:text-4xl">
            ROAR Coatings: Built for the Toughest Beasts
          </h1>
          <p className="text-white poppins leading-[1.6rem] mt-6 md:mt-8">
            When it comes to heavy-duty industrial vehicles—think work trucks,
            construction rigs, or off-road warriors—ROAR Coatings steps up to
            the plate. This isn't your average coating; ROAR is engineered for
            the extreme. With a single-layer formula boasting a 30-minute
            working time and a hefty 50% solids content, ROAR cures into a
            thick, unyielding shield that laughs in the face of harsh
            conditions. From gravel-pocked roads to corrosive chemicals, ROAR
            keeps industrial vehicles looking sharp and standing strong.
          </p>
          <p className="text-white poppins mt-6 md:mt-8 leading-[1.6rem]">
            ROAR's durability is matched by its ease of application, making it a
            favorite for OCDetailMN's fleet clients who need fast, reliable
            results. Its hydrophobic power ensures that mud, grease, and grime
            slide right off, minimizing downtime and maximizing productivity.
            When your vehicle works as hard as you do, ROAR Coatings deliver the
            heavy-duty protection it deserves.
          </p>
        </div>
        <div className="w-full md:w-[80%] lg:w-216 h-auto mt-10 md:mt-20 px-4 md:px-0">
          <h1 className="text-white bebas text-3xl md:text-4xl">
            The OCDetailMN Edge: Precision Meets Premium Products
          </h1>
          <p className="text-white poppins leading-[1.6rem] mt-6 md:mt-8">
            At OCDetailMN, we don't just apply coatings—we craft perfection. Our
            team pairs meticulous preparation with the best tools in the trade:
            Gtechniq for your automobiles and ROAR for your industrial beasts.
            We start with a deep clean and surface correction to ensure a
            flawless bond, then apply these elite coatings with expert
            precision. The result? Vehicles that don't just survive—they thrive.
          </p>
          <p className="text-white poppins mt-6 md:mt-8 leading-[1.6rem]">
            Our commitment to excellence means we never settle for less.
            Gtechniq and ROAR Coatings align with our ethos: delivering lasting
            value through superior products. Whether it's shielding your coupe
            from road salt or your dump truck from job-site wear, OCDetailMN has
            the expertise and the coatings to make it happen.
          </p>
        </div>
        <div className="w-full md:w-[80%] lg:w-216 h-auto mt-10 md:mt-20 px-4 md:px-0">
          <h1 className="text-white bebas text-3xl md:text-4xl">
            Why Go Premium with Gtechniq and ROAR Coatings?
          </h1>
          <p className="text-white poppins leading-[1.6rem] mt-6 md:mt-8">
            Investing in ceramic coatings is a no-brainer, and choosing Gtechniq
            and ROAR takes it to the next level. Here's why:
          </p>
          <div>
            <ol className="mt-10">
              <li className="mt-5">
                <p className="poppins text-white">
                  <span className="mr-1">1.</span>
                  <span className="font-bold mr-3">Unrivaled Protection:</span>
                  Gtechniq safeguards your car's paint from scratches and
                  fading, while ROAR defends industrial vehicles against extreme
                  wear and tear.
                </p>
              </li>
              <li>
                <p className="poppins mt-5 text-white">
                  <span className="mr-1">2.</span>
                  <span className="font-bold mr-3">Low-Effort Upkeep:</span>
                  Gtechniq safeguards your car's paint from scratches and
                  fading, while ROAR defends industrial vehicles against extreme
                  wear and tear.
                </p>
              </li>
              <li>
                <p className="poppins mt-5 text-white">
                  <span className="mr-1">3.</span>
                  <span className="font-bold mr-3">
                    Eye-Popping Aesthetics:
                  </span>
                  Gtechniq's wet-look shine elevates your car's beauty; ROAR's
                  tough finish keeps industrial vehicles looking pro.
                </p>
              </li>
              <li>
                <p className="poppins mt-5 text-white">
                  <span className="mr-1">4.</span>
                  <span className="font-bold mr-3">Built to Last:</span> Years
                  of durability mean fewer touch-ups and better resale value,
                  whether it's a sedan or a semi.
                </p>
              </li>
              <li>
                <p className="poppins mt-5 text-white">
                  <span className="mr-1">5.</span>
                  <span className="font-bold mr-3">Confidence on Wheels:</span>
                  Drive or work knowing your vehicle is armed with the
                  best—applied by OCDetailMN's skilled hands.
                </p>
              </li>
            </ol>
          </div>
        </div>
        <div className="w-full md:w-[80%] lg:w-216 h-auto mt-10 md:mt-20 px-4 md:px-0">
          <h1 className="text-white bebas text-3xl md:text-4xl">
            Rev Up with OCDetailMN.com, Gtechniq, and ROAR Coatings
          </h1>
          <p className="text-white poppins leading-[1.6rem] mt-6 md:mt-8">
            Your vehicle—be it a polished automobile or a battle-ready
            workhorse—deserves the ultimate in protection and style. At
            OCDetailMN.com, we're thrilled to bring Gtechniq and ROAR Coatings
            to our clients, tailoring our services to your needs. Gtechniq
            transforms your car into a rolling masterpiece. ROAR turns your
            industrial rig into an unstoppable force. Together, they're the
            dynamic duo your fleet or garage has been waiting for.
          </p>
          <p className="text-white poppins mt-6 md:mt-8 leading-[1.6rem]">
            Ready to unleash the brilliance and strength of Gtechniq and ROAR
            Coatings?
          </p>
          <p className="text-white poppins mt-6 md:mt-8 leading-[1.6rem]">
            Reach out to OCDetailMN.com today. Let's make your vehicle not just
            shine—but roar.
          </p>
          <p className="text-white poppins mt-6 md:mt-8 leading-[1.6rem]">
            <a className="text-orange-600 font-bold" href="#">
              chris@ocdetailmn.com
            </a>{" "}
            | 612-597-4010
          </p>
        </div>
        <div className="w-full md:w-[80%] lg:w-216 h-20 gap-10 flex justify-center items-center border-t border-b border-gray-900 mt-10">
          <div className="cursor-pointer">
            <FontAwesomeIcon
              className="text-white text-sm hover:text-orange-600"
              icon={faFacebookF}
            />
          </div>
          <div className="cursor-pointer">
            <FontAwesomeIcon
              className="text-white text-sm hover:text-orange-600"
              icon={faThreads}
            />
          </div>
          <div className="cursor-pointer">
            <FontAwesomeIcon
              className="text-white text-sm hover:text-orange-600"
              icon={faLink}
            />
          </div>
        </div>
        <div className="w-full h-auto bg-transparent flex flex-col items-center justify-center py-10 md:py-20">
          <div>
            <p className="text-white poppins">Other Articles</p>
          </div>
          <div>
            <p className="text-white mt-2 bebas text-4xl md:text-5xl text-center">
              You may also Like
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-10 mt-10 px-4 md:px-0">
            <motion.div className="w-full md:w-100 h-auto bg-transparent">
              <motion.img
                whileHover={{ borderWidth: "6px", borderColor: "white" }}
                transition={{ duration: 0.3 }}
                className="rounded-xl w-full"
                src="https://ocdetailmn.com/wp-content/uploads/2024/02/five-tips-for-getting-pet-hair-out-of-your-car-e1743450098468.webp"
                alt=""
              />
              <p className="poppins text-gray-600 mt-5">2 min read</p>
              <p className="text-xl text-white mt-3">
                5 Tips for Getting Pet Hair Out of Your Car
              </p>
            </motion.div>
            <motion.div className="w-full md:w-100 h-auto bg-transparent">
              <motion.img
                whileHover={{ borderWidth: "6px", borderColor: "white" }}
                transition={{ duration: 0.3 }}
                className="rounded-xl w-full"
                src="https://ocdetailmn.com/wp-content/uploads/2024/02/five-tips-for-getting-pet-hair-out-of-your-car-e1743450098468.webp"
                alt=""
              />
              <p className="poppins text-gray-600 mt-5">2 min read</p>
              <p className="text-xl text-white mt-3">
                5 Tips for Getting Pet Hair Out of Your Car
              </p>
            </motion.div>
            <motion.div className="w-full md:w-100 h-auto bg-transparent">
              <motion.img
                whileHover={{ borderWidth: "6px", borderColor: "white" }}
                transition={{ duration: 0.3 }}
                className="rounded-xl w-full"
                src="https://ocdetailmn.com/wp-content/uploads/2024/02/five-tips-for-getting-pet-hair-out-of-your-car-e1743450098468.webp"
                alt=""
              />
              <p className="poppins text-gray-600 mt-5">2 min read</p>
              <p className="text-xl text-white mt-3">
                5 Tips for Getting Pet Hair Out of Your Car
              </p>
            </motion.div>
          </div>
          <div className="mt-10">
            <button className="w-40 md:w-50 h-12 md:h-15 tracking-wide rounded-full bg-transparent border-2 text-white font-bold shadow-[0_0_5px_#ff6a00] hover:shadow-[0_0_0px_#ff6a00] border-[#ff6a00] hover:border-white transition duration-300">
              Load More
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
