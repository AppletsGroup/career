import React from 'react'
import { useForm } from 'react-hook-form'
import { BiPhone, BiMailSend, BiHomeAlt } from 'react-icons/bi'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa'
import classnames from 'classnames'
import { type Contact } from '../../../types/resume'

interface ContactFormProps {
  contact: Contact
  onChange: (newContact: Contact) => void
}

interface FormValues {
  phone: string
  email: string
  address: {
    street: string
    city: string
    state: string
    zip: string
    country: string
  }
  website?: string
  socialMedia?: Record<string, string>
}

const ContactForm: React.FC<ContactFormProps> = ({ contact, onChange }) => {
  const { register, handleSubmit, formState } = useForm<FormValues>({
    defaultValues: contact
  })

  const onSubmit = (data: FormValues) => {
    onChange(data)
  }

  const { errors } = formState

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-gray-900 rounded-lg px-8 pt-6 pb-8 mb-4">
        <h2 className="text-3xl text-white mb-6">Contact Form</h2>
        <div className="mb-6">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Phone
          </label>
          <div className="relative">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              <BiPhone />
            </span>
            <input
              className={classnames(
                'form-input rounded-r-md block w-full pl-10 pr-12 sm:text-sm sm:leading-5',
                {
                  'border-red-500': errors.phone
                }
              )}
              type="text"
              id="phone"
              {...register('phone', { required: true })}
            />
            {errors.phone && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-red-500">
                This field is required.
              </div>
            )}
          </div>
        </div>
        <div className="mb-6">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <div className="relative">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              <BiMailSend />
            </span>
            <input
              className={classnames(
                'form-input rounded-r-md block w-full pl-10 pr-12 sm:text-sm sm:leading-5',
                {
                  'border-red-500': errors.email
                }
              )}
              type="email"
              id="email"
              {...register('email', { required: true })}
            />
            {errors.email && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-red-500">
                This field is required.
              </div>
            )}
          </div>
        </div>
        <div className="mb-6">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="street"
      >
            Street Address
          </label>
          <div className="relative">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
              <BiHomeAlt />
            </span>
            <input
              className={classnames(
                'form-input rounded-r-md block w-full pl-10 pr-12 sm:text-sm sm:leading-5',
                {
                  'border-red-500': errors.address?.street
                }
              )}
              type="text"
              id="street"
              {...register('address.street', { required: true })}
        />
            {errors.address?.street && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-red-500">
              This field is required.
            </div>
            )}
          </div>
        </div>
        <div className="mb-6">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="city"
      >
            City
          </label>
          <div className="relative">
            <input
              className={classnames(
                'form-input rounded-l-md block w-full pl-10 pr-12 sm:text-sm sm:leading-5',
                {
                  'border-red-500': errors.address?.city
                }
              )}
              type="text"
              id="city"
              {...register('address.city', { required: true })}
        />
            {errors.address?.city && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-red-500">
              This field is required.
            </div>
            )}
          </div>
        </div>
        <div className="mb-6">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="state"
      >
            State/Province
          </label>
          <div className="relative">
            <input
              className={classnames(
                'form-input rounded-l-md block w-full pl-10 pr-12 sm:text-sm sm:leading-5',
                {
                  'border-red-500': errors.address?.state
                }
              )}
              type="text"
              id="state"
              {...register('address.state', { required: true })}
        />
            {errors.address?.state && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-red-500">
              This field is required.
            </div>
            )}
          </div>
        </div>
        <div className="mb-6">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="zip"
      >
            ZIP/Postal Code
          </label>
          <div className="relative">
            <input
              className={classnames(
                'form-input rounded-l-md block w-full pl-10 pr-12 sm:text-sm sm:leading-5',
                {
                  'border-red-500': errors.address?.zip
                }
              )}
              type="text"
              id="zip"
              {...register('address.zip', { required: true })}
        />
            {errors.address?.zip && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-red-500">
              This field is required.
            </div>
            )}
          </div>
        </div>
        <div className="mb-6">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="country"
      >
            Country
          </label>
          <div className="relative">
            <input
              className={classnames(
                'form-input rounded-l-md block w-full pl-10 pr-12 sm:text-sm sm:leading-5',
                {
                  'border-red-500': errors.address?.country
                }
              )}
              type="text"
              id="country"
              {...register('address.country', { required: true })}
        />
            {errors.address?.country && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-red-500">
              This field is required.
            </div>
            )}
          </div>
        </div>
        <div className="mb-6">
          <label
            className="block text-white text-sm font-bold mb-2"
            htmlFor="website"
      >
            Website (Optional)
          </label>
          <div className="relative">
            <input
              className={classnames(
                'form-input rounded-l-md block w-full pl-10 pr-12 sm:text-sm sm:leading-5',
                {
                  'border-red-500': errors.website
                }
              )}
              type="text"
              id="website"
              {...register('website')}
        />
            {errors.website && (
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-red-500">
              Invalid website URL.
            </div>
            )}
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-white text-sm font-bold mb-2">
            Social Media (Optional)
          </label>
          <div className="grid grid-cols-2 gap-6">
            <div className="relative">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                <FaFacebookF />
              </span>
              <input
                className="form-input rounded-r-md block w-full pl-10 pr-12 sm:text-sm sm:leading-5"
                type="text"
                placeholder="Facebook URL"
                {...register('socialMedia.facebook', {
                  validate: (value) =>
                    value === '' ||
                /^(https?:\/\/)?(www\.)?facebook\.com\/.+$/.test(value)
                })}
          />
              {errors.socialMedia?.facebook && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-red-500">
                Invalid Facebook URL.
              </div>
              )}
            </div>
            <div className="relative">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                <FaTwitter />
              </span>
              <input
                className="form-input rounded-r-md block w-full pl-10 pr-12 sm:text-sm sm:leading-5"
                type="text"
                placeholder="Twitter URL"
                {...register('socialMedia.twitter', {
                  validate: (value) =>
                    value === '' ||
                /^(https?:\/\/)?(www\.)?twitter\.com\/.+$/.test(value)
                })}
          />
              {errors.socialMedia?.twitter && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-red-500">
                Invalid Twitter URL
              </div>
              )}
            </div>
            <div className="relative">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                <FaInstagram />
              </span>
              <input
                className="form-input rounded-r-md block w-full pl-10 pr-12 sm:text-sm sm:leading-5"
                type="text"
                placeholder="Instagram URL"
                {...register('socialMedia.instagram', {
                  validate: (value) =>
                    value === '' ||
                /^(https?:\/\/)?(www\.)?instagram\.com\/.+$/.test(value)
                })}
          />
              {errors.socialMedia?.instagram && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-red-500">
                Invalid Instagram URL.
              </div>
              )}
            </div>
            <div className="relative">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                <FaLinkedinIn />
              </span>
              <input
                className="form-input rounded-r-md block w-full pl-10 pr-12 sm:text-sm sm:leading-5"
                type="text"
                placeholder="LinkedIn URL"
                {...register('socialMedia.linkedin', {
                  validate: (value) =>
                    value === '' ||
                /^(https?:\/\/)?(www\.)?linkedin\.com\/.+$/.test(value)
                })}
          />
              {errors.socialMedia?.linkedin && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-red-500">
                Invalid LinkedIn URL.
              </div>
              )}
            </div>
          </div>
        </div>
        <div className="mb-6">
          <button
            type="submit"
            className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 focus:outline-none focus:shadow-outline-gray active:bg-gray-800 transition duration-150 ease-in-out"
      >
            Submit
          </button>
        </div>

      </div>
    </form>
  )
}

export default ContactForm
