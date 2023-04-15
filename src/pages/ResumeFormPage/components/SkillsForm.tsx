import { Input, Label } from 'applet-design'

interface SkillsFormProps {
  skills: string[]
  onChange: (skills: string[]) => void
}

export default function SkillsForm({ skills, onChange }: SkillsFormProps) {
  return (
    <div
      className="mb-4"
      id="skills">
      <Label
        htmlFor="skills">
        Skills
      </Label>
      {skills.map((skill, index) => (
        <div
          key={index}
          className="mb-4">
          <Input
            type="text"
            id={`skill-${index}`}
            value={skill}
            onChange={
              (event) => { onChange([...skills.slice(0, index), event.target.value, ...skills.slice(index + 1)]) }
            }
          />
          <button
            type="button"
            className="text-red-500 font-bold float-right dark:text-red-400"
            onClick={() => { onChange([...skills.slice(0, index), ...skills.slice(index + 1)]) }}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        className="text-green-500 font-bold mb-4 dark:text-green-400"
        onClick={() => { onChange([...skills, '']) }}
      >
        Add Skill
      </button>
    </div>
  )
}
