
interface AwardsFormProps {
  onChange: (licenses: string[]) => void
  awards: string[]
}

export default function AwardsForm({ onChange, awards }: AwardsFormProps) {
  return (
    <div
      id="awards">
      {/* Awards */}
      <label
        htmlFor="awards"
        className="block text-gray-700 font-bold mb-2">
        Awards
      </label>
      {awards.map((award, index) => (
        <div
          key={index}
          className="mb-4">
          <input
            type="text"
            id={`award-${index}`}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={award}
            onChange={(event) => { onChange([...awards.slice(0, index), event.target.value, ...awards.slice(index + 1)]) }
              }
            />
          <button
            type="button"
            className="text-red-500 font-bold float-right"
            onClick={() => { onChange([...awards.slice(0, index), ...awards.slice(index + 1)]) }}
            >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        className="text-green-500 font-bold mb-4"
        onClick={() => { onChange([...awards, '']) }}
        >
        Add Award
      </button>
    </div>
  )
}
