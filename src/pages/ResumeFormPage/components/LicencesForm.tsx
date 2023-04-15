import { Input, Label } from 'applet-design'
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
      <Label
        htmlFor="licenses">
        Licenses
      </Label>
      {licences.map((licence, index) => (
        <div
          key={index}
          className="mb-4">
          <Label htmlFor={`licence-${index}`}>Name</Label>
          <Input
            type="text"
            id={`licence-${index}`}
            value={licence.name}
            onChange={(event) => { onChange([...licences.slice(0, index), { ...licence, name: event.target.value }, ...licences.slice(index + 1)]) }
            }
          />
          <Label htmlFor={`organisation-${index}`}>Organisation</Label>
          <Input
            type="text"
            id={`organisation-${index}`}
            value={licence.organisation}
            onChange={(event) => { onChange([...licences.slice(0, index), { ...licence, organisation: event.target.value }, ...licences.slice(index + 1)]) }
            }
          />
          <Label htmlFor={`issueDate-${index}`}>Issue Date</Label>
          <Input
            type="date"
            id={`issueDate-${index}`}
            value={licence.issueData}
            onChange={(event) => { onChange([...licences.slice(0, index), { ...licence, issueData: event.target.value }, ...licences.slice(index + 1)]) }
            }
          />
          <Label htmlFor={`expireDate-${index}`}>Expire Date</Label>
          <Input
            type="date"
            id={`expireDate-${index}`}
            value={licence.expireData}
            onChange={(event) => { onChange([...licences.slice(0, index), { ...licence, expireData: event.target.value }, ...licences.slice(index + 1)]) }
            }
          />
          <Label htmlFor={`description-${index}`}>Description</Label>
          <Input
            type="text"
            id={`description-${index}`}
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
