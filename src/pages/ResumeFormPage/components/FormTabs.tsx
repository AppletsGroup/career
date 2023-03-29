export default function FormTabs() {
  const handleTabClick = (targetId: string) => {
    const element = document.getElementById(targetId)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const tabs = [
    { id: 'work-experiences', label: 'Work Experiences' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'licences', label: 'Licences' },
    { id: 'awards', label: 'Awards' }
  ]

  return (
    <div className="flex flex-row overflow-x-scroll whitespace-nowrap w-screen sticky top-0 bg-white">
      {tabs.map((tab) => (
        <div
          key={tab.id}
          className="px-4 py-2 cursor-pointer inline-block border-b-2 border-transparent hover:border-blue-500"
          onClick={() => {
            handleTabClick(tab.id)
          }}
        >
          {tab.label}
        </div>
      ))}
    </div>
  )
}
