import { Heading, Input } from 'applet-design'

interface AwardsFormProps {
  onChange: (licenses: string[]) => void
  awards: string[]
}

export default function AwardsForm({ onChange, awards }: AwardsFormProps) {
  return (
    <div
      id="awards"
      className="mb-8">
      <Heading level={3}>
        Awards
      </Heading>
      {awards.map((award, index) => (
        <div
          key={index}
          className="mb-4">
          <Input
            type="text"
            id={`award-${index}`}
            value={award}
            onChange={(event) => { onChange([...awards.slice(0, index), event.target.value, ...awards.slice(index + 1)]) }
            }
          />
          <button
            type="button"
            className="text-red-500 dark:text-red-400 font-bold float-right"
            onClick={() => { onChange([...awards.slice(0, index), ...awards.slice(index + 1)]) }}
          >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        className="text-green-500 dark:text-green-400 font-bold mb-4"
        onClick={() => { onChange([...awards, '']) }}
      >
        Add Award
      </button>
    </div>
  )
}
