import Link from "next/link";
import Image from "next/image";
import Circle from "../shapes/Circle";

export default function Navbar() {
    return (
        <div>
            <div className="absolute inset-0 overflow-hidden">
                <Circle
                    className="absolute h-[110rem] w-[110rem] -right-[39rem] -top-[90rem] drop-shadow-xl"
                    gradient={{
                        start: "#ED683C",
                        middle: { position: "50%", color: "#F3903F" },
                        end: "#E93E3A",
                    }}
                />
                <Circle
                    className="z-[11] absolute h-[110rem] w-[110rem] -right-[39rem] -top-[90rem]"
                    gradient={{
                        start: "#ED683C",
                        middle: { position: "50%", color: "#F3903F" },
                        end: "#E93E3A",
                    }}
                    stroke={{
                        color: "white",
                        width: "0.25",
                    }}
                />
                <Circle
                    className="z-[11] absolute h-[100rem] w-[100rem] -right-[31rem] -top-[82rem]"
                    gradient={{
                        start: "#F3903F",
                        middle: { position: "30%", color: "#ED683C" },
                        end: "#E93E3A",
                    }}
                    stroke={{
                        color: "white",
                        width: "0.15",
                    }}
                />
            </div>
            <div
                className="flex justify-between items-center h-24 bg-gradient-to-b from-[#E93E3A] to-[#ED683C]  text-black absolute top-0 right-0 w-full px-24 shadow-lg"
                role="navigation"
            >
                <Link href="/">
                    <Image
                        src="/logo-white-transparent.png"
                        width={140}
                        height={140}
                        alt="raa-logo"
                    />
                </Link>
                <div className="flex gap-24 text-lg font-bold text-white z-[12]">
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
        </div>
    );
}
