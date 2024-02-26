import Circle from "../shapes/Circle";
import Ring from "../shapes/Ring";

export default function Background() {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <Circle
                className="absolute h-[110rem] w-[110rem] -right-[39rem] -top-[90rem]"
                gradient={{
                    start: "#ED683C",
                    middle: { position: "50%", color: "#F3903F" },
                    end: "#E93E3A",
                }}
            />
            <Circle
                className="absolute h-[100rem] w-[100rem] -right-[31rem] -top-[82rem]"
                gradient={{
                    start: "#F3903F",
                    middle: { position: "30%", color: "#ED683C" },
                    end: "#E93E3A",
                }}
            />
            {/* <Ring
                className="absolute top-[20rem] -right-[24rem] h-[120vh] w-[120vh]"
                gradient={{
                    start: "#F3903F",
                    middle: { position: "30%", color: "#ED683C" },
                    end: "#E93E3A",
                }}
            /> */}
        </div>
    );
}
