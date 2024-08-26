import Image from 'next/image'

const page = () => {
  return (
    <div className="bg-inherit-400" >
     <div
        className="flex min-h-[100px] p-6 border-b-2 justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/pexels.jpg')" }}
      >
        <h1 className="text-2xl text-black italic font-semibold">
          The Art of Perfection in Seed Multiplication
        </h1>
      </div>

   <div className=" flex min-h-[300px]   justify-between p-6  "  >
    <div className="relative z-10 justify- items-center   flex-shrink-0">
      <Image src="/assets/images/slider2.jpg" alt="image" width="500" height="300" placeholder='blur' blurDataURL='/assets/images/slider2.jpg' className="min-h-[200px] object-cover rounded-sm" />
    </div>
    <div className="ml-6">
    <h2 className="text-2xl font-bold mb-2 flex flex-col justify-center ml-4 items-center ">Mission</h2>
        <p className="text-lg text-gray-700 font-semibold">
         To produce, multiply, process, distribute, and sell considerable 
         quantities of quality seed to increase agricultural productivity among the farming communities.
        </p>
    </div>
   </div>

   <div className=" flex min-h-[300px]  items-center justify-between p-6  "  >
   <div className="mr-6">
   <h2 className="text-2xl font-bold mb-2 flex flex-col justify-center ml-4 items-center ">Vision</h2>
       <p className="text-lg text-gray-700 text-semibold">
       To be the best provider of quality seed and associated services in the Malawi agricultural sector
       </p>
   </div>
   <div className="relative z-10 justify- items-center   flex-shrink-0">
     <Image src="/assets/images/consult.jpg" alt="image" width="400" height="50" placeholder='blur' blurDataURL='/assets/images/consult.jpg'   className="max-h-[400px] object-cover rounded-sm" />
   </div>
  </div>

  <div className=" flex min-h-[300px]  items-center justify-between p-6 "  >
  <div className="relative z-10 justify- items-center   flex-shrink-0">
     <Image src="/assets/images/farmer.jpg" alt="image" width="500" height="50" blurDataURL='/assets/images/farmer.jpg'  placeholder='blur'  className="  max-w-full max-h-[400px] object-cover" />
   </div>
   <div className="ml-6">
   <h2 className="text-2xl font-bold mb-2 flex flex-col justify-center ml-4 items-center  ">Core Values</h2>
       <p className="text-lg text-gray-700 font-semibold">
        •	Purpose & Growth - our foundation is built on our purpose and provides a place for our team`s passion<br></br>
        •	Trust – clear business deals, free fair, and without fraud<br></br>
        •	Client Focus - a razor-sharp focus on our customer`s growth is our way to success.<br></br>
        •	Integrity - to have honesty and respect for all individuals.<br></br>
        •	Leadership - to empower and inspire entrepreneurial leaders.<br></br>
        •	Professionalism - to be professional in our conduct to our clients, partners, and each other.<br></br>
        •	Excellence - to continually pursue knowledge and learn.<br></br>
        •	Community Service - to effectively help farming communities to be productive and self-reliant.<br></br>

       </p>
   </div>
  </div>

  <div className=" flex min-h-[300px]  items-center justify-between p-6  "  >
   <div className="mr-6">
   <h2 className="text-2xl font-bold mb-2 flex flex-col justify-center ml-4 items-center ">Notion Behind Creativity</h2>
       <p className="text-lg text-gray-700 font-semibold">
       Creativity was formed by the coming together of creative young entrepreneurs
        involved in agricultural enterprising. 
        Registered in Malawi in July 2013 under the Business Registration Act (Cap.46:02) with business No. 164077.
         It brings in the participation of farmers, agricultural researchers, 
         agro-processors, and input suppliers among others in the agricultural business.
          Creativity has a belief and passion for increased diversified
           agricultural productivity that will bring the company and Malawi to the greatest heights. 
       </p>
   </div>
   <div className="relative z-10 justify- items-center   flex-shrink-0">
     <Image src="/assets/images/slider1.jpg" alt="image" width="500" height="50"  placeholder='blur'  blurDataURL='/assets/images/slider1.jpg'  className="max-h-[400px] object-cover" />
   </div>
  </div>

  <div className=" flex min-h-[300px]   justify-between p-6  "  >
   <div className="ml-6">
   <h2 className="text-2xl font-bold mb-2 flex flex-col justify-center ml-4 items-center">What We Do</h2>
       <p className="text-lg text-gray-700 font-semibold">
        Creativity is seriously engaged in the multiplication and supply of quality seeds of various classes including Basic and Certified (Commercial) Seed of the following legume and cereal varieties: <br></br>
        <span className="text-green-500">Soyabean:</span> Tikolore<br></br>
        <span className="text-red-700">Groundnut:</span> CG9, CG11, and Chalimbana 2005 (CG means Chitedze Groundnut)<br></br>
        <span className="text-purple-500">Beans:</span> NUA 45 (Rich in Iron & Zinc) and Sugar Bean Production (Chuma and Kholophethe Varieties).<br></br>
       </p>
   </div>
   <div className="relative z-10 justify- items-center   flex-shrink-0">
     <Image src="/assets/images/sell.jpg" alt="image" width="500" height="50"  placeholder='blur' blurDataURL='/assets/images/sell.jpg'   className="max-h-[400px] object-cover" />
   </div>
  </div>

  
  
  </div>
  
  )
};

export default page 