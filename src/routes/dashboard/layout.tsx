import { component$, Slot } from '@builder.io/qwik';
import { Sidenav } from '~/components/ui/dashboard/sidenav';

export default component$(() => {
  return (
    <section id="dashboard">
        <Sidenav/>
        <Slot />
    </section>
  );
});