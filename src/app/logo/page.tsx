import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";



export default async function Logo() {
  return (
    <div className="logo-center">
      <h1 className="logo chars splitting">
        <span className="char" style={{'--font-size': (Math.floor(Math.random() * 8) + 10 + 'vw'), '--char-index': (Math.floor(Math.random() * 12)), '--random': (Math.floor(Math.random() * 9) * 100 + 100)}}>d</span>
        <span className="char" style={{'--font-size': (Math.floor(Math.random() * 8) + 10 + 'vw'),'--char-index': (Math.floor(Math.random() * 12)), '--random': (Math.floor(Math.random() * 9) * 100 + 100)}}>e</span>
        <span className="char space" style={{'--font-size': (Math.floor(Math.random() * 8) + 10 + 'vw'),'--char-index': (Math.floor(Math.random() * 12)), '--random': (Math.floor(Math.random() * 9) * 100 + 100)}}>z</span>
        <span className="char" style={{'--font-size': (Math.floor(Math.random() * 8) + 10 + 'vw'),'--char-index': (Math.floor(Math.random() * 12)), '--random': (Math.floor(Math.random() * 9) * 100 + 100)}}>w</span>
        <span className="char" style={{'--font-size': (Math.floor(Math.random() * 8) + 10 + 'vw'),'--char-index': (Math.floor(Math.random() * 12)), '--random': (Math.floor(Math.random() * 9) * 100 + 100)}}>e</span>
        <span className="char" style={{'--font-size': (Math.floor(Math.random() * 8) + 10 + 'vw'),'--char-index': (Math.floor(Math.random() * 12)), '--random': (Math.floor(Math.random() * 9) * 100 + 100)}}>r</span>
        <span className="char" style={{'--font-size': (Math.floor(Math.random() * 8) + 10 + 'vw'),'--char-index': (Math.floor(Math.random() * 12)), '--random': (Math.floor(Math.random() * 9) * 100 + 100)}}>m</span>
        <span className="char" style={{'--font-size': (Math.floor(Math.random() * 8) + 10 + 'vw'),'--char-index': (Math.floor(Math.random() * 12)), '--random': (Math.floor(Math.random() * 9) * 100 + 100)}}>e</span>
        <span className="char" style={{'--font-size': (Math.floor(Math.random() * 8) + 10 + 'vw'),'--char-index': (Math.floor(Math.random() * 12)), '--random': (Math.floor(Math.random() * 9) * 100 + 100)}}>r</span>
        <span className="char" style={{'--font-size': (Math.floor(Math.random() * 8) + 10 + 'vw'),'--char-index': (Math.floor(Math.random() * 12)), '--random': (Math.floor(Math.random() * 9) * 100 + 100)}}>s</span>
      </h1>
    </div>
  );
}
