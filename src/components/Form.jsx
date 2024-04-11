import { Iceberg } from "next/font/google";
import { FaFacebookF,  FaInstagram, FaPinterestP } from "react-icons/fa6";


export default function Form() {
  return (
    <section className="  p-4 md:p-20 bg-primary">
      <div className="rounded overflow-hidden p-4 md:p-8  max-w-3xl flex justify-center items-center mx-auto">
        <div className="bg-primary p-10 b shadow-lg shadow-black  grid grid-cols-2 gap-10 ">
          <div className="md:col-6">
            <h1 className="font-bold text-3xl text-clip text-light">
              Welcome!
            </h1>

            <hr className="w-10 h-1 mt-7" />
            <p className="mt-8 text-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              debitis, voluptate exercitationem adipisci est quam nihil unde
            </p>
            <button className=" btn rounded-lg bg-gradient-to-r from-red-600 to-orange-300 px-7 py-2  mt-7 text-light">
              Learn more
            </button>
          </div>

          <div className="md:col-6 ">
            <form className="backdrop-blur-sm flex flex-col bg-white/30 w-72 h-72 bg-opacity-20 drop-shadow-lg rounded p-10 items-center">
              <h1 className="text-3xl font-bold text-center text-light">
                Sign in
              </h1>

              <input
                className=" mt-5 rounded-full border-none w-full"
                type="name"
              />
              <input
                className=" mt-5 rounded-full border-none w-full"
                type="password"
              />
              <button className="bg-gradient-to-r from-red-600 to-orange-300 mt-5 w-full rounded-full p-2  text-light">
                Submit
              </button>
              <span className="gap-4 flex mt-3 text-lg text-light"><FaFacebookF /> <FaInstagram /> <FaPinterestP /></span>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
