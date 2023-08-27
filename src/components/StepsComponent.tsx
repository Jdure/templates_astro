import React, {useState} from "react";

interface Step {
    name: string, 
    description: string,
    icon: string
    image: string
}

interface Steps {
    steps: Step[]
}


export const StepsComponent = ({steps}: Steps) => {
    const [activeStepIdx, setActiveStepIdx] = useState(0)
    return (
        <>
        <div className="mx-auto mb-20 flex flex-col sm:flex-row">
            {steps.map((step, idx) => (
                <button onClick={() => setActiveStepIdx(idx)} key={idx} className={`inline-flex w-full items-center justify-center rounded-t border-b-2 border-gray-200 py-6 font-medium leading-none tracking-wider hover:border-indigo-500 hover:text-indigo-500 hover:shadow-lg sm:w-1/2 sm:justify-start sm:px-6 sm:py-3 md:w-auto ${activeStepIdx === idx ? 'bg-gray-200' : ''}`}>
                    <span className="px-1 text-lg md:text-2xl">
                        {step.icon}
                    </span>

                    {step.name}
                </button>
            ))}
        </div>
        <img
                className="mx-auto mb-10 block w-2/3 h-96 md:h-[32rem] rounded object-cover object-center md:w-1/2 lg:w-1/3 xl:w-1/4"
                alt={steps[activeStepIdx].name}
                src={steps[activeStepIdx].image} />
                <div className="flex w-full flex-col text-center">
                <h1 className="mb-4 text-xl md:text-2xl lg:text-3xl font-medium text-gray-900">
                    {steps[activeStepIdx].name}
                </h1>
                <p className="mx-auto text-base md:text-lg lg:text-xl leading-relaxed lg:w-2/3">
                    {steps[activeStepIdx].description}
                </p>
            </div>
        </>
    )
}