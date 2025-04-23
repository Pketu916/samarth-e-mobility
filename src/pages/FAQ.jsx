import { useState } from "react";
import { FiPlus, FiX } from "react-icons/fi";


const faqs = [
  {
    question: "What is an electric two-wheeler?",
    answer:
      "An electric two-wheeler is a motorcycle or scooter that runs on an electric motor powered by a rechargeable battery, replacing the traditional internal combustion engine. These vehicles offer a more eco-friendly alternative by reducing fuel consumption and emissions, providing a sustainable mode of transportation.",
  },
  {
    question: "How long does it take to fully charge the battery?",
    answer:
      "The charging time for electric two-wheelers depends on the battery's capacity and the type of charger used, typically ranging from 2 to 6 hours. High-capacity batteries or fast chargers can reduce this time, while standard chargers may take longer for a full recharge.",
  },
  {
    question: "What happens if the battery runs out while riding?",
    answer:
      "When the battery is fully depleted, the vehicle will come to a halt, necessitating either a recharge on the spot or transportation to the nearest charging station for recharging.",
  },
  {
    question: "What kind of maintenance does an electric two-wheeler require?",
    answer:
      "Electric two-wheelers require very little maintenance, with primary attention needed for the battery, brakes, and tires. Since there are fewer moving parts compared to traditional vehicles, overall upkeep is simpler and more cost-effective.",
  },
  {
    question: "What happens to the battery after it reaches the end of its life?",
    answer:
      "Batteries from electric two-wheelers can be recycled or repurposed, contributing to environmental sustainability. Many manufacturers offer dedicated battery recycling programs to ensure proper disposal and reuse, reducing waste and promoting eco-friendly practices.",
  },
];


const FAQ = () => {

  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <section id="FAQ" className="text-white font-bdo flex flex-col items-center text-left" >
      <h1 className="text-5xl font-bold mb-12">FAQ&apos;s</h1>
      <div className="w-full max-w-[966px] divide-y divide-gray-700">
        {faqs.map((faq, index) => (
          <div key={index} className="py-7">
            <div
              onClick={() => toggleIndex(index)}
              className="flex justify-between items-center cursor-pointer"
            >
              <h3 className="text-lg font-medium hover:underline">
                {faq.question}
              </h3>
              {openIndex === index ? (
                <FiX className="text-[#52C923] text-xl" />
              ) : (
                <FiPlus className="text-[#52C923] text-xl" />
              )}
            </div>
            <div
              className={`transition-all duration-500 overflow-hidden ${openIndex === index ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                }`}
            >
              <p className="text-sm text-[#FFFFFFCC]">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ
