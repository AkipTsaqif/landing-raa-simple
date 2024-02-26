interface CircleProps {
    className?: string;
    color?: string;
    stroke?: {
        color: string;
        width: string;
    };
    gradient?: {
        start: string;
        middle?: {
            color: string;
            position: string;
        };
        end: string;
    };
    size?: {
        height: string;
        width: string;
    };
}

type ExclusiveColorOrGradient<T> = T extends { color: any }
    ? T extends { gradient: any }
        ? never
        : T
    : T;

export type ExclusiveCircleProps = ExclusiveColorOrGradient<CircleProps>;
