export default function TaskList({ tasks }: { tasks: string[] }) {
  return (
    <>
    {tasks.map((t, index) => <div key={index}>- {t}</div>)}
    </>
  )
}