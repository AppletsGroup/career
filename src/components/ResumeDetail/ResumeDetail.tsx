import React from 'react'

// The ResumeDetail component contains information such as the summary, contact information, and links to social media profiles.
export const ResumeDetail: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/3 px-4 mb-8">
          <h2 className="text-lg font-bold mb-2">Summary</h2>
          <p className="text-gray-400 leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam eget
            consectetur lacinia, velit elit bibendum quam, vel malesuada velit elit vel nunc.
            Suspendisse potenti. Sed euismod, diam eget consectetur lacinia, velit elit bibendum
            quam, vel malesuada velit elit vel nunc. Suspendisse potenti.
          </p>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-8">
          <h2 className="text-lg font-bold mb-2">Contact</h2>
          <p className="text-gray-400 leading-loose">
            123 Main St
            <br />
            Anytown, USA 12345
            <br />
            (123) 456-7890
            <br />
            email@example.com
          </p>
        </div>
        <div className="w-full lg:w-1/3 px-4 mb-8">
          <h2 className="text-lg font-bold mb-2">Social Media</h2>
          <ul className="list-none">
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-white">
                <i className="fab fa-github mr-2"></i>
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
