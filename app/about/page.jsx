import React from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const Page = () => {
  return (
    <div className="bg-inherit-400">
      <div
        className="flex min-h-[100px] p-6 border-b-2 justify-center items-center bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/images/pexels.jpg')" }}
      >
        <h1 className="text-2xl text-black italic font-semibold">
          The Art of Perfection in Seed Multiplication
        </h1>
      </div>
      <div className="flex min-h-[300px] justify-between">
        <Tabs defaultValue="Mission" className="w-full">
          <TabsList className="grid w-full grid-cols-5 bg-lime-600 gap-4 text-white h-16">
            <TabsTrigger value="Mission" className="border-2">Mission</TabsTrigger>
            <TabsTrigger value="Vision" className="border-2">Vision</TabsTrigger>
            <TabsTrigger value="CoreValues" className="border-2">Core Values</TabsTrigger>
            <TabsTrigger value="Creativity" className="border-2">Notion Behind Creativity</TabsTrigger>
            <TabsTrigger value="WhatWeDo" className="border-2">What We Do</TabsTrigger>
          </TabsList>

          {/* Mission Tab Content */}
          <TabsContent value="Mission">
            <Card>
              <CardHeader></CardHeader>
              <CardContent className="flex">
                <div className=" justify-center items-center flex-shrink-0">
                  <Image
                    src="/assets/images/.jpg"
                    alt="Mission Image"
                    width="500"
                    height="300"
                    className="min-h-[200px] object-cover rounded-sm"
                  />
                </div>
                <div className="ml-6">
                  <h2 className="text-2xl font-bold mb-2 flex flex-col justify-center ml-4 items-center">
                    Mission
                  </h2>
                  <p className="text-lg text-gray-700 font-semibold">
                    To produce, multiply, process, distribute, and sell considerable quantities of quality seed to increase agricultural productivity among the farming communities.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Vision Tab Content */}
          <TabsContent value="Vision">
            <Card>
              <CardContent className="flex">
                <div className="relative z-10 justify-center items-center flex-shrink-0">
                  <Image
                    src="/assets/images/.jpg"
                    alt="Vision Image"
                    width="400"
                    height="200"
                    className="min-h-[200px] object-cover rounded-sm"
                  />
                </div>
                <div className="ml-6">
                  <h2 className="text-2xl font-bold mb-2 flex flex-col justify-center ml-4 items-center">
                    Vision
                  </h2>
                  <p className="text-lg text-gray-700 font-semibold">
                    To be the best provider of quality seed and associated services in the Malawi agricultural sector.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Core Values Tab Content */}
          <TabsContent value="CoreValues">
            <Card>
              <CardHeader>
                <CardTitle>Core Values</CardTitle>
              </CardHeader>
              <CardContent className="flex">
                <div className="relative z-10 justify-center items-center flex-shrink-0">
                  <Image
                    src="/assets/images/farmer.jpg"
                    alt="Core Values Image"
                    width="500"
                    height="300"
                    className="min-h-[200px] object-cover rounded-sm"
                  />
                </div>
                <div className="ml-6">
                  <h2 className="text-2xl font-bold mb-2 flex flex-col justify-center ml-4 items-center">
                    Core Values
                  </h2>
                  <p className="text-lg text-gray-700 font-semibold">
                    • Purpose & Growth - our foundation is built on our purpose and provides a place for our team’s passion.<br />
                    • Trust – clear business deals, free fair, and without fraud.<br />
                    • Client Focus - a razor-sharp focus on our customer`s growth is our way to success.<br />
                    • Integrity - to have honesty and respect for all individuals.<br />
                    • Leadership - to empower and inspire entrepreneurial leaders.<br />
                    • Professionalism - to be professional in our conduct to our clients, partners, and each other.<br />
                    • Excellence - to continually pursue knowledge and learn.<br />
                    • Community Service - to effectively help farming communities to be productive and self-reliant.<br />
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notion Behind Creativity Tab Content */}
          <TabsContent value="Creativity">
            <Card>
              <CardHeader>
                <CardTitle>Notion Behind Creativity</CardTitle>
              </CardHeader>
              <CardContent className="flex">
                <div className="relative z-10 justify-center items-center flex-shrink-0">
                  <Image
                    src="/assets/images/slider1.jpg"
                    alt="Notion Behind Creativity Image"
                    width="500"
                    height="300"
                    className="min-h-[200px] object-cover rounded-sm"
                  />
                </div>
                <div className="ml-6">
                  <h2 className="text-2xl font-bold mb-2 flex flex-col justify-center ml-4 items-center">
                    Notion Behind Creativity
                  </h2>
                  <p className="text-lg text-gray-700 font-semibold">
                    Creativity was formed by the coming together of creative young entrepreneurs involved in agricultural enterprising. 
                    Registered in Malawi in July 2013 under the Business Registration Act (Cap.46:02) with business No. 164077.
                    It brings in the participation of farmers, agricultural researchers, agro-processors, and input suppliers among others in the agricultural business.
                    Creativity has a belief and passion for increased diversified agricultural productivity that will bring the company and Malawi to the greatest heights.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* What We Do Tab Content */}
          <TabsContent value="WhatWeDo">
            <Card>
              <CardHeader>
                <CardTitle>What We Do</CardTitle>
              </CardHeader>
              <CardContent className="flex">
                <div className="relative z-10 justify-center items-center flex-shrink-0">
                  <Image
                    src="/assets/images/sell.jpg"
                    alt="What We Do Image"
                    width="500"
                    height="300"
                    className="min-h-[200px] object-cover rounded-sm"
                  />
                </div>
                <div className="ml-6">
                  <h2 className="text-2xl font-bold mb-2 flex flex-col justify-center ml-4 items-center">
                    What We Do
                  </h2>
                  <p className="text-lg text-gray-700 font-semibold">
                    Creativity is seriously engaged in the multiplication and supply of quality seeds of various classes including Basic and Certified (Commercial) Seed of the following legume and cereal varieties: <br />
                    <span className="text-green-500">Soyabean:</span> Tikolore<br />
                    <span className="text-red-700">Groundnut:</span> CG9, CG11, and Chalimbana 2005 (CG means Chitedze Groundnut)<br />
                    <span className="text-purple-500">Beans:</span> NUA 45 (Rich in Iron & Zinc) and Sugar Bean Production (Chuma and Kholophethe Varieties).<br />
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Page;
