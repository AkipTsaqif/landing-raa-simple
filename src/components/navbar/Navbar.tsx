import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <div
            className="flex justify-between items-center h-24 bg-transparent text-black absolute top-0 right-0 w-full px-24"
            role="navigation"
        >
            <Link href="/">
                <Image
                    src="/logo.png"
                    width={140}
                    height={140}
                    alt="raa-logo"
                />
            </Link>
            <div className="flex gap-24 text-lg font-bold text-white">
                <Link href="/about-us">
                    <p className="">Tentang Kami</p>
                </Link>
                <Link href="/activities">
                    <p className="">Kegiatan</p>
                </Link>
                <Link href="/contact-us">
                    <p className="">Kontak</p>
                </Link>
            </div>
        </div>
    );
}
