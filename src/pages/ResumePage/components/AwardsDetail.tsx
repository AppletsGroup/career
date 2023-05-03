export default function Awards({ awards }: { awards: string[] }) {
  if (!awards.length) return <></>
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4 dark:text-white">Awards and Honors</h2>
      <ul className="list-disc list-inside dark:text-gray-300">
        {awards.map((award) => (
          <li
            key={award}
            className="dark:text-gray-400">
            {award}
          </li>
        ))}
      </ul>
    </div>
  )
}
