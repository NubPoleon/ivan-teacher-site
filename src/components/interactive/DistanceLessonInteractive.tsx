"use client"

import { useEffect, useState } from "react"

type Props = {
  lessonSlug: string
}

function normalize(value: string) {
  return value.replaceAll(" ", "").replaceAll(",", ".").trim().toLowerCase()
}

function randomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function sameObject(a: Record<string, string | number>, b: Record<string, string | number>) {
  return JSON.stringify(a) === JSON.stringify(b)
}

function createDifferentTask<T extends Record<string, string | number>>(
  previous: T | null,
  generator: () => T,
) {
  let next = generator()
  let guard = 0

  while (previous && sameObject(previous, next) && guard < 20) {
    next = generator()
    guard += 1
  }

  return next
}

type NumberSystemsTask = {
  decimal: number
  binary: string
  hex: string
  correct1: string
  correct2: string
  correct3: string
}

function generateNumberSystemsTask(): NumberSystemsTask {
  const decimal = randomInt(10, 63)
  const binarySourceNumber = randomInt(5, 31)
  const binary = binarySourceNumber.toString(2)
  const hexPool = ["A", "B", "C", "D", "E", "F"]
  const hex = hexPool[randomInt(0, hexPool.length - 1)]

  return {
    decimal,
    binary,
    hex,
    correct1: decimal.toString(2),
    correct2: String(parseInt(binary, 2)),
    correct3: parseInt(hex, 16).toString(2),
  }
}

type LinearTask = {
  k: number
  b: number
  x1: number
  x2: number
  correct1: string
  correct2: string
  correct3: string
}

function generateLinearTask(): LinearTask {
  let k = 0
  while (k === 0) {
    k = randomInt(-4, 4)
  }

  const b = randomInt(-6, 6)
  const x1 = randomInt(-3, 5)
  const x2 = randomInt(-3, 5)

  return {
    k,
    b,
    x1,
    x2,
    correct1: String(k * x1 + b),
    correct2: String(k * x2 + b),
    correct3: String(b),
  }
}

function ExerciseShell({
  title,
  description,
  children,
  onRefresh,
  checked,
  score,
  total,
  onCheck,
  onReset,
}: {
  title: string
  description: string
  children: React.ReactNode
  onRefresh: () => void
  checked: boolean
  score: number
  total: number
  onCheck: () => void
  onReset: () => void
}) {
  return (
    <section className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-semibold text-neutral-950">{title}</h2>
          <p className="mt-3 text-sm leading-6 text-neutral-600">{description}</p>
        </div>

        <button
          onClick={onRefresh}
          className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
        >
          Новое задание
        </button>
      </div>

      <div className="mt-6 grid gap-4">{children}</div>

      <div className="mt-6 flex flex-wrap gap-3">
        <button
          onClick={onCheck}
          className="rounded-full border border-black/10 bg-neutral-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
        >
          Проверить ответы
        </button>

        <button
          onClick={onReset}
          className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-neutral-900 transition hover:bg-neutral-100"
        >
          Очистить ответы
        </button>
      </div>

      {checked ? (
        <div className="mt-6 rounded-[22px] border border-black/10 bg-neutral-50 p-5">
          <h3 className="text-base font-semibold text-neutral-950">Результат</h3>
          <p className="mt-2 text-sm leading-6 text-neutral-600">
            Правильно: {score} из {total}
          </p>
        </div>
      ) : null}
    </section>
  )
}

function QuestionCard({
  label,
  value,
  onChange,
  placeholder,
  checked,
  isCorrect,
  correctAnswer,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  placeholder: string
  checked: boolean
  isCorrect: boolean
  correctAnswer: string
}) {
  return (
    <div className="rounded-[22px] border border-black/10 bg-neutral-50 p-5">
      <label className="block text-sm font-medium text-neutral-900">{label}</label>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-3 w-full rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm outline-none transition focus:border-neutral-400"
      />

      {checked ? (
        <p className={`mt-3 text-sm ${isCorrect ? "text-green-700" : "text-red-700"}`}>
          {isCorrect ? "Верно" : `Неверно. Правильный ответ: ${correctAnswer}`}
        </p>
      ) : null}
    </div>
  )
}

function LoadingExercise() {
  return (
    <section className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-neutral-950">Интерактивное упражнение</h2>
      <p className="mt-3 text-sm leading-6 text-neutral-600">
        Подготовка задания...
      </p>
    </section>
  )
}

function NumberSystemsExercise() {
  const [task, setTask] = useState<NumberSystemsTask | null>(null)
  const [answer1, setAnswer1] = useState("")
  const [answer2, setAnswer2] = useState("")
  const [answer3, setAnswer3] = useState("")
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setTask(generateNumberSystemsTask())
  }, [])

  if (!task) {
    return <LoadingExercise />
  }

  const result1 = normalize(answer1) === normalize(task.correct1)
  const result2 = normalize(answer2) === normalize(task.correct2)
  const result3 = normalize(answer3) === normalize(task.correct3)
  const score = Number(result1) + Number(result2) + Number(result3)

  const refresh = () => {
    setTask((prev) => createDifferentTask(prev, generateNumberSystemsTask))
    setAnswer1("")
    setAnswer2("")
    setAnswer3("")
    setChecked(false)
  }

  const reset = () => {
    setAnswer1("")
    setAnswer2("")
    setAnswer3("")
    setChecked(false)
  }

  return (
    <ExerciseShell
      title="Интерактивное упражнение"
      description="Каждый раз генерируются новые числа. Можно решать заново и сразу проверять себя."
      onRefresh={refresh}
      checked={checked}
      score={score}
      total={3}
      onCheck={() => setChecked(true)}
      onReset={reset}
    >
      <QuestionCard
        label={`1. Переведи число ${task.decimal} из десятичной системы в двоичную`}
        value={answer1}
        onChange={setAnswer1}
        placeholder="Например: 10110"
        checked={checked}
        isCorrect={result1}
        correctAnswer={task.correct1}
      />

      <QuestionCard
        label={`2. Переведи число ${task.binary} из двоичной системы в десятичную`}
        value={answer2}
        onChange={setAnswer2}
        placeholder="Например: 19"
        checked={checked}
        isCorrect={result2}
        correctAnswer={task.correct2}
      />

      <QuestionCard
        label={`3. Переведи число ${task.hex} из шестнадцатеричной системы в двоичную`}
        value={answer3}
        onChange={setAnswer3}
        placeholder="Например: 1111"
        checked={checked}
        isCorrect={result3}
        correctAnswer={task.correct3}
      />
    </ExerciseShell>
  )
}

function LinearFunctionsExercise() {
  const [task, setTask] = useState<LinearTask | null>(null)
  const [answer1, setAnswer1] = useState("")
  const [answer2, setAnswer2] = useState("")
  const [answer3, setAnswer3] = useState("")
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    setTask(generateLinearTask())
  }, [])

  if (!task) {
    return <LoadingExercise />
  }

  const result1 = normalize(answer1) === normalize(task.correct1)
  const result2 = normalize(answer2) === normalize(task.correct2)
  const result3 = normalize(answer3) === normalize(task.correct3)
  const score = Number(result1) + Number(result2) + Number(result3)

  const refresh = () => {
    setTask((prev) => createDifferentTask(prev, generateLinearTask))
    setAnswer1("")
    setAnswer2("")
    setAnswer3("")
    setChecked(false)
  }

  const reset = () => {
    setAnswer1("")
    setAnswer2("")
    setAnswer3("")
    setChecked(false)
  }

  return (
    <ExerciseShell
      title="Интерактивное упражнение"
      description="Условия меняются автоматически. Формула и значения x каждый раз новые."
      onRefresh={refresh}
      checked={checked}
      score={score}
      total={3}
      onCheck={() => setChecked(true)}
      onReset={reset}
    >
      <div className="rounded-[22px] border border-black/10 bg-neutral-50 p-5">
        <p className="text-sm leading-6 text-neutral-700">
          Работай с функцией{" "}
          <span className="font-semibold text-neutral-950">
            y = {task.k}x {task.b >= 0 ? `+ ${task.b}` : `- ${Math.abs(task.b)}`}
          </span>
        </p>
      </div>

      <QuestionCard
        label={`1. Найди значение y при x = ${task.x1}`}
        value={answer1}
        onChange={setAnswer1}
        placeholder="Введите число"
        checked={checked}
        isCorrect={result1}
        correctAnswer={task.correct1}
      />

      <QuestionCard
        label={`2. Найди значение y при x = ${task.x2}`}
        value={answer2}
        onChange={setAnswer2}
        placeholder="Введите число"
        checked={checked}
        isCorrect={result2}
        correctAnswer={task.correct2}
      />

      <QuestionCard
        label="3. Чему равен коэффициент b"
        value={answer3}
        onChange={setAnswer3}
        placeholder="Введите число"
        checked={checked}
        isCorrect={result3}
        correctAnswer={task.correct3}
      />
    </ExerciseShell>
  )
}

function DefaultExercise() {
  return (
    <section className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-neutral-950">Интерактивное упражнение</h2>
      <p className="mt-3 text-sm leading-6 text-neutral-600">
        Для этого урока интерактив пока не настроен. Сюда можно добавить такой же генератор заданий.
      </p>
    </section>
  )
}

export default function DistanceLessonInteractive({ lessonSlug }: Props) {
  if (lessonSlug === "distance-numeral-systems") {
    return <NumberSystemsExercise />
  }

  if (lessonSlug === "distance-linear-functions") {
    return <LinearFunctionsExercise />
  }

  return <DefaultExercise />
}