"use client";

import { useState } from "react";

export default function GeneratePage() {
  const [tab, setTab] = useState<"image" | "video">("image");
  const [mode, setMode] = useState<"simplified" | "advanced">("simplified");
  const [prompt, setPrompt] = useState("");
  const [negativePrompt, setNegativePrompt] = useState("");
  const [facePrompt, setFacePrompt] = useState("");
  const [otherTags, setOtherTags] = useState("");
  const [steps, setSteps] = useState(50);
  const [quality, setQuality] = useState("High");
  const [magic, setMagic] = useState("Normal");
  const [aspectRatio, setAspectRatio] = useState("1:1");
  const [variations, setVariations] = useState(1);
  const [regenerateFace, setRegenerateFace] = useState(false);
  const [regenerateHands, setRegenerateHands] = useState(false);
  const [selectedExtensions, setSelectedExtensions] = useState<string[]>([]);

  const extensions = [
    "E-Girls V1",
    "Gooned V1",
    "Bimbo Lips V4",
    "Titfuck V1",
    "Doggy Anal V1",
    "Futanari V4",
    "Bukkake V1",
    "RC Anal V1",
    "Hyperbimbo",
    "Pendetration HD",
  ];

  const toggleExtension = (ext: string) => {
    setSelectedExtensions((prev) =>
      prev.includes(ext) ? prev.filter((e) => e !== ext) : [...prev, ext]
    );
  };

  const handleGenerate = () => {
    alert("Geração iniciada! (Integração Hugging Face + Supabase em produção)");
    // Aqui vai a chamada real para API de geração + salvar no Supabase
  };

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-black mb-10 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Generate new
        </h1>

        {/* Tabs IMAGE/VIDEO */}
        <div className="flex border-b border-gray-800 mb-8">
          <button
            onClick={() => setTab("image")}
            className={`flex-1 py-4 text-center font-bold ${
              tab === "image"
                ? "border-b-4 border-purple-500 text-purple-400"
                : "text-gray-400"
            }`}
          >
            IMAGE
          </button>
          <button
            onClick={() => setTab("video")}
            className={`flex-1 py-4 text-center font-bold ${
              tab === "video"
                ? "border-b-4 border-purple-500 text-purple-400"
                : "text-gray-400"
            }`}
          >
            VIDEO
          </button>
        </div>

        {/* Simplified / Advanced toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-800 rounded-full p-1 flex">
            <button
              onClick={() => setMode("simplified")}
              className={`px-8 py-3 rounded-full font-bold ${
                mode === "simplified"
                  ? "bg-purple-600 text-white"
                  : "text-gray-400"
              }`}
            >
              Simplified
            </button>
            <button
              onClick={() => setMode("advanced")}
              className={`px-8 py-3 rounded-full font-bold ${
                mode === "advanced"
                  ? "bg-purple-600 text-white"
                  : "text-gray-400"
              }`}
            >
              Advanced (pro)
            </button>
          </div>
        </div>

        {/* Prompt principal */}
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Descreva sua cena (ex: beautiful woman in pink luxurious hotel room, cinematic, detailed skin pores)"
          className="w-full h-32 p-4 mb-8 bg-gray-800 rounded-xl border border-gray-700 focus:border-purple-500 focus:ring-purple-500 text-white resize-none"
        />

        {/* Negative prompt */}
        <textarea
          value={negativePrompt}
          onChange={(e) => setNegativePrompt(e.target.value)}
          placeholder="ugly, deformed, low quality, blurry, extra limbs"
          className="w-full h-24 p-4 mb-8 bg-gray-800 rounded-xl border border-gray-700 focus:border-purple-500 focus:ring-purple-500 text-white resize-none"
        />

        {/* Face prompt */}
        <textarea
          value={facePrompt}
          onChange={(e) => setFacePrompt(e.target.value)}
          placeholder="beautiful, sexy, highly detailed, skin pores"
          className="w-full h-20 p-4 mb-8 bg-gray-800 rounded-xl border border-gray-700 focus:border-purple-500 focus:ring-purple-500 text-white resize-none"
        />

        {/* Other tags */}
        <textarea
          value={otherTags}
          onChange={(e) => setOtherTags(e.target.value)}
          placeholder="smiling, sunny weather"
          className="w-full h-20 p-4 mb-8 bg-gray-800 rounded-xl border border-gray-700 focus:border-purple-500 focus:ring-purple-500 text-white resize-none"
        />

        {/* Extensions */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Extensions</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {extensions.map((ext) => (
              <button
                key={ext}
                onClick={() => toggleExtension(ext)}
                className={`p-4 rounded-xl text-center border ${
                  selectedExtensions.includes(ext)
                    ? "border-purple-500 bg-purple-900/50"
                    : "border-gray-700 bg-gray-800/50"
                } hover:border-purple-500 transition`}
              >
                {ext}
              </button>
            ))}
          </div>
        </div>

        {/* Advanced options */}
        {mode === "advanced" && (
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <label className="block text-lg font-bold mb-2">
                Aspect ratio
              </label>
              <select
                value={aspectRatio}
                onChange={(e) => setAspectRatio(e.target.value)}
                className="w-full p-4 bg-gray-800 rounded-xl border border-gray-700 text-white"
              >
                <option>1:1</option>
                <option>4:3</option>
                <option>16:9</option>
                <option>9:16</option>
                <option>2:3</option>
              </select>
            </div>

            <div>
              <label className="block text-lg font-bold mb-2">
                Steps: {steps}
              </label>
              <input
                type="range"
                min="20"
                max="100"
                value={steps}
                onChange={(e) => setSteps(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-lg font-bold mb-2">Quality</label>
              <select
                value={quality}
                onChange={(e) => setQuality(e.target.value)}
                className="w-full p-4 bg-gray-800 rounded-xl border border-gray-700 text-white"
              >
                <option>Normal</option>
                <option>High</option>
                <option>Very High</option>
              </select>
            </div>

            <div>
              <label className="block text-lg font-bold mb-2">Magic</label>
              <select
                value={magic}
                onChange={(e) => setMagic(e.target.value)}
                className="w-full p-4 bg-gray-800 rounded-xl border border-gray-700 text-white"
              >
                <option>None</option>
                <option>Normal</option>
                <option>High</option>
              </select>
            </div>
          </div>
        )}

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-6 rounded-xl font-black text-2xl shadow-2xl transition-all"
        >
          Generate for 4.39 créditos
        </button>
      </div>
    </div>
  );
}
