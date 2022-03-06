
import { Link } from "gatsby"
import React from "react"
const NavLink = ({ 
            to, 
            children, 
            style='text-base font-medium text-white hover:text-gray-700', 
            as='link',
            href
        })=>(
    <Link  to={href} className={style} >
        {children}
    </Link>
)
// NavLink.propTypes = {
//     to: PropTypes.string.isRequired,
//     style: PropTypes.string.isRequired,
//     as: PropTypes.string.isRequired
// }
export default NavLink;