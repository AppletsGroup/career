export default function Awards({ awards }: { awards: string[] }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Awards and Honors</h2>
      <ul className="list-disc list-inside">
        {awards.map((award) => (
          <li key={award}>{award}</li>
        ))}
      </ul>
    </div>
  )
}
