import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="mt-10 bg-white py-8 text-center text-gray-600">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-6">
        <div className="mb-4 md:mb-0">
          <Image
            src={"/Logo.png"}
            className="h-16 w-auto"
            alt="organza"
            width={78}
            height={70}
          />
          <p className="text-sm">
            Making event planning easier, one invitation at a time.
          </p>
        </div>
        <div className="space-y-2 flex flex-col items-start">
          <p className="font-semibold">Product</p>
          <Link href="/features">Features</Link>
          <Link href="/templates">Templates</Link>
          <Link href="/pricing">Pricing</Link>
        </div>
        <div className="space-y-2 flex flex-col items-start">
          <p className="font-semibold">Company</p>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="space-y-2 flex flex-col items-start">
          <p className="font-semibold">Follow Us</p>
          <div className="flex space-x-3">
            <Image
              alt="instagram"
              width={18}
              height={20}
              src={"/icons/instagram.png"}
            />
            <Image
              alt="pintrest"
              width={18}
              height={20}
              src={"/icons/pintrest.png"}
            />
            <Image
              alt="facebook"
              width={18}
              height={20}
              src={"/icons/facebook.png"}
            />
          </div>
        </div>
      </div>
      {/* <div className="border-t-1 border-[black] py-8"> */}
        <div className="mt-11 text-sm border-t border-gray-400 py-8 mx-16">
          <span>© 2025 OrganzaRSVP. All rights reserved.</span>
        </div>
      {/* </div> */}
    </footer>
  );
};

export default Footer;
