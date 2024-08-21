import { component$, useStore, useSignal, $ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { Message } from '~/components/message';

export default component$(() => {
    const message: any = useStore({ message: undefined, status: "error" });
    const isLoading = useSignal(false);
    // Handle sign-up
    const handleSignup = $(async (event: any) => {
        // Initialize resets
        message.message = undefined;
        message.status = "error";
        isLoading.value = true;
        const isTerms = event.target.terms.checked

        if(!isTerms) {
            message.message = "Vous devez accepter pour continuer";
            isLoading.value = false;
            return
        }
    })

    return (
        <section id="sign-up">
            <form onSubmit$={handleSignup} preventdefault:submit>
                <Link href="/">Acceuil</Link>
                <div class="auth">
                    <span>
                        <label for="Last_name">Noms</label>
                        <input type="text" name="last_name" id="last_name" placeholder="ex: RABEKOTO" required />
                    </span>

                    <span>
                        <label for="first_name">Prénoms</label>
                        <input type="text" name="first_name" id="first_name" placeholder="ex: Aon" required />
                    </span>

                    <span>
                        <label for="birth_day">Date de naissance</label>
                        <input type="date" name="birth_day" id="birth_day" required />
                    </span>

                    {/* <label for="gender">Genre</label>
                <input type="radio" name="gender" id="male" />
                <input type="radio" name="gender" id="female" /> */}

                    <span>
                        <label for="class">Classe</label>
                        <select name="class" id="class" required>
                            <option value="">_ _ _</option>
                            <option value="T-A1">Terminale A1</option>
                            <option value="T-A2">Terminale A2</option>
                            <option value="T-l">Terminale L</option>
                            <option value="T-ose">Terminale OSE</option>
                            <option value="T-s">Terminale S</option>
                            <option value="T-c">Terminale C</option>
                            <option value="T-D">Terminale D</option>
                            <option value="3em">3 ème</option>
                        </select>
                        <div class="arrow"></div>
                    </span>

                    <span>
                        <label for="province">Provinces</label>
                        <select name="province" id="province" required>
                            <option value="">_ _ _</option>
                            <option value="tananarive">Tananarive</option>
                            <option value="diego-suarez">Diego-Suarez</option>
                            <option value="fianarantsoa">Fianarantsoa</option>
                            <option value="majunga">Majunga</option>
                            <option value="tamatave">Tamatave</option>
                            <option value="tulear">Tuléar</option>
                        </select>
                        <div class="arrow"></div>
                    </span>

                    <span>
                        <label for="email">E-mail</label>
                        <input type="email" name="email" id="email" required />
                    </span>

                    <span>
                        <label for="password">Mots de passe</label>
                        <input type="password" name="password" id="password" required />
                    </span>

                    <span>
                        <label for="password-check">Confirmer …</label>
                        <input type="password-check" name="password-check" id="password-check" required />
                    </span>
                </div>

                <span class="terms">
                    <label for="terms">Accepter les termes etc…</label>
                    <input type="checkbox" name="terms" id="terms" />
                </span>

                <button disabled={isLoading.value}>S'inscrire</button>

                <p>Vous avez déjà un compte ? <Link class="sign">Se connecter</Link></p>

                <Message message={message} />
            </form>
            <div class="illustration-slider">

            </div>
        </section>
    );
});