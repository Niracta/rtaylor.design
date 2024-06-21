import type { APIRoute } from "astro";
import { getImage } from "astro:assets";
import favicon from "../assets/logos/logo.png";

const faviconPngSizes = [192, 512];

export const GET: APIRoute = async () => {
  const icons = await Promise.all(
    faviconPngSizes.map(async (size) => {
      const image = await getImage({
        src: favicon,
        width: size,
        height: size,
        format: `png`
      });
      return {
        src: image.src,
        type: `image/${image.options.format}`,
        sizes: `${image.options.width}x${image.options.height}`,
        ...(size === 512 ? { purpose: `maskable` } : {})
      };
    })
  );

  const manifest = {
    name: `Rachel Taylor Design`,
    short_name: `Rachel Taylor Design`,
    description: `Personal graphic design and illustration portfolio of Rachel Taylor.`,
    start_url: `/`,
    background_color: `#fff`,
    theme_color: `#D9027D`,
    display: `standalone`,
    icon: `/logos/logo.png`,
    icons
  };

  return new Response(JSON.stringify(manifest), {
    headers: { "Content-Type": `application/json` }
  });
};
