import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; 

const Services = () => {
  return (
    <div>
      {/* Header Section */}
      <div>
        <h1 className="flex text-2xl text-lime-600 italic font-semibold justify-center items-center">
          The Art of Perfection in Seed Multiplication
        </h1>
      </div>

      {/* Hero Section */}
      <div
        className="flex min-h-[400px] p-6 border-b-2 justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/dancing.jpg')" }}
      >
        <h1 className="text-3xl md:text-6xl font-bold text-green-600 text-opacity-80">Our Services</h1>
      </div>

      {/* Container for Service Cards */}
      <div className="container mt-8 px-4 mx-auto">
        
        {/* First Card: Consultation Services */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Consultation Services</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row items-center">
            {/* Image Container */}
            <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
              <Image
                src="/assets/images/oneone.jpg"
                alt="Consultation Image"
                layout="fill"
                objectFit="cover"
                className="rounded-sm"
              />
            </div>
            {/* Text Container */}
            <div className="w-full md:w-1/2 p-4 md:p-6">
              <p className="font-extralight text-black text-sm md:text-base">
                Our company is dedicated to empowering farmers by providing personalized,
                one-on-one consultations tailored to meet their specific needs. Our expert
                consultants work closely with each farmer, offering guidance on best
                agricultural practices, crop selection, pest management, and sustainable
                farming techniques. By understanding the unique challenges and goals of each
                farmer, we provide customized solutions that help maximize crop yield,
                enhance soil health, and improve overall farm productivity. Our hands-on
                approach ensures that farmers receive the support they need to thrive,
                fostering a more resilient and prosperous agricultural community.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Second Card: Supply Quality Seeds */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Supply Quality Seeds</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row items-center">
            {/* Text Container */}
            <div className="w-full md:w-1/2 p-4 md:p-6">
              <p className="font-extralight text-black text-sm md:text-base">
                At Creativity, we are committed to revolutionizing agriculture through the provision of top-quality seeds
                that are meticulously sourced and rigorously tested to meet the highest standards.
                Our extensive selection includes a diverse range of seeds tailored to various crops,
                ensuring that farmers have access to the most resilient and high-yielding varieties available. 
                We understand that the foundation of successful farming begins with superior seeds,
                which is why our offerings are designed to enhance growth, maximize productivity, and support sustainable agricultural practices.
                By prioritizing quality and reliability, we empower farmers to achieve optimal results and contribute to a thriving agricultural sector.
              </p>
            </div>
            {/* Image Container */}
            <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
              <Image
                src="/assets/images/menat.jpg"
                alt="Seed Quality Image"
                layout="fill"
                objectFit="cover"
                className="rounded-sm"
              />
            </div>
          </CardContent>
        </Card>

        {/* Third Card: Agricultural Research */}
        <Card>
          <CardHeader>
            <CardTitle>Agricultural Research</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row items-center">
            {/* Text Container */}
            <div className="w-full md:w-1/2 p-4 md:p-6">
              <p className="font-extralight text-black text-sm md:text-base">
                At Creativity, our dedication to advancing agriculture extends beyond supplying high-quality seeds;
                we are also deeply invested in cutting-edge research. 
                Our research initiatives focus on developing innovative agricultural solutions, 
                optimizing seed performance, and exploring sustainable farming practices.
                By collaborating with leading experts and utilizing state-of-the-art technology,
                we conduct comprehensive studies to address the evolving challenges faced by farmers.
                Our research efforts aim to improve crop resilience, increase yield potential,
                and enhance overall farm productivity. Through our commitment to research,
                we strive to contribute valuable insights and breakthroughs that drive the future of agriculture and 
                support the success of farmers in Malawi.
              </p>
            </div>
            {/* Image Container */}
            <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px]">
              <Image
                src="/assets/images/research.jpg"
                alt="Research Image"
                layout="fill"
                objectFit="cover"
                className="rounded-sm"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Services;
