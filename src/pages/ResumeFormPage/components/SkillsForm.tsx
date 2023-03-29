interface SkillsFormProps {
  skills: string[]
  onChange: (skills: string[]) => void
}

export default function SkillsForm({ skills, onChange }: SkillsFormProps) {
  return (
    <div
      className="mb-4"
      id="skills">
      <label
        htmlFor="skills"
        className="block text-gray-700 font-bold mb-2">
        Skills
      </label>
      {skills.map((skill, index) => (
        <div
          key={index}
          className="mb-4">
          <input
            type="text"
            id={`skill-${index}`}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={skill}
            onChange={(event) => { onChange([...skills.slice(0, index), event.target.value, ...skills.slice(index + 1)]) }
              }
            />
          <button
            type="button"
            className="text-red-500 font-bold float-right"
            onClick={() => { onChange([...skills.slice(0, index), ...skills.slice(index + 1)]) }}
            >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        className="text-green-500 font-bold mb-4"
        onClick={() => { onChange([...skills, '']) }}
        >
        Add Skill
      </button>
    </div>
  )
}
