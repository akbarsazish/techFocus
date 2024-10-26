import Header from "../../Partial/Header"
import FrontLayout from "@/Layouts/FrontLayout"
import Footer from "../../Partial/Footer"
import { useState } from "react";
export default function WebDevelopment() {
  
  const handleMouseEnter = (event) => {
    const projectDiv = event.currentTarget; 
    const projectImg = projectDiv.querySelector(".projectImg");
    const projectDes = projectDiv.querySelector(".projectDescription");

    projectDiv.classList.add('primary');
    projectImg.classList.add("hideElement");
    projectDes.classList.remove("hidden"); 
};

const handleMouseLeave = (event) => {
    const projectDiv = event.currentTarget;
    const projectImg = projectDiv.querySelector(".projectImg");
    const projectDes = projectDiv.querySelector(".projectDescription");

    projectDiv.classList.remove('primary');
    projectImg.classList.remove("hideElement"); 
    projectDes.classList.add("hidden"); 
};

  const webDevs = [
    {
      id: 1,
      imageUrl:'/images/it.png',
      title:'IT specialist',
      description:'TechFocus is a software group in the field of IT.'
    },
    {
      id: 2,
      imageUrl:'/images/software.png',
      title:'Software development specialist',
      description:' is a software group in the field of web-based software.'
    },
    {
      id: 3,
      imageUrl:'/images/assessment.png',
      title:'Security and Supervision',
      description:'TechFocus is a software group in the field of Security and Supervision.'
    },
    {
      id: 4,
      imageUrl:'/images/optimization.png',
      title:'Optimizatin',
      description:'TechFocus is a software group in the field of web-based software.'
    },
    {
      id: 5,
      imageUrl:'/images/analysiz.png',
      title:'Data analysts',
      description:'TechFocus is a software group in the field of web-based software.'
    },
    
  ];

  const projects = [
    {
      id: 1,
      imageUrl:'/images/accounting.png',
      title:'Web based Accounting',
      description:'The KasbStar accounting web application offers a user-friendly interface for customers to manage their financial operations. The application includes automated bookkeeping, invoicing and billing, tracking orders, tracking cheque operation, and expense tracking features. It also offers financial reporting and project or inventory management capabilities.'
    },

    {
      id: 2,
      imageUrl:'/images/crm.png',
      title:'CRM',
      description:'Starfoods demonstrates my web development skills, emphasizing user-friendly interfaces, smooth shopping experiences, secure payments, and quick shipping. Explore my work to see how I can enhance your next project.'
    },

    {
      id: 3,
      imageUrl:'/images/ecomerce.png',
      title:'E-Commerce',
      description:'A CRM (Customer Relationship Management) system, streamlines customer data management, and provides analytics. I specialize in creating adaptable CRM solutions that support sales, customer service, and growth, reflecting my skills in developing, data-driven applications.'
    },
  ];


  return (
    <>   
        <Header />
          <FrontLayout>
            <section className="containerWidth relative isolate">
                  <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
                    <div style={{
                        clipPath:
                          'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                      }}
                      className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                    />
                  </div>
                 
                    <div className="mx-auto py-16 lg:py-22 text-white text-center">
                       <h2 className="text-3xl font-bold tracking-tight sm:text-4xl"> Web Development </h2>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-3  gap-10 text-center my-16">
                      {webDevs.map((webDev)=>(
                        <div key={webDev.id} className="p-8 rounded tertiary hover:p-7 hover:bg-purple-700 transition-all duration-1000 ease-in-out">
                          <div className="gap-x-4">
                            <img src={webDev.imageUrl} alt="" className="h-44 w-auto mx-auto" />
                            <br />
                            <a href="#" className="text-white font-black text-xl pt-8">
                              {webDev.title}
                            </a>
                            <p className="mt-5 line-clamp-3 text-sm leading-6 text-white">
                              {webDev.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                  {/* project parts */}

                    <div className="mx-auto py-16 lg:py-22 text-white text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl"> Product Samples </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center my-16 isolate">
                      <div aria-hidden="true" className="absolute inset-x-0 top-30 -z-10 transform-gpu overflow-hidden px-30 blur-3xl">
                          <div style={{
                              clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                            }}
                            className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                          />
                        </div>
                      {projects.map((project)=>(
                        <div key={project.id} className="p-5 rounded tertiary hover:p-4 hover:bg-purple-700 transition-all duration-1000 ease-in-out projectDiv"

                         onMouseEnter={handleMouseEnter}
                         onMouseLeave={handleMouseLeave}>
                          <div className="gap-x-2">
                              <img src={project.imageUrl} alt="" className="h-44 w-auto mx-auto projectImg" /> 
                              <br />
                              <p className="text-white font-extrabold" id="projectTitle">
                                {project.title}
                              </p>
                              <p className="mt-5 text-sm text-white hidden projectDescription">
                                {project.description}
                              </p>
                          </div>
                        </div>
                      ))}
                    </div>
            </section>
          </FrontLayout>
        <Footer />
    </>
  )
}