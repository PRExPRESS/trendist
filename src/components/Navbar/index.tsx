
import NavLink from '../NavLink'

const Navbar = () => {
    const navLinks =[
        {
            label: 'Home',
            href: '/',
            active: false
        },
        {
            label: 'Shop',
            href: '/shop',
            active: false
        },
        {
            label: 'About',
            href: '/about',
            active: false
        },
        {
            label: 'Contact',
            href: '/contact',
            active: false
        },
        
    ]
  return (
    <div className='flex flex-row justify-between items-center w-full text-black ' >
      {
        navLinks.map((link) => (
            <NavLink key={link.label} label={link.label} href={link.href} active={link.active} />
        ))
      }
    </div>
  )
}

export default Navbar
