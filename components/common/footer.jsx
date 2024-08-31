import { PhoneCall, Mail, ArrowBigRight } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-zinc-500">
      {/* Main container with a row layout and padding */}
      <div className="flex flex-row gap-4 justify-between p-4 mt-5">
        
        {/* About Us Section */}
        <section className="p-4 w-1/4">
          <div className="text-white font-semibold text-lg underline">
            <Link href="/about">About Us</Link>
          </div>
          <div>
            <h1 className="leading-7 text-white">
              <span className="text-black font-semibold">Established in July 2013</span>
              <br />
              Creativity unites young, innovative entrepreneurs in agricultural enterprise.
              <br />
              <span className="text-black font-semibold">Registered in Malawi under Business No. 164077</span>
              <br />
              We collaborate with farmers, researchers,
              <br />
              agro-processors, and input suppliers
              <br />
              to drive agricultural diversity and growth.
              <br />
             
            </h1>
          </div>
        </section>
  
        {/* Contact Us Section */}
        <section className="p-4 w-1/4">
          <div className="text-white font-semibold text-lg underline mt-5">
            <Link href="/contact">Contact </Link>
          </div>
          <div className="flex flex-col justify-center">
            {/* Each icon and text line wrapped together */}
            <div className="flex items-center mt-4">
              <PhoneCall className="mr-2" />
              <div className="text-white">
                Phones:
                <br />
                (+265) 999330061
                <br />
                (+265) 999886644
              </div>
            </div>
            <div className="flex items-center mt-4">
              <Mail className="mr-2" />
              <div className="text-white">
                <Link href="mailto:creativity.mw@outlook.com">
                  Email: creativity.mw@outlook.com
                </Link>
              </div>
            </div>
          </div>
        </section>
  
        {/* Our Services Section */}
        <section className="p-4 w-1/4">
          <div className="text-white font-semibold underline mt-5">
            <Link href="/services">Our Services</Link>
          </div>
          <div className="flex flex-col space-y-2  ">
            {/* Each line has an arrow and text next to each other */}
            <div className="flex items-center ">
              <ArrowBigRight className="mr-2" />
              <div className="text-white">Multiplication of Quality Seeds</div>
            </div>
            <div className="flex items-center  ">
              <ArrowBigRight className="mr-2" />
              <div className="text-white">Supply Quality Seeds</div>
            </div>
            <div className="flex items-center ">
              <ArrowBigRight className="mr-2" />
              <div className="text-white" >Farmers Consultation</div>
            </div>
            <div className="flex items-center ">
              <ArrowBigRight className="mr-2" />
              <div className="text-white">Conduct Researches</div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="p-4 w-1/4">
          <div className="text-white font-semibold text-lg underline mt-5">
            Quick Links
          </div>
          <div className="flex flex-col space-y-2">
            {/* List of quick links */}
            <Link href="/" className="text-white">
              Home
            </Link>
            <Link href="/about" className="text-white">
              About Us
            </Link>
            <Link href="/services" className="text-white">
              Our Services
            </Link>
            <Link href="/contact" className="text-white">
              Contact Us
            </Link>
            <Link href="/blog" className="text-white">
              Blog
            </Link>
          </div>
        </section>

      </div>
    </footer>
  );
};

export default Footer;
