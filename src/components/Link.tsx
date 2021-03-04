import React from "react";

interface LinkProps  {
    href: string,
    className: string,
    children: string
}

const Link = (props: LinkProps) : JSX.Element=> {

    const onClickHandler = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void =>{
        event.preventDefault();
        window.history.pushState(null, "", props.href)

        const navEvent = new PopStateEvent("popstate")
        window.dispatchEvent(navEvent)
    }

    return(
    <a className={props.className}  href={props.href} onClick={onClickHandler}>{props.children}</a>)
}
export default Link