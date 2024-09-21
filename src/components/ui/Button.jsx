import cn from "classnames";
import PropTypes from "prop-types";
import Icon from "@/components/ui/Icon";
const style = {
    fill: {
        primary: cn(
            "bg-ac-primary text-white [&>svg>*]:fill-white ",
            "hover:bg-ac-shade-600",
            "disabled:bg-ac-tint-200 disabled:text-ac-tint-500 ",
            "disabled:[&>svg>*]:fill-ac-tint-500"
        ),
        gray: cn(
            "bg-gray-900 text-white [&>svg>*]:fill-white",
            "hover:bg-gray-950",
            "disabled:bg-gray-300 disabled:text-gray-600",
            "disabled:[&>svg>*]:fill-gray-600"

        )
    },
    outline: {
        primary: cn(
            "bg-transparent border-ac-primary text-ac-primary",
            "[&>svg>*]:fill-ac-primary",
            "hover:border-ac-shade-600 hover:text-ac-shade-600",
            "hover:[&>svg>*]:fill-ac-shade-600",
            "disabled:border-ac-tint-500 disabled:text-ac-tint-500",
            "disabled:[&>svg>*]:fill-ac-tint-500"

        ),
        gray: cn(
            "bg-transparent border-gray-900 text-gray-900",
            "[&>svg>*]:fill-gray-900",
            "hover:border-gray-950 text-gray-950 hover:[&>svg>*]:fill-gray-950",
            "disabled:border-gray-600text-gray-600",
            "disabled:[&>svg>*]:fill-gray-600"

        )
    },
    text: {
        primary: cn(
            "bg-transparent border-transparent text-ac-primary",
            "[&>svg>*]:fill-ac-primary",
            "hover:text-ac-shade-600 hover:[&>svg>*]:fill-ac-shade-600",
            "disabled:text-ac-tint-500 disabled:[&>svg>*]:fill-ac-tint-500"

        ),
        gray: cn(
            "bg-transparent border-transparent text-gray-900",
            "[&>svg>*]:fill-gray-900",
            "hover:text-gray-950 hover:[&>svg>*]:fill-gray-950",
            "disabled:text-gray-600 disabled:[&>svg>*]:fill-gray-600"

        )
    }
}

const sizes = {
    sm: "py-2 px-3 caption-4",
    md: "py-2 px-6 button-2",
    lg: "py-3 px-6 button-2"
}


const Button = ({
    variant = "fill",
    color = "primary",
    size = "lg",
    text,
    rightIcon,
    iconLeft,
    disabled,
    className,
    ...rest
}) => {

    return (

        <button type="button"
            disabled={disabled}
            className={cn(
                "flex items-center gap-x-1 border rounded-lg whitespace-nowrap cursor-pointer",
                style[variant][color],
                size !== "custom" && sizes[size],
                disabled && "cursor-not-allowed",
                className
            )}
            {...rest}>


            {rightIcon && <Icon name={rightIcon} size={size === "sm" ? "md" : "lg"} />}
            {text}
            {iconLeft && <Icon name={iconLeft} size={size === "sm" ? "md" : "lg"} />}

        </button>

    );
};


Button.propTypes = {
    variant: PropTypes.oneOf(["fill", "outline", "text"]),
    color: PropTypes.oneOf(["primary", "gray"]),
    size: PropTypes.oneOf(["sm", "md", "lg", "custom"]),
    rightIcon: PropTypes.string,
    leftIcon: PropTypes.string,
    text: PropTypes.string.isRequired,
    href: PropTypes.string,
    disabled: PropTypes.bool,
    // onClick: PropTypes.func,
    className: PropTypes.string
}
export default Button;