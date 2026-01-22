import { HfInference } from "@huggingface/inference";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { prompt, style } = await req.json();
  const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

  let result;
  if (style === "Fotorrealista") {
    result = await hf.textToImage({
      model: "stabilityai/stable-diffusion-xl-base-1.0",
      inputs: prompt + " NSFW adult content",
    });
  } else if (style === "Anime") {
    result = await hf.textToImage({
      model: "andite/anything-v4.0",
      inputs: prompt + " anime style NSFW",
    });
  } else {
    // Híbrido: Gere fotorreal, então refine
    const base = await hf.textToImage({
      model: "stabilityai/stable-diffusion-xl-base-1.0",
      inputs: prompt,
    });
    result = await hf.imageToImage({
      model: "andite/anything-v4.0",
      inputs: base,
      prompt: "anime hybrid",
    });
  }

  // Para vídeo: await hf.textToVideo({ model: 'cerspense/zeroscope_v2_XL', inputs: prompt })

  // Salve result (blob) em storage ou retorne URL
  return NextResponse.json({ imageUrl: "url_gerada" }); // Integre com storage grátis como Vercel Blob
}
