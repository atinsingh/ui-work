
import { Link } from "gatsby"
import React from "react"
const NavButton = ({href,children, text })=>(
        <Link  to={href} className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-sky-800 hover:text-sky-700" >
            {children}
        </Link>
) 
export default NavButton;