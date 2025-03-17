import Link from "next/link";

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}: any){
    return(
        <div className="mb-10">
            <div className="mt-6 text-center font-extrabold text-3xl text-[#2C2C2B]">
                {heading}
            </div>
            <p className="mt-2 text-center text-sm text-gray-600">
            {paragraph} {' '}
            <Link href={linkUrl} className="text-[#2C2C2B] hover:text-blue-gray-800 hover:blur-[0.35px] font-extrabold">
                {linkName}
            </Link>
            </p>
        </div>
    )
}