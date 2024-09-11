import { createElement } from "react";
import cn from "classnames";

const Container = ({ tag , containerClassName , wrapperClasName , children }) => {
    return createElement(
        tag,
        {
            className:cn("py-7 px-6", containerClassName)
        },
        <div className={cn("container mx-auto", wrapperClasName ) } >
            { children }
        </div>

    );
};
export default Container;