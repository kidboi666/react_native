import { createContext, PropsWithChildren, useCallback, useContext, useMemo, useState } from 'react'

interface IGameContext {
  answer: number
  life: number
  chosenNumbers: number[]
  addChosenNumber: (yourNumber: number) => void
  countLife: () => void
  initAnswer: () => void
}

export const GameContext = createContext<IGameContext>({
  answer: 0,
  life: 5,
  chosenNumbers: [],
  addChosenNumber: () => null,
  countLife: () => null,
  initAnswer: () => null,
})

export const useAnswer = () => {
  return useContext(GameContext)
}

export const initAnswer = useCallback(() => {
  return Math.floor(Math.random() * 99)
}, [])

export default function GameProvider({ children }: PropsWithChildren) {
  const [answer, setAnswer] = useState(initAnswer())
  const [life, setLife] = useState(5)
  const [chosenNumbers, setChosenNumbers] = useState<number[]>([])

  const game = useMemo(
    () => ({
      answer,
      life,
      chosenNumbers,
      addChosenNumber: (yourNumber: number) => setChosenNumbers((prev) => [...prev, yourNumber]),
      countLife: () => setLife((prev) => prev - 1),
      initAnswer: () => setAnswer(initAnswer()),
    }),
    [answer, life, chosenNumbers],
  )

  return <GameContext.Provider value={game}>{children}</GameContext.Provider>
}
