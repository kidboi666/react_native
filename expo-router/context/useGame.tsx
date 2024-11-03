import { createContext, PropsWithChildren, useContext, useMemo, useState } from 'react'

interface IGameContext {
  answer: number
  life: number
  chosenNumbers: number[]
  addChosenNumber: (yourNumber: number) => void
  countLife: () => void
  resetAnswer: () => void
}

export const GameContext = createContext<IGameContext | null>(null)

export const useAnswer = () => {
  const context = useContext(GameContext)
  if (!context) {
    throw new Error('useAnswer는 GameProvider 안에서만 사용되어야 합니다.')
  }
  return context
}

export const generateAnswer = () => Math.floor(Math.random() * 99)

export default function GameProvider({ children }: PropsWithChildren) {
  const [answer, setAnswer] = useState(generateAnswer())
  const [life, setLife] = useState(5)
  const [chosenNumbers, setChosenNumbers] = useState<number[]>([])

  const game = useMemo(
    () => ({
      answer,
      life,
      chosenNumbers,
      addChosenNumber: (yourNumber: number) => setChosenNumbers((prev) => [...prev, yourNumber]),
      countLife: () => setLife((prev) => prev - 1),
      resetAnswer: () => setAnswer(generateAnswer()),
    }),
    [answer],
  )

  return <GameContext.Provider value={game}>{children}</GameContext.Provider>
}
