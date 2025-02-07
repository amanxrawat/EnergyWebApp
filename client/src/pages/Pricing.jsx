
import { FaCheck } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const tiers = [
  {
    name: 'Freemium',
    id: 'tier-freemium',
    href: '#',
    priceMonthly: '₹0',
    description: 'Perfect for individuals getting started with energy tracking.',
    features: [
      'Basic energy tracking',
      'Monthly reports',
      'Email support',
      'Mobile app access',
      'Up to 3 devices',
    ],
    featured: false,
  },
  {
    name: 'Subscription',
    id: 'tier-subscription',
    href: '#',
    priceMonthly: '₹999',
    description: 'Advanced features for comprehensive energy management.',
    features: [
      'Advanced energy tracking',
      'Real-time analytics',
      'Priority 24/7 support',
      'Mobile app access',
      'Unlimited devices',
      'Custom reports',
    ],
    featured: true,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
  return (
    <>
    <Navbar />
    <div className="bg-gray-100">
      {/* Background gradient effect similar to Home page */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        {/* Header Section */}
        <div className="mx-auto max-w-4xl text-center pt-20 pb-10">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">
            Choose Your Plan
          </h2>
          <p className="mt-6 text-lg font-medium text-gray-600">
            Find the perfect plan that suits your needs and start optimizing your energy consumption today.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2 pb-20">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.featured 
                  ? 'relative bg-white shadow-2xl scale-105 z-10' 
                  : 'bg-white shadow-lg sm:mx-8 lg:mx-0',
                'rounded-3xl p-8 ring-1 ring-gray-200 sm:p-10 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl'
              )}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{tier.name}</h3>
              <p className="text-gray-600 mb-6">{tier.description}</p>
              
              <div className="flex items-baseline mb-8">
                <span className="text-5xl font-bold text-gray-900">{tier.priceMonthly}</span>
                <span className="text-gray-600 ml-2">/month</span>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <FaCheck className="text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href={tier.href}
                className={classNames(
                  tier.featured
                    ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:opacity-90'
                    : 'bg-gray-50 text-gray-900 hover:bg-gray-100 ring-1 ring-gray-200',
                  'mt-8 block rounded-md px-6 py-3 text-center text-sm font-semibold transition-all duration-300'
                )}
              >
                Get started today
              </a>
            </div>
          ))}
        </div>

        {/* Bottom gradient effect */}
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
