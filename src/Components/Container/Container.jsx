// Import React
import React from "react";

// Import Style
import "../Container/Container.scss";

function Container({ children, className }) {
    return <div className={'container ' + className}>{children}</div>
}

export default Container