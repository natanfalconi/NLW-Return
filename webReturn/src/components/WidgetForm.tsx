import { CloseButton } from "./CloseButton";

import bugImg from '../assets/bug.svg'
import ideaImg from '../assets/idea.svg'
import thoughtImg from '../assets/thought.svg'

const feadbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImg,
      alt: 'Imagem de um inseto'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImg,
      alt: 'Imagem de uma lâmpada'
    }
  },
  OTHER: {
    title: 'Outro',
    image: {
      source: thoughtImg,
      alt: 'Imagem de um balão de pensamento'
    }
  },
}

export function WidgetForm() {
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      <header>
        <span className="text-xl leading-6">Deixe seu feedback</span>
        <CloseButton />
      </header>

      <div className="flex py-8 gap-2 w-full">
        {Object.entries(feadbackTypes).map(([key, value]) => {
          return (
            <button
              className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500 focus:outline-none"
              // onClick={}
              key={key}
              type='button'
            >
              <img src={value.image.source} alt={value.image.alt} />
              <span>{value.title}</span>
            </button>
          );
        })}
      </div>

      <footer className="text-xs text-neutral-400">
        Feito com ❤ pela <a className="underline underline-offset-2" href="https://codeincoffee.com.br/" target='_blank'>Code in Coffe</a>
      </footer>
    </div>
  );
}