import Footer from "./Partial/Footer"
import Header from "./Partial/Header"
import FrontLayout from "@/Layouts/FrontLayout"

export default function About() {
  const people = [
    {
      name: 'Naveed Ameri',
      role: 'Co-Founder / CEO',
      imageUrl:
        '/images/teammember.jpg',
    },
    {
      name: 'Naveed Ameri1',
      role: 'Co-Founder / CEO',
      imageUrl:
        '/images/teammember.jpg',
    },
    {
      name: 'Naveed Ameri2',
      role: 'Co-Founder / CEO',
      imageUrl:
        '/images/teammember.jpg',
    },
  ]
  return (
    <>
        <Header />
          <FrontLayout>
              <section className="containerWidth relative isolate">
                  <div aria-hidden="true"
                    className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                  >
                    <div
                      style={{
                        clipPath:
                          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                      }}
                      className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    />
                  </div>
                    <h1 className="text-balance text-3xl mt-44 font-bold tracking-tight text-white sm:text-6xl text-center">
                      About Us!
                    </h1>
                    <p className="mt-16 text-2xl font-bold tracking-tight text-white sm:text-4xl">
                       Our mission
                    </p>
                    <p className="text-lg leading-8 text-white">
                      In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                    </p>
                    <p className="mt-10 text-2xl font-bold tracking-tight text-white sm:text-4xl">
                       Our values
                    </p>
                    <p className="text-lg leading-8 text-white">
                      In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                    </p>
                    <p className="mt-10 text-2xl font-bold tracking-tight text-white sm:text-4xl">
                       Our team
                    </p>
                    <p className="text-lg leading-8 text-white">
                      In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                    </p>
                    <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center text-white my-12">
                       {people.map((person) => (
                          <li className="text-center item-center" key={person.name}>
                              <img alt="team-member" src={person.imageUrl} className="h-28 w-28 rounded-full mx-auto" />
                              <p className="font-semibold text-white mt-4">{person.name}</p>
                              <p className="text-white">{person.role}</p>
                          </li>
                        ))}
                    </ul>
              </section>
          </FrontLayout>
        <Footer />
    </>
  )
}