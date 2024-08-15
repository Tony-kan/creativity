import { MapPin } from 'lucide-react';
import { PhoneCall ,Mail,MoveRight } from 'lucide-react';
import Link from 'next/link';

const footer = () => {
  return (
    <div  className="bg-zinc-500">
    <div className=' flex flex-row gap-4 justify-between p-2  mt-5'>
            <div className="p-4">
              <div className='text-white font-semibold text-lg underline pr-16'>
                About Us
              </div>
              <div className=" ">
                <h1 className="leading-2 text-white "> 
                  <span className="text-800 font-semibold ">Established in July 2013</span>, <br></br>
                  Creativity unites young, innovative entrepreneurs in agricultural enterprise.<br></br>
                   <span className="text-800 font-semibold ">Registered in Malawi under Business No. 164077</span>, <br></br>
                   we collaborate with farmers, researchers,<br></br>
                    agro-processors, and input suppliers<br></br>
                   to drive agricultural diversity and growth. <br></br>
                   Passionate about enhancing and diversifying agriculture,<br></br> 
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
            {/* <div>
              <div className='text-white font-semibold underline p mt-5'>
                Quick Links
              </div>
              <div>
                <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> 
                  Mollitia fuga commodi reiciendis facilis <br></br>
                  possimus voluptas nam explicabo necessitatibus, <br></br>
                  incidunt ab fugit corporis numquam totam. <br></br>
                  Reiciendis modi dicta voluptates ullam recusandae!
                  </h1>
              </div>
            </div> */}
            <div className="px-4">
              <div className='text-white  font-semibold underline pr-16  mt-5'>
                Our Services
              </div>
              <div className="">
              <div>
               <Link href="/">  <MoveRight /></Link>
              </div>
              <div>
               <Link href="/">  <MoveRight /></Link>
              </div>
              <div>
               <Link href="/">  <MoveRight /></Link>
              </div>
              <div>
               <Link href="/">  <MoveRight /></Link>
              </div>
              <div>
               <Link href="/">  <MoveRight /></Link>
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