import { component$ } from '@builder.io/qwik';

const subjects = [
    {
        name: 'Mathematiques'
    },
    {
        name: 'Physique'
    },
    {
        name: 'Chimie'
    },
    {
        name: 'S . V . T'
    },
    {
        name: 'Histoire'
    },
    {
        name: 'Geographie'
    },
    {
        name: 'Francais'
    },
    {
        name: 'Anglais'
    },
    {
        name: 'Philosophie'
    },
    {
        name: 'Mathematiques'
    }
]

export default component$(() => {
    return (
        <section id="courses" class="scrollable">
            {
                subjects.map((subject) =>{
                    return (
                        <div class="course" key={subject.name}>
                            <div class="illustration">
                                <div class="module">Maths</div>
                            </div>
                            <div class="title">
                                <p>{subject.name}</p>
                            </div>
                            <div class="progress">
                                <div class="bar"></div>
                                <p>Progression : <span>50%</span></p>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    );
});