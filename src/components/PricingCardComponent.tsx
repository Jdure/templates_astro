import React from "react";


interface PricingCardComponent {
 title: string,
 price: string
 description: string[]
}


export const PricingCardComponent = ({title, price, description} : PricingCardComponent) => {
    return (
<>
<div className="mb-4 overflow-hidden rounded-lg shadow-lg ">
  <div className="px-4 sm:px-6 lg:px-10 py-6 sm:py-8 bg-gray-100">
    <div className="flex justify-center">
      <span className="inline-flex px-4 py-1 text-sm sm:text-base font-semibold leading-5 tracking-wide uppercase rounded-full">
        {title}
      </span>
    </div>
    <div className="flex justify-center mt-4 text-4xl sm:text-6xl font-extrabold leading-none">
      <span className="ml-1 mr-3 text-xl sm:text-2xl font-medium leading-8 text-gray-500">
        from
      </span>
      {price}
      <span className="pt-2 sm:pt-8 ml-1 text-xl sm:text-2xl font-medium leading-8 text-gray-500">
        /month
      </span>
    </div>
  </div>
  <div className="px-4 sm:px-6 lg:px-10 pt-6 pb-8 sm:pt-8 bg-white">
    <ul>
      {description.map((item, index) => (
        <li key={index} className="flex items-start mt-4">
          <div className="flex-shrink-0">
            <svg
              className="w-6 h-6 text-green-500"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <p className="ml-3 text-base sm:text-lg leading-6 text-gray-700">
            {item}
          </p>
        </li>
      ))}
    </ul>
    <div className="mt-6 rounded-md shadow">
      <a
        href="#"
        className="flex items-center justify-center px-4 sm:px-5 py-3 text-base sm:text-lg font-medium leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
      >
        Start {title}
      </a>
    </div>
  </div>
</div>

</>

    )
}