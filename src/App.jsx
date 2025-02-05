import { useState } from "react";
import lovesvg from "./assets/All You Need Is Love SVG Cut File.svg";
import lovesvg2 from "./assets/Love In The Air SVG Cut File.svg";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "¿Segura, segura? 🥺",
      "Pero... ¿y si San Valentin es tu destino? 💖",
      "Solo imagina lo lindo que sería 🥰",
      "Me haría muy feliz si lo reconsideraras ✨",
      "Un pequeño cambio... un gran impacto en mi corazón 💕",
      "Sería el mejor regalo del mundo 🎁",
      "No quiero presionarte, pero... ¿seguro que no? 🥺👉👈",
      "San Valentin suena tan bonito contigo 🌸",
      "Dale una oportunidad, solo una, por mí 😚",
      "Te haría la persona más especial del universo 🌍💖",
      "Si aceptas, te prometo que será mágico ✨",
      "¿Y si solo lo intentas un poquito? 😌",
      "No puedo imaginar a alguien mejor para ser San Valentin 🥹",
      "Porfa, porfa, porfa... ¿sí? 😍",
      "No sabes lo feliz que me harías... ¡por favorcito! 🥺💕",
      "Piensa en lo bonito que sonaría... San Valentin y tú 💖",
      "Si aceptas, prometo celebrarlo con alegría infinita 🥳🎈",
      "Mi corazoncito se romperá si dices que no 💔🥹",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="text-4xl md:text-6xl font-bold my-4">
            Ohhh Shiiii Te Amo mi Reina Peciosha 🥹❤️!!!
          </div>
        </>
      ) : (
        <>
          <img
            src={lovesvg}
            className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
          />
          <img
            src={lovesvg2}
            className="fixed bottom-16 -z-10 animate-pulse md:right-24 right-10 md:w-40 w-32"
          />
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-Love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
          Te gustaría ser Mi San Valentin mi Reina?🥹❤️
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Sí
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <a
      className="fixed bottom-2 right-2 backdrop-blur-md opacity-80 hover:opacity-95 border p-1 rounded border-rose-300"
      href="https://github.com/Xeven777/valentine"
      target="__blank"
    >
      Made with{" "}
      <span role="img" aria-label="heart">
        ❤️
      </span>
    </a>
  );
};
