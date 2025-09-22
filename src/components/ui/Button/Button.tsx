import type React from "react";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
    type?: "button" | "submit";
    className?: string;
    onClick?: () => void;
}

const Button = (props: ButtonProps) => {
    const { children, className, type, onClick } = props;

    return (
        <button type={type ? type : "button"} className={className} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;