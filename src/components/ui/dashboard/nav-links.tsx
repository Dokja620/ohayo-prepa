import { component$ } from '@builder.io/qwik';
import { Link, useLocation } from '@builder.io/qwik-city';
import { LuBarChart2, LuBookOpenText, LuGraduationCap, LuHome, LuMessageCircle, LuUser2, LuWallet } from "@qwikest/icons/lucide";

const links = [
    {
        name: 'Acceuil',
        href: '/dashboard/',
        icon: LuHome
    },
    {
        name: 'Cours',
        href: '/dashboard/courses',
        icon: LuBookOpenText
    },
    {
        name: 'Rangs',
        href: '/dashboard/ranking',
        icon: LuBarChart2
    },
    {
        name: 'Examens',
        href: '/dashboard/exams',
        icon: LuGraduationCap
    },
    {
        name: 'Communauté',
        href: '/dashboard/community',
        icon: LuMessageCircle
    },
    {
        name: 'Profile',
        href: '/dashboard/profile',
        icon: LuUser2
    },
    {
        name: 'Boutique',
        href: '/dashboard/marketplace',
        icon: LuWallet
    }
]

export const Navlink = component$(() => {
    const location = useLocation();
    const pathname = location.url.pathname;

    console.log("Current pathname:", pathname);

    return (
        <div class="links">
            {
                links.map((link) => {
                    const LinkIcon = link.icon;
                    const isActive = 
                        (link.href === '/dashboard' && pathname === '/dashboard') || // Exact match for Acceuil
                        (link.href !== '/dashboard' && pathname.startsWith(link.href)); // Other links

                    return(
                        <Link 
                            key={link.name} 
                            href={link.href} 
                            class={"nav-link" + (isActive ? " active-link" : "")}>
                            <LinkIcon class="icon"/>
                            <p>{link.name}</p>
                        </Link>
                    )
                })
            }
        </div>
    )
});
