import { HfInference } from "@huggingface/inference";
import { NextRequest, NextResponse } from "next/server";

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { prompt, style = "fotorrealista", baseImage } = body;

    let result;

    if (baseImage) {
      // Converte base64 ou URL para Blob (obrigatório para image-to-image)
      const imageBlob = await fetch(baseImage).then((res) => res.blob());

      result = await hf.imageToImage({
        model: "andite/anything-v4.0", // modelo que aceita image-to-image
        inputs: imageBlob,
        parameters: {
          prompt,
          negative_prompt: "ugly, deformed, low quality",
          num_inference_steps: 50,
          guidance_scale: 7.5,
        },
      });
    } else {
      // Text-to-image normal
      result = await hf.textToImage({
        model: "andite/anything-v4.0",
        inputs: prompt,
        parameters: {
          negative_prompt: "ugly, deformed, low quality",
          num_inference_steps: 50,
          guidance_scale: 7.5,
        },
      });
    }

    // Retorna a imagem como base64 para o frontend
    const buffer = Buffer.from(await result.arrayBuffer());
    const base64Image = buffer.toString("base64");

    return NextResponse.json({
      imageUrl: `data:image/png;base64,${base64Image}`,
    });
  } catch (error) {
    console.error("Erro na geração:", error);
    return NextResponse.json(
      { error: "Erro ao gerar imagem" },
      { status: 500 }
    );
  }
}
