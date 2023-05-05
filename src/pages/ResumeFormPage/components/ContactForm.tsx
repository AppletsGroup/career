import { FieldError, InputField, Label } from 'applet-design'

export default function ContactForm () {
  return (
    <div
      className="dark:bg-gray-900 rounded-lg pt-6 pb-8 mb-4"
      id="contact">
      <h2 className="text-xl dark:text-white mb-6">Contact Form</h2>
      <div className="mb-6">
        <Label htmlFor="phone">
          Phone
        </Label>
        <div className="relative">
          <InputField
            type="text"
            id="phone"
            name="contact.phone"
            className="w-full"
            validation={{ required: true }}
          />
          <FieldError name="contact.phone" />
        </div>
      </div>
      <div className="mb-6">
        <Label htmlFor="email">
          Email
        </Label>
        <div className="relative">
          <InputField
            type="email"
            id="email"
            className="w-full"
            name="contact.email"
            validation={{ required: true }}/>
          <FieldError name="contact.email" />
        </div>
      </div>
      <div className="mb-6">
        <Label htmlFor="website">
          Website (Optional)
        </Label>
        <div className="relative">
          <InputField
            type="text"
            id="website"
            className="w-full"
            name="contact.website"
          />
          <FieldError name="contact.website" />
        </div>
      </div>
    </div>
  )
}
