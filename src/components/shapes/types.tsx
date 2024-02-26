interface CircleProps {
    className?: string;
    color?: string;
    gradient?: {
        start: string;
        middle?: {
            color: string;
            position: string;
        };
        end: string;
    };
}

type ExclusiveColorOrGradient<T> = T extends { color: any }
    ? T extends { gradient: any }
        ? never
        : T
    : T;

export type ExclusiveCircleProps = ExclusiveColorOrGradient<CircleProps>;
