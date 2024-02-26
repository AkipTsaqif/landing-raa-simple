import Circle from "../shapes/Circle";
import Ring from "../shapes/Ring";

export default function Background() {
    return (
        <div className="absolute inset-0">
            <Circle
                className="absolute -top-[91rem] -right-[41rem] h-[230vh] w-[230vh]"
                gradient={{
                    start: "#ED683C",
                    middle: { position: "50%", color: "#F3903F" },
                    end: "#E93E3A",
                }}
            />
            <Circle
                className="absolute -top-[88rem] -right-[36rem] h-[220vh] w-[220vh]"
                gradient={{
                    start: "#F3903F",
                    middle: { position: "30%", color: "#ED683C" },
                    end: "#E93E3A",
                }}
            />
            <Ring
                className="absolute top-[20rem] -right-[24rem] h-[120vh] w-[120vh]"
                gradient={{
                    start: "#F3903F",
                    middle: { position: "30%", color: "#ED683C" },
                    end: "#E93E3A",
                }}
            />
        </div>
    );
}
