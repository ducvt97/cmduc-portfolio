"use client";

import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import Projects from "@/components/Home/Projects";
import Services from "@/components/Home/Services";
import Skills from "@/components/Home/Skills";
import { useCallback, useEffect, useRef } from "react";

export default function Home() {
  const sections = useRef<NodeListOf<HTMLElement>>();
  const links = useRef<NodeListOf<HTMLElement>>();
  const headerHeight = useRef<number>(0);

  useEffect(() => {
    sections.current = document.querySelectorAll("section");
    links.current = document.querySelectorAll("nav a");
    headerHeight.current =
      document.querySelector(".header-wrapper")?.scrollHeight || 0;
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onScroll = useCallback((_: any) => {
    const { scrollY: top } = window;
    console.log(headerHeight.current);

    sections.current!.forEach((section) => {
      const { offsetTop: offset, offsetHeight: height, id } = section;
      if (
        top + headerHeight.current >= offset &&
        top + headerHeight.current < offset + height
      ) {
        links.current!.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href")?.replace("#", "") === id) {
            link.classList.add("active");
          }
        });
      }
    });
  }, []);

  return (
    <main className="">
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
    </main>
  );
}
