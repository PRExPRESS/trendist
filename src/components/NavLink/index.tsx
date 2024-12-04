import React from 'react'
import { Link } from 'react-router-dom'


interface NavLinkProps {
    label: string
    href: string
    active: boolean
    icon?: React.ReactNode
}

const NavLink = ({ label, href, active, icon }: NavLinkProps) => {
  return (
    <div className={`flex flex-col items-center  ${active ? 'text-black' : 'text-gray-500'}`}>
      <Link to={href} className="  nav-link nav-link::after">
        {icon ? (
          <div className="w-6 h-6">{icon}</div>
        ) : (
          <span className=" 
          ">{label}</span>
        )}
      </Link>
    </div>
  )
}

export default NavLink
