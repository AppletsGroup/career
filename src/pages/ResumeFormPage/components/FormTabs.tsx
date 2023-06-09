export default function FormTabs() {
  const handleTabClick = (targetId: string) => {
    const element = document.getElementById(targetId)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const tabs = [
    { id: 'contact', label: 'Contact' },
    { id: 'skills', label: 'Skills' },
    { id: 'work-experiences', label: 'Work Experiences' },
    { id: 'education', label: 'Education' },
    { id: 'licences', label: 'Licences' },
    { id: 'awards', label: 'Awards' }
  ]

  return (
    <div className="flex flex-row overflow-x-auto whitespace-nowrap w-screen sticky top-0 bg-white dark:bg-gray-900">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className="px-4 py-2 cursor-pointer inline-block border-b-2 border-transparent hover:border-blue-500 dark:border-blue-500"
          onClick={() => {
            handleTabClick(tab.id)
          }}
    >
          <span className="dark:text-white">{tab.label}</span>
        </div>
      ))}
    </div>

  )
}
