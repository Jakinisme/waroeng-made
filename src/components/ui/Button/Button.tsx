import type React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
    type?: "button" | "submit";
    className?: string;
    onClick?: () => void;
    fullWidth?: boolean;
}

const Button = (props: ButtonProps) => {
    const { children, className, type, onClick, variant = "primary", fullWidth } = props;

    const classes = [styles.button, styles[variant], fullWidth ? styles.fullWidth : undefined, className]
        .filter(Boolean)
        .join(" ");

    return (
        <button type={type ? type : "button"} className={classes} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;