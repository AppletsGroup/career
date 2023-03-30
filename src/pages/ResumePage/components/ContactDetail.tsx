import { type Contact } from '../../../types/resume'

export default function ContactDetail({ contact }: { contact: Contact }) {
  return (
    <div className="flex flex-col md:flex-row md:justify-between">
      <div className="mb-8 md:mb-0">
        <h2 className="text-xl font-bold mb-4">Contact</h2>
        <div className="mb-2">
          <span className="text-gray-600 mr-2">Phone:</span>
          <a href={`tel:${contact?.phone}`}>{contact?.phone}</a>
        </div>
        <div className="mb-2">
          <span className="text-gray-600 mr-2">Email:</span>
          <a href={`mailto:${contact?.email}`}>{contact?.email}</a>
        </div>
        <div className="mb-2">
          <span className="text-gray-600 mr-2">Address:</span>
          <span>
            {contact?.address.street}
            ,
            {' '}
            {contact?.address.city}
            ,
            {' '}
            {contact?.address.state}
            {' '}
            {contact?.address.zip}
            ,
            {' '}
            {contact?.address.country}
          </span>
        </div>
        {contact?.website && (
        <div className="mb-2">
          <span className="text-gray-600 mr-2">Website:</span>
          <a
            href={contact.website}
            target="_blank"
            rel="noopener noreferrer">
            {contact.website}
          </a>
        </div>
        )}
        {contact?.socialMedia && (
        <div>
          <span className="text-gray-600 mr-2">Social Media:</span>
          {Object.entries(contact.socialMedia).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="mr-2">
              {platform}
            </a>
          ))}
        </div>
        )}
      </div>
    </div>
  )
}
