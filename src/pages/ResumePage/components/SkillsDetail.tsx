export default function SkillsDetail({ skills }: { skills: string[] }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold mb-4">Skills</h2>
      <ul className="list-disc list-inside mb-4">
        {skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </div>
  )
}
