// https://kremalicious.com/favicon-generation-with-astro/
import path from "node:path";
import type { APIRoute } from "astro";
import sharp from "sharp";
import ico from "sharp-ico";
import favicon from "../assets/logos/logo.png"

export const GET: APIRoute = async () => {
  const buffer = await sharp(favicon.src).resize(32).toFormat(`png`).toBuffer();
  const icoBuffer = ico.encode([buffer]);

  return new Response(icoBuffer, {
    headers: { "Content-Type": `image/x-icon` }
  });
};
