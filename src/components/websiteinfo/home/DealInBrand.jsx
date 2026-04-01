import { FaRegCircleDot } from "react-icons/fa6";
import { MdOutlineHorizontalRule } from "react-icons/md";




const slides = [{ img: "http://demo.webshree.in/shreeanant/images/Brands_img-1.jpg" },
{ img: "http://demo.webshree.in/shreeanant/images/Brands_img-2.jpg" },
{ img: "http://demo.webshree.in/shreeanant/images/Brands_img-3.jpg" },
{ img: "http://demo.webshree.in/shreeanant/images/Brands_img-4.jpg" },
{ img: "http://demo.webshree.in/shreeanant/images/Brands_img-5.jpg" },
{ img: "http://demo.webshree.in/shreeanant/images/Brands_img-6.jpg" },
{ img: "http://demo.webshree.in/shreeanant/images/Brands_img-7.jpg" }];

export default function DealInBrand() {
  return (
    <div  >
      <div className="ml-50 text-4xl mt-10 mb-10  flex items-center " >

          <FaRegCircleDot className="mr-5" />
        <h2 className="underline underline-offset-8" >Brands We  Deal In</h2>
        
      </div>
      <div className="marquee-wrapper">
        <div className="marquee-track">

          {/* Original set */}
          {slides.map((l, i) => (
            <div className=" m-10" key={i}>
              <img className="h-full w-full rounded-2xl outline outline-offset-2  outline-orange-300 overflow-hidden" src={l.img} alt=""></img>

            </div>
          ))}

          {/* Duplicate set - infinite trick! */}
          {slides.map((l, i) => (
            <div className=" m-10" key={"d" + i}>
              <img className="h-full w-full rounded-2xl border-2 border-solid border-orange-300 overflow-hidden" src={l.img} alt=""></img>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
