import { getBlogPosts } from "@/api/content-service";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Jobs from "./components/Jobs";

export default async function Home() {
  const posts = await getBlogPosts();
  const jobs = posts.items;

  return (
    <>
      <Hero />
      <About />
      <Jobs jobs={jobs} />
      <Contact />
    </>
  );
}
