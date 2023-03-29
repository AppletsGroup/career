import { type Licence } from '../../../types/resume'

interface LicencesFormProps {
  onChange: (licences: Licence[]) => void
  licences: Licence[]
}

export default function LicencesForm({ onChange, licences }: LicencesFormProps): JSX.Element {
  return (
    <div
      className="mb-4"
      id="licences">
      {/* Licenses */}
      <label
        htmlFor="licenses"
        className="block text-gray-700 font-bold mb-2">
        Licenses
      </label>
      {licences.map((licence, index) => (
        <div
          key={index}
          className="mb-4">
          <label htmlFor={`award-${index}`}>Name</label>
          <input
            type="text"
            id={`award-${index}`}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={licence.name}
            onChange={(event) => { onChange([...licences.slice(0, index), { ...licence, name: event.target.value }, ...licences.slice(index + 1)]) }
                }
              />
          <label htmlFor={`organisation-${index}`}>Organisation</label>
          <input
            type="text"
            id={`organisation-${index}`}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={licence.organisation}
            onChange={(event) => { onChange([...licences.slice(0, index), { ...licence, organisation: event.target.value }, ...licences.slice(index + 1)]) }
                }
              />
          <label htmlFor={`issueData-${index}`}>Issue Date</label>
          <input
            type="text"
            id={`issueData-${index}`}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={licence.issueData}
            onChange={(event) => { onChange([...licences.slice(0, index), { ...licence, issueData: event.target.value }, ...licences.slice(index + 1)]) }
                }
              />
          <label htmlFor={`expireData-${index}`}>Expire Date</label>
          <input
            type="text"
            id={`expireData-${index}`}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={licence.expireData}
            onChange={(event) => { onChange([...licences.slice(0, index), { ...licence, expireData: event.target.value }, ...licences.slice(index + 1)]) }
                }
              />
          <label htmlFor={`description-${index}`}>Description</label>
          <input
            type="text"
            id={`description-${index}`}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={licence.description}
            onChange={(event) => { onChange([...licences.slice(0, index), { ...licence, description: event.target.value }, ...licences.slice(index + 1)]) }
                }
              />
          <button
            type="button"
            className="text-red-500 font-bold float-right"
            onClick={() => { onChange([...licences.slice(0, index), ...licences.slice(index + 1)]) }}
              >
            Remove
          </button>
        </div>
      ))}
      <button
        type="button"
        className="text-green-500 font-bold mb-4"
        onClick={() => { onChange([...licences, { name: '', organisation: '', issueData: '', expireData: '', description: '' }]) }}
          >
        Add License
      </button>
    </div>
  )
}
