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
              <div className="max-w-auto w-full">
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <p className="mt-10 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                       Our mission
                    </p>
                    <p className="mt-6 text-lg leading-8 text-white">
                      In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                    </p>
                    <p className="mt-10 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                       Our values
                    </p>
                    <p className="mt-6 text-lg leading-8 text-white">
                      In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.
                    </p>
                    <p className="mt-10 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                       Our team
                    </p>
                    <p className="mt-6 text-lg leading-8 text-white">
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
                  </div>
                 
              </div>
          </FrontLayout>
        <Footer />
    </>
  )
}