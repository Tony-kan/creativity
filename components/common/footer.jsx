
import { PhoneCall ,Mail,BookOpenText,Binoculars,Bean ,MapPin,ArrowBigRight} from 'lucide-react';
import Link from 'next/link';

const footer = () => {
  return (
    <div  className="bg-zinc-500 ">
    <div className=' flex flex-row gap-4 justify-between p-2  mt-5'>
            <div className="p-4">
              <div className='text-white font-semibold text-lg underline pr-16'>
                About Us
              </div>
              <div className=" ">
                <h1 className="leading-2 text-white "> 
                  <span className="text-800 font-semibold text-black ">Established in July 2013</span> <br></br>
                  Creativity unites young, innovative entrepreneurs in agricultural enterprise.<br></br>
                   <span className="text-800 font-semibold text-black ">Registered in Malawi under Business No. 164077</span> <br></br>
                   we collaborate with farmers, researchers<br></br>
                    agro-processors, and input suppliers<br></br>
                   to drive agricultural diversity and growth. <br></br>
                   Passionate about enhancing and diversifying agriculture<br></br> 
                  we are committed to empowering the sector for a sustainable future.<br></br>
                  </h1>
              </div>
            </div>
            <div className="">
              <div className='text-white font-semibold text-lg underline pl-16 mt-5 '>
              Contact Us
              </div>
              <div className='flex flex-row justify-center relative '>
                <div >
                <MapPin className=" mt-1 "/>
                <PhoneCall className="mt-48 " />
                <Mail  className="mt-12 "/>
                </div>
                <h1 className='text-white  pl-4'>
                    TPIN: 30954285<br></br>
                    P.O. Box 1493,<br></br> Lilongwe,<br></br>
                    P.O. Box 59,<br></br> Lumbadzi,<br></br> Malawi<br></br>
                    Phones:<br></br> 
                    (+265) 999330061 <br></br> 
                    (+265) 999886644<br></br>
                    <Link href="creativity.mw@outlook.com">Email:creativity.mw@outlook.com</Link> 
                                    </h1>
              </div>
            </div>
            <div className="">
              <div className='text-white  font-semibold underline pl-16  mt-5'>
                Our Services
              </div>
              <div  className='flex flex-row justify-center relative '>
              <div className=" className='text-white  ">
              <div className="flex  justify-center items-center">
                <div className="flex flex-col">
              <ArrowBigRight className=""/>
              <ArrowBigRight className="mt-1"/>
              <ArrowBigRight className="mt-2"/>
              <ArrowBigRight className="mt-4"/>
                </div>
                <h1  className='text-white  pl-6 '>
                <Link href="Muitiplication of Quality Seeds">Multiplication of Quality Seeds </Link> <br></br>
                 <Link href="Supply quality Seeds">Supply quality Seeds</Link> <br></br>
                 <Link href="Farmers Consultation">Farmers Consultation</Link> <br></br>
                 <Link href="Conduct Researches">Conduct Researches</Link> <br></br>
                </h1>
            </div>
            </div>
              </div>
       </div>
    </div>
    <div className="inline-flex items-center justify-center w-full">
    <hr className="w-80 h-1 my-2 bg-gray-200 border-0 rounded dark:bg-gray-700"/>
    </div>
    <div className="flex flex-col  justify-center items-center mt-1 mb-8"> 
     <h1 className=" font-semibold text-white text-lg mb-5">
        <Link href="/"> CREATIVITY</Link>  
    </h1>
      </div>
    </div>
  );
};

export default footer