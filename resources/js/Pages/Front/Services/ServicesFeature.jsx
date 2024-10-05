import { ArrowPathIcon, BeakerIcon , FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/solid'

const features = [
  {
    name: 'Web Development',
    description:
      'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
    icon: BeakerIcon ,
  },
  {
    name: 'Mobile Applications',
    description:
      'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
    icon: LockClosedIcon,
  },
  {
    name: 'Hosting',
    description:
      'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
    icon: ArrowPathIcon,
  },
  {
    name: 'Marketing',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
  {
    name: 'CEO',
    description:
      'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
    icon: FingerPrintIcon,
  },
]

export default function ServicesFeature() {
  return (
    <div className="tertiary py-12 sm:py-22">
        <div className="max-w-auto">
            <div className="section p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
                 <div className="mb-12">
                 <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl text-center"> Services </p>
                 </div>
               
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-center text-white">
                    <div className="primary rounded h-56 -mt-10 hover:bg-purple-700">
                        <h2 className="font-bold text-2xl mt-5"> Web and Mobile App Development</h2>
                        <img className="h-auto max-w-full mx-auto p-4" src="/images/web.png" alt="web"/>
                    </div>
                    <div className="primary rounded h-56 hover:bg-purple-700">
                        <h2 className="font-bold text-2xl mt-5">Hosting </h2>
                        <img className="h-auto max-w-full mx-auto p-4" src="/images/hosting.png" alt="hosting"/>
                    </div>
                    <div className="primary rounded h-56 hover:bg-purple-700">
                        <h2 className="font-bold text-2xl mt-5">Marketing</h2>
                        <img className="h-auto max-w-full mx-auto p-4" src="/images/marketing.png" alt="marketing"/>
                    </div>
                    <div className="primary rounded h-56 -mt-10 mt-0 sm:-mt-10 hover:bg-purple-700">
                        <h2 className="font-bold text-2xl mt-5">SEO</h2>
                        <img className="h-auto max-w-full mx-auto p-4" src="/images/ceo.png" alt="ceo"/>
                    </div>
                </div>
            </div>
          </div>
          
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-10 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to empowering your business
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-white">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
