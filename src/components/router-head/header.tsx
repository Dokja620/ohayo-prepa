import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export const Header = component$(() => {

  return (
    <header>
        <nav>
            <Link href="/" class="logo"><span class="first">OHAYO</span><span class="second">Prepa</span></Link>
            
            <ul>
                <li><Link href="/sign-in" class="sign-in">Se connecter</Link></li>
                <li><Link href="/sign-up" class="sign-up">Créer un compte</Link></li>
            </ul>
        </nav>
    </header>
  );
});
