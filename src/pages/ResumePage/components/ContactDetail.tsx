import { type Contact } from '../../../types/resume'

export default function ContactDetail({ contact }: { contact: Contact }) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between">
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Contact</h2>
        <div className="mb-2 text-gray-600 dark:text-gray-400">
          <span className="mr-2">Phone:</span>
          <a
            href={`tel:${contact?.phone}`}
            className="text-blue-500 dark:text-blue-400">
            {contact?.phone}
          </a>
        </div>
        <div className="mb-2 text-gray-600 dark:text-gray-400">
          <span className="mr-2">Email:</span>
          <a
            href={`mailto:${contact?.email}`}
            className="text-blue-500 dark:text-blue-400">
            {contact?.email}
          </a>
        </div>
        {contact?.website && (
          <div className="mb-2 text-gray-600 dark:text-gray-400">
            <span className="mr-2">Website:</span>
            <a
              href={contact.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-blue-400"
            >
              {contact.website}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
