const NotFound = () => {
    return(
        <section className="flex items-center h-full p-16 h-screen primary">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl text-white">
                        <span className="sr-only text-white">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl text-white">Sorry, we couldn't find this page.</p>
                    <p className="mt-4 mb-8 text-white">But dont worry, you can find plenty of other things on our homepage.</p>
                    <a rel="noopener noreferrer" href="/home" 
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Back to homepage</a>
                </div>
            </div>
        </section>
    )
}

export default NotFound;