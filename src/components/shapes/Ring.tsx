"use client";

import { useState } from "react";
import { ExclusiveCircleProps } from "./types";

const Ring = ({ className, color, gradient }: ExclusiveCircleProps) => {
    const [gradientId] = useState(
        `gradient-${Math.random().toString(36).substring(7)}`
    );

    return (
        <svg
            className={className}
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
        >
            {color ? (
                <g>
                    <circle className={color} cx="50" cy="50" r="50" />
                    <circle
                        className="fill-current text-white"
                        cx="50"
                        cy="50"
                        r="30"
                    />
                </g>
            ) : (
                <g>
                    <defs>
                        <linearGradient
                            id={gradientId}
                            x1="0%"
                            y1="0%"
                            x2="0%"
                            y2="100%"
                        >
                            <stop
                                offset="0%"
                                style={{
                                    stopColor: gradient?.start,
                                    stopOpacity: 1,
                                }}
                            />
                            {gradient?.middle && (
                                <stop
                                    offset={gradient?.middle.position}
                                    style={{
                                        stopColor: gradient?.middle.color,
                                        stopOpacity: 1,
                                    }}
                                />
                            )}
                            <stop
                                offset="100%"
                                style={{
                                    stopColor: gradient?.end,
                                    stopOpacity: 1,
                                }}
                            />
                        </linearGradient>
                    </defs>
                    <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill={`url(#${gradientId})`}
                    />
                    <circle
                        className="fill-current text-white"
                        cx="50"
                        cy="50"
                        r="30"
                    />
                </g>
            )}
        </svg>
    );
};

export default Ring;
