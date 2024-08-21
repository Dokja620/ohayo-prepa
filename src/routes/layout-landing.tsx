import { component$, Slot } from "@builder.io/qwik";
import { Footer } from "~/components/router-head/footer";
import { Header } from "~/components/router-head/header";

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});