import { useState } from "react";
import bugImg from '../../assets/bug.svg'
import ideaImg from '../../assets/idea.svg'
import thoughtImg from '../../assets/thought.svg'
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
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

export type FeedbackType = keyof typeof feedbackTypes

export function WidgetForm() {
  const [feedbackType, setFeedbackTypes] = useState<FeedbackType | null>(null);

  function handleRestartFeedback() {
    setFeedbackTypes(null)
  }

  return (
    <div
      className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto"
    >

      {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackTypes} />
      ) : (
        <FeedbackContentStep
          feedbackType={feedbackType}
          onFeedbackRestart={handleRestartFeedback}
        />
      )}

      <footer className="text-xs text-neutral-400">
        Feito com ❤ pela <a className="underline underline-offset-2" href="https://codeincoffee.com.br/" target='_blank'>Code in Coffe</a>
      </footer>
    </div>
  );
}