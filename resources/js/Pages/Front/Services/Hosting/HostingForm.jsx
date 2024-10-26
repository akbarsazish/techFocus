import FrontLayout from "@/Layouts/FrontLayout"
import Header from "../../Partial/Header"
import Footer from '../../Partial/Footer';

import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";


export default function HostingForm() {

      const onSubmit = (e) => {
        e.preventDefault();
    
      };
 
  return (
    <>   
    <Header />
      <FrontLayout>
        <section className="containerWidth relative isolate">
            <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-32 blur-3xl">
                <div style={{
                    clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
                className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                />
            </div>

            <div className="mx-auto max-w-2xl text-center py-16 lg:max-w-2xl">
                <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                   Hosting Configurations
                </p>
            </div> 
          
            <div className="max-w-7xl mx-auto sm:px-2 lg:px-4 border border-gray-500 rounded-lg">
                <div className="flex flex-col md:flex-row">
                 <div className="w-full md:basis-3/4 h-screen [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] overflow-y-scroll">
                   <div className="overflow-hidden shadow-sm sm:rounded-lg">
                        <form className="p-4 sm:p-8 shadow">
                            <div className="p-2 border-b border-indigo-500">
                                <span className="h-10 w-10 bg-indigo-500 inline-block p-1 text-center rounded-full text-2xl text-white"> 1</span>
                                <span className="text-white mx-2 text-2xl font-bold"> Account </span>
                            </div>
                           
                         <div className="flex flex-col md:flex-row mt-4">
                            <div className="w-full md:basis-2/4 px-2">
                                <div className="mt-4">
                                   <InputLabel htmlFor="first_name" value="First Name" />
                                    <TextInput id="first_name"
                                    type="text"
                                    name="name"
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    />
                                    <InputError message="" className="mt-2" />
                                </div>

                                <div className="mt-4">
                                   <InputLabel htmlFor="email" value="Email" />
                                    <TextInput id="email"
                                    type="text"
                                    name="name"
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    />
                                    <InputError message="" className="mt-2" />
                                </div>
                                <div className="mt-4">
                                   <InputLabel htmlFor="company" value="Company Name" />
                                    <TextInput id="company"
                                    type="text"
                                    name="name"
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    />
                                    <InputError message="" className="mt-2" />
                                </div>
                            </div>
                            <div className="w-full md:basis-2/4 px-2">
                                <div className="mt-4">
                                   <InputLabel htmlFor="last_name" value="Last Name" />
                                    <TextInput id="last_name"
                                    type="text" name="name"
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    />
                                    <InputError message="" className="mt-2" />
                                 </div>
                                <div className="mt-4">
                                   <InputLabel htmlFor="password" value="Password" />
                                    <TextInput id="password"
                                    type="text" name="name"
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    />
                                    <InputError message="" className="mt-2" />
                                 </div>
                                 <div className="mt-4">
                                    <InputLabel htmlFor="country_id" value="Country" />
                                    
                                    <SelectInput
                                    name="lastName_id"
                                    id="country_id"
                                    className="mt-1 block w-full" >
                                    <option value=""> Afghanistan </option>
                                    <option value=""> Algezera </option>
                                    </SelectInput>
                                </div>
                            </div>
                        </div>

                            <div className="mt-4">
                                <InputLabel htmlFor="address" value="Address" />
                                <TextInput id="address"
                                type="text" name="name"
                                className="mt-1 block w-full"
                                isFocused={true}
                                />
                                <InputError message="" className="mt-2" />
                            </div>

                        <div className="flex flex-col md:flex-row mt-4">
                             <div className="w-full md:basis-2/4 px-2">
                                <div className="mt-4">
                                   <InputLabel htmlFor="city_town" value="City/Town" />
                                    <TextInput id="city_town"
                                    type="text" name="name"
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    />
                                    <InputError message="" className="mt-2" />
                                 </div>
                                <div className="mt-4">
                                   <InputLabel htmlFor="zip_code" value="Zip/Postal Code" />
                                    <TextInput id="zip_code"
                                    type="text" name="name"
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    />
                                    <InputError message="" className="mt-2" />
                                 </div>
                            </div>
                              <div className="w-full md:basis-2/4 px-2">
                                <div className="mt-4">
                                        <InputLabel htmlFor="state_province_id" value="State/Province" />
                                        <SelectInput
                                        name="State_Province"
                                        id="state_id"
                                        className="mt-1 block w-full" >
                                        <option value=""> Herate </option>
                                        <option value=""> Kabul </option>
                                        </SelectInput>
                                    </div>

                                <div className="mt-4">
                                   <InputLabel htmlFor="phone" value="Phone Number" />
                                    <TextInput id="phone"
                                    type="text"
                                    name="name"
                                    className="mt-1 block w-full"
                                    isFocused={true}
                                    />
                                    <InputError message="" className="mt-2" />
                                </div>
                            </div>
                        </div>
                        <div className="p-2 border-b border-indigo-500 mt-10">
                            <span className="h-10 w-10 bg-indigo-500 inline-block p-1 text-center rounded-full text-2xl text-white"> 2 </span>
                            <span className="text-white mx-2 text-2xl font-bold"> Domain </span>
                        </div>
                        <button 
                        className="bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 rounded mt-4 ms-2">
                            I have domain
                        </button>
                        <button 
                        className="bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 rounded mt-4 ms-2">
                           I need t register a new domain
                        </button>
                         <div className="text-center p-4 mt-8 text-white cursor-pointer mx-2">
                            <a href="#"> Skip For Now </a>
                         </div>


                        <div className="p-2 border-b border-indigo-500 mt-10">
                            <span className="h-10 w-10 bg-indigo-500 inline-block p-1 text-center rounded-full text-2xl text-white"> 3 </span>
                            <span className="text-white mx-2 text-2xl font-bold"> Billing </span>
                        </div>
                        <div className="flex flex-col md:flex-row mt-4">
                             <div className="w-full md:basis-2/4 px-2">
                             <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                <TextInput id="bordered-radio-1" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                <label htmlFor="bordered-radio-1" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Credit Card</label>
                            </div>
                             </div>
                             <div className="w-full md:basis-2/4 px-2">
                                <div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                    <TextInput checked id="bordered-radio-2" type="radio" value="" name="bordered-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="bordered-radio-2" className="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">PayPal</label>
                                </div>
                             </div>
                        </div>

                        <div className="mt-4 text-right">
                            <button className="bg-red-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 rounded mx-4">
                              Cancel
                            </button>    
                            <button className="bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 rounded">
                               Submit
                            </button>
                        </div>
                        </form>
                    </div>
                </div>
                <div className="w-full md:basis-1/4 md:border-l-2 border-gray-500">
                    <p className="m-2 text-xl font-bold tracking-tight text-white sm:text-2xl">
                       Product and Service Summary
                    </p>
                    <div className="m-2">
                        <InputLabel htmlFor="task_project_id" value="romotion Billing Cycle" />
                        <SelectInput
                        name="project_id"
                        id="task_project_id"
                        className="mt-1 block w-full py-1" >
                            <option value="">1 Month $23.99/mo </option>
                            <option value="">12 Months $17.99/mo ($215.88)</option>
                            <option value="">24 Months $14.99/mo ($359.76)</option>
                            <option value="">36 Months $11.99/mo ($431.64)</option>
                        </SelectInput>
                    </div>
                    <div className="p-4">
                        <div className="h-px bg-gray-300"></div>

                        <div className="flex flex-col md:flex-row text-white">
                          <div className="w-full md:basis-2/4 font-bold"> Total: </div>
                          <div className="w-full md:basis-2/4 text-end"> $399.9 </div>
                        </div>
                    </div>
                    
                </div>
            </div>
         </div>

        </section>
      </FrontLayout>
    <Footer />
    </>
  )
}