import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { footer } from '@/constants/data/footer';

const Footer = () => {
  return (
    <footer className="bg-white pt-10">
      <div className="lg:w-4/5 px-4 mx-auto">
        <div className="lg:flex gap-14 mb-2 w-full">

          <div className="w-full mx-auto  mb-10 lg:mb-0">
            <Link href={"/"} className="mb-4 inline-block">
              <Image src={footer.about.logo} width={120} height={120} alt="pulsecoding.com" />
            </Link>
            <p className="leading-relaxed">{footer.about.description}</p>
          </div>

          <div className="flex  w-full  mb-10 lg:mb-0">
            {footer.footerLinks.map((footerLinks, idx) => (
              <div key={idx} className="px-10 w-full lg:w-4/12 ">
                <h3 className="font-semibold text-brandSecondDark mb-5">{footerLinks.heading}</h3>
                <ul className="p-0 m-0">
                  {footerLinks.links.map((link, idxx) => (
                    <li key={idxx} className="mb-3">
                      <Link
                        href={link.href}
                        className="text-gray-700 group-flex items-center duration-300 transition-all ease-in-out hover:text-brandPrimary">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="border-2 w-4/5"></div>

        <div className="w-full  flex justify-between space-x-3 my-3">
          <div className="">
            {footer.additionalLinks.map((addLinks, idx) => (
              <Link key={idx} href={addLinks.href} className={`whitespace-nowrap mx-2 ${idx === 1 ? "border-l-4 border-r-4 px-3" : ""}`}>
                {addLinks.label}
              </Link>
            ))}
          </div>

          <div className="whitespace-nowrap">
            &copy;
            {footer.copyright}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer