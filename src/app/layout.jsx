"use client"
import { useState } from "react";
import "./globals.css";
import Image from "next/image";


// export const metadata = {
//   title: 'Next.js',
//   description: 'Generated by Next.js',
// }

export default function RootLayout({ children }) {
  let [show, setShow] = useState(false);
  
  let handleShowNavBar = ()=>{
    setShow(!show)
  }

 return (
    <html lang="en">
      <body>
        <header>
          <nav className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4 ">
              <a href="" className="flex items-center">
                <Image src="/SS_Logo big size.svg" width={200} height={35} priority alt="Support Sages"/>
              </a>
              <div className="flex lg:order-2 space-x-2 md:space-x-1">
              <button type="button" className="text-white bg-red-700 hover:bg-red-800 px-2.5 py-1.5 font-medium rounded-sm text-sm md:text-lg md:px-4 md:py-2 text-center">Emergency</button>
                
                {/* button will only be showed if screen size is less than large and when clicked, menu will be showed */}
                <button onClick={handleShowNavBar} className="lg:hidden hover:bg-gray-200" >
                <span className="sr-only">Open main menu</span>
                <div className="space-y-0.5 md:space-y-1.5 flex flex-col items-center justify-center p-2 border" aria-hidden="true">
                  <div className="md:w-6 h-0.5 bg-gray-600 w-3"></div>
                  <div className="md:w-6 h-0.5 bg-gray-600 w-3"></div>
                  <div className="md:w-6 h-0.5 bg-gray-600 w-3"></div>
                </div>
              </button>
            </div>

            {/* 'hidden' style property will be removed when clicks on menu */}
            <div className={show? "items-center justify-between w-full lg:flex lg:w-auto  lg:order-1" : "items-center justify-between hidden w-full lg:flex lg:w-auto  lg:order-1"}>
              <ul className="flex flex-col font-medium p-4 lg:p-0 mt-4 border bg-gray-50 border-gray-100 rounded-lg 2xl:space-x-10 lg:space-x-6 lg:flex-row lg:mt-0 lg:border-0 lg:bg-transparent">
                <li><a href="#" className="block py-2 px-3 md:p-0 text-blue-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">Support Services</a></li>
                <li><a href="#" className="block py-2 px-3 md:p-0 text-blue-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 ">Service Management</a></li>
                <li><a href="#" className="block py-2 px-3 md:p-0 text-blue-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">Devops</a></li>
                <li><a href="#" className="block py-2 px-3 md:p-0 text-blue-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">CloudOps</a></li>
                <li><a href="#" className="block py-2 px-3 md:p-0 text-blue-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 ">Blog</a></li>
                <li><a href="#" className="block py-2 px-3 md:p-0 text-blue-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700">Contact Us</a></li>
              </ul>
            </div>

          </nav>
        </header>

        {children}

        <footer className="">
          <section style={{backgroundImage: "url('/mesh.svg')"}} className="bg-cover bg-center h-auto w-auto bg-darkBlue">
            <div className=" grid grid-cols-2 mx-10 md:grid-cols-3 lg:mx-40 lg:grid-cols-5  py-10 text-xs ">
              <div className="md:pl-10">
                <ul className="lg:leading-9 text-white text-sm font-light">
                  <li className="py-4 text-blue-400 font-medium text-base ">Company</li>
                  <li className="hover:text-blue-700"><a href="">About Us</a></li>
                  <li className="hover:text-blue-700"><a href="">Certifications</a></li>
                  <li className="hover:text-blue-700"><a href="">Life@SS</a></li>
                  <li className="hover:text-blue-700"><a href="">Awards</a></li>
                  <li className="hover:text-blue-700"><a href="">Careers</a></li>
                  <li className="hover:text-blue-700"><a href="">Contact Us</a></li>
                  <li className="hover:text-blue-700"><a href="">Blog</a></li>
                </ul>
              </div>

              <div>
                <ul className="lg:leading-9 text-white text-sm font-light">
                  <li className="py-4 text-blue-400 font-medium text-base ">Hire A Service</li>
                  <li className="hover:text-blue-700"><a href="">Dedicated Support Team</a></li>
                  <li className="hover:text-blue-700"><a href="">Quasi-dedicated Support Team</a></li>
                  <li className="hover:text-blue-700"><a href="">Hire a DevOps Engineer</a></li>
                  <li className="hover:text-blue-700"><a href="">Hire a Billing Support Staﬀ</a></li>
                  <li className="hover:text-blue-700"><a href="">Hire a Migration Expert</a></li>
                  <li className="hover:text-blue-700"><a href="">Per-ticket Support Plan</a></li>
                  <li className="hover:text-blue-700"><a href="">LiveChat Support</a></li>
                  <li className="hover:text-blue-700"><a href="">Hire a developer</a></li>
                </ul>
              </div>

              <div>
                <ul className="lg:leading-9 text-white text-sm font-light">
                  <li className="py-4 text-blue-400 font-medium text-base ">Technologies</li>
                  <li className="hover:text-blue-700"><a href="">Microsoft Azure Expert</a></li>
                  <li className="hover:text-blue-700"><a href="">AWS Cloud Expert</a></li>
                  <li className="hover:text-blue-700"><a href="">Managed VPS Linux</a></li>
                  <li className="hover:text-blue-700"><a href="">anaged VPS Windows</a></li>
                  <li className="hover:text-blue-700"><a href="">CentOS Expert</a></li>
                  <li className="hover:text-blue-700"><a href="">Hire a developer</a></li>
                </ul>
              </div>

              <div className="col-span-2 text-center flex flex-col items-center lg:pt-5 space-y-3 lg:col-span-2 md:col-span-3 md:mt-5">
                <Image src="/Shape-25.svg" width={120} height={120} alt="25"/>
                <h1 className="text-2xl text-transparent font-bold bg-clip-text bg-gradient-to-r to-indigo-500 via-cyan-200 from-sky-500">SupportSages</h1>
                
                {/* need to import Facebook Icons */}
                <div className="grid grid-cols-4 text-white font-bold text-lg">
                  <a href="">F</a>
                  <a href="">M</a>
                  <a href="">L</a>
                  <a href="">X</a>
                </div>
                <button className="border border-green-400 font-medium text-green-400 py-1.5 px-1 rounded-lg hover:bg-slate-50"><span className="flex items-center me-3"><span className="flex w-2.5 h-2.5 bg-green-400 rounded-full me-1.5 flex-shrink-0 mx-3"></span>Live Chat</span></button>
              </div>
            </div>
              
            {/* copy right */}
            <div className="w-full mx-auto pb-10 max-w-screen-2xl text-xs md:text-sm p-4 md:flex md:items-center md:justify-between">
                <span className=" text-gray-500 sm:text-center dark:text-gray-400">Copyright © 2008 - 2023  <a href="" className="hover:underline"> SupportSages Pvt Ltd.</a> All Rights Reserved.</span>

              <ul className="flex flex-wrap items-center mt-3 font-medium text-gray-500 dark:text-gray-400 sm:mt-0 gap-3">
                  <li><a href="#" className="hover:underline">PrivacyPolicy</a></li>
                  <li><a href="#" className="hover:underline">LegalyTermss</a></li>
                  <li><a href="#" className="hover:underline">DataProtection</a></li>
                  <li><a href="#" className="hover:underline">CookiePolicy</a></li>
              </ul>
              </div>



          </section>
        </footer>
      </body>
    </html>
  )
}
