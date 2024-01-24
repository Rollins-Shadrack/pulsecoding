import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { footer } from '@/constants/data/footer';
import Container from './Container';

const Footer = () => {
  return (
    <footer className="bg-white pt-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <div className="col-span-2">
            <Link href={"/"} className="mb-4 inline-block">
              <Image src={footer.about.logo} width={120} height={120} alt="pulsecoding.com" />
            </Link>
            <p className="leading-relaxed">{footer.about.description}</p>
          </div>

          <div className=" col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
            {footer.footerLinks.map((footerLinks, idx) => (
              <div key={idx} className="">
                <h3 className="font-semibold text-brandSecondDark mb-3">{footerLinks.heading}</h3>
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
        <div className="border border-gray-300"></div>

        <div className=" flex items-center justify-between  my-4 w-4/5">
          <div className=" space-x-3 ">
            {footer.additionalLinks.map((addLinks, idx) => (
              <Link key={idx} href={addLinks.href} className={`text-base ${idx === 1 ? "md:border-l md:border-r border-gray-300 px-5" : ""}`}>
                {addLinks.label}
              </Link>
            ))}
          </div>

          <div className="mx-auto whitespace-nowrap font-medium">
            &copy;
            {footer.copyright}
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer