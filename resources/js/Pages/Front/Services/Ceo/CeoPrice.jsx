import FrontLayout from '@/Layouts/FrontLayout';
import { CheckIcon, XMarkIcon } from '@heroicons/react/20/solid'

const tiers = [

  {
    name: 'Beginner',
    id: 'beginner',
    href: '#',
    Pric: 'Free',
    description: 'Also, it is indeed a valley, having a painful ease.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Dedicated support representative',
      'Marketing automations',

    ],
    featured: true,
  },
  {
    name: 'Pro',
    id: 'tier-economic',
    href: '#',
    priceMonthly: '$24',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Dedicated support representative',
      'Marketing automations',
      'Custom integrations',
    ],
    featured: true,
  },
  {
    name: 'Team',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: '$72',
    description: 'Phasellus (a type of plant) has a strong grip on the vehicle.',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      'Dedicated support representative',
      'Marketing automations',
      'Custom integrations',
    ],
    featured: true,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function CeoPrice() {
  return (
    <FrontLayout>
    
    <section className="relative isolate containerWidth">
          <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
            <div style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
            />
          </div>
            <div className="max-w-2xl mx-auto mb-16 text-center">
              <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                CEO
              </p>
              <span className="font-bold tracking-wider uppercase dark:text-violet-600">Pricing</span>
              <h2 className="text-4xl font-bold lg:text-5xl text-white">Choose your best plan</h2>
            </div>
            <div className="flex flex-wrap">
              <div className="flex mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-50">
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold">Beginner</h4>
                    <span className="text-6xl font-bold">Free</span>
                  </div>
                  <p className="mt-3 leading-relaxed dark:text-gray-600">Etiam ac convallis enim, eget euismod dolor.</p>
                  <ul className="flex-1 mb-6 dark:text-gray-600">
                    <li className="flex mb-2 space-x-2">
                       <CheckIcon className="flex-shrink-0 w-5 h-5 p-1 font-bold  dark:text-white dark:bg-violet-600 rounded-full" />
                      <span>Aenean quis</span>
                    </li>
                    <li className="flex mb-2 space-x-2">
                      <CheckIcon className="flex-shrink-0 w-5 h-5 p-1 font-bold  dark:text-white dark:bg-violet-600 rounded-full" />
                      <span>Morbi semper</span>
                    </li>
                    <li className="flex mb-2 space-x-2">
                      <CheckIcon className="flex-shrink-0 w-5 h-5 p-1 font-bold  dark:text-white dark:bg-violet-600 rounded-full" />
                      <span>Tristique enim nec</span>
                    </li>
                  </ul>
                  <button type="button" className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-violet-600 dark:text-gray-50">Get Started</button>
                </div>
              </div>
              
              <div className="flex mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-violet-600 dark:text-gray-50">
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold">Pro</h4>
                    <span className="text-6xl font-bold">$24
                      <span className="text-sm tracking-wide">/month</span>
                    </span>
                  </div>
                  <p className="leading-relaxed">Morbi cursus ut sapien sit amet consectetur.</p>
                  <ul className="flex-1 space-y-2">
                    <li className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Everything in Free</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Phasellus tellus</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Praesent faucibus</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Aenean et lectus blandit</span>
                    </li>
                  </ul>
                  <a rel="noopener noreferrer" href="#" className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded dark:bg-gray-100 dark:text-violet-600">Get Started</a>
                </div>
              </div>
              <div className="flex mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                <div className="flex flex-grow flex-col p-6 space-y-6 rounded shadow sm:p-8 dark:bg-gray-50">
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold">Team</h4>
                    <span className="text-6xl font-bold">$72
                      <span className="text-sm tracking-wide">/month</span>
                    </span>
                  </div>
                  <p className="leading-relaxed dark:text-gray-600">Phasellus ultrices bibendum nibh in vehicula.</p>
                  <ul className="space-y-2 dark:text-gray-600">
                    <li className="flex items-start space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Everything in Pro</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Fusce sem ligula</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Curabitur dictum</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Duis odio eros</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 dark:text-violet-600">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                      <span>Vivamus ut lectus ex</span>
                    </li>
                  </ul>
                  <a rel="noopener noreferrer" href="#" className="inline-block w-full px-5 py-3 font-semibold tracking-wider text-center rounded dark:bg-violet-600 dark:text-gray-50">Get Started</a>
                </div>
              </div>
            </div>
    </section>
    </FrontLayout>
  )
}
