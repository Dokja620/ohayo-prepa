import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { Navlink } from './nav-links';
import { LuMoonStar, LuSunMedium } from "@qwikest/icons/lucide";

const themes = [
    {
        name: 'light',
        icon: LuSunMedium
    },
    {
        name: 'dark',
        icon: LuMoonStar
    }
]
export const Sidenav = component$(() => {
  return (
    <div id="sidenav">
        <Link class="logo"><span class="first">OHAYO</span><span class="second">Prepa</span></Link>

        <Navlink/>

        <form>
            <div class="theme">
                {
                    themes.map((themes) => {
                        const ThemeIcon = themes.icon;
                        return(
                            <button key={themes.name}>
                                {/* <ThemeIcon class="icon"/> */}
                                <p>{themes.name}</p>
                            </button>
                        )
                    })
                }
            </div>
            <button>Se deconnecter</button>
        </form>
    </div>
  )
});