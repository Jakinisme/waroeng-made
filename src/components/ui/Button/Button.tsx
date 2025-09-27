import type React from "react";
import useInteractionObserver from "../../../hooks/useInteractionObserver";
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
    const { ref, isIntersecting } = useInteractionObserver({
        threshold: 0.1,
        rootMargin: '0px',  
        triggerOnce: true
    });

    const classes = [styles.button, styles[variant], fullWidth ? styles.fullWidth : undefined, isIntersecting ? styles.visible : '', className]
        .filter(Boolean)
        .join(" ");

    return (
        <button ref={ref} type={type ? type : "button"} className={classes} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;