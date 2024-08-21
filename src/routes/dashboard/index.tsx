import { component$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
    return (
        <section id="home" class="scrollable">
            <div class="overview">
                <div class="greet">
                    <div class="profile"></div>
                    <div class="text">
                        <p>Welcome back</p>
                        <h4>Aon RABEKOTO</h4>
                        <p>Ready to get back to your learning journey ?</p>
                    </div>
                    <div class="points">
                        <h4>150 points</h4>
                        <Link>Voir le classement</Link>
                    </div>
                </div>
                <div class="rank">
                    <p>You're actually,</p>
                    <h5>10 out of 10000</h5>
                </div>
                <div class="level">
                    <p>Your level</p>
                    <h5>50 lv | 5000 xp</h5>
                </div>
            </div>

            <div class="ongoing">
                <h4>Courses stats</h4>
                <div class="list">
                    <div class="course">
                        <div class="illustration">
                            <div class="module">Maths</div>
                        </div>
                        <div class="title">
                            <p>Chap 01 : Function and stuff</p>
                        </div>
                        <div class="progress">
                            <div class="bar"></div>
                            <p>Progression : <span>50%</span></p>
                        </div>
                    </div>
                    <div class="explore">
                        <p>Explorer …</p>
                    </div>
                </div>
            </div>
        </section>
    );
});