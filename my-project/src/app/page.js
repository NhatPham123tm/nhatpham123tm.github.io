import Head from 'next/head';
import Script from 'next/script';
import '../app/globals.css';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      </Head>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/feather-icons/4.28.0/feather.min.js"
        integrity="sha512-7x3zila4t2qNycrtZ31HO0NnJr8kg2VI67YLoRSyi9hGhRN66FHYWr7Axa9Y1J9tGYHVBPqIjSE1ogHrJTz51g=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
        strategy="afterInteractive"
      ></Script>
      <main className="bg-gray-100">
        <section className="py-10 md:py-16">
          <div className="container max-w-screen-xl mx-auto px-4">
            <nav className="flex items-center justify-between mb-40">
              {/*Navigate bar buttons */}
            </nav>

            <div className="text-center">
              <div className="flex justify-center mb-16">
                <Image
                  src="/assets/image/home-img3.png"
                  alt="Image"
                  width={300}
                  height={300}
                />
              </div>

              <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">
                Tran Minh Nhat Pham
              </h6>

              <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">
                Senior Computer Science Student
              </h1>

              <p className="font-normal text-gray-600 text-md md:text-xl mb-16">
                Software Engineer, Full-stack Web Developer
              </p>
              <div className="flex justify-center flex-wrap gap-4">
                <a
                  href="/assets/document/Resume.pdf"
                  download
                  className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
                >
                  My CV
                </a>

                <a
                  href="http://www.linkedin.com/in/nhat-pham-703947174"
                  className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
                >
                  Linkedln
                </a>

                <a
                  href="https://github.com/NhatPham123tm"
                  className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
                >
                  GitHub
                </a>

                <a
                  href="https://www.uh.edu/nsm/computer-science/"
                  className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
                >
                  CS UH
                </a>
              </div>
            </div>
          </div>
        </section>

              <section className="py-10 md:py-16">
      <div className="container max-w-screen-xl mx-auto px-4">
        <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Education</h1>
        <p className="font-normal text-gray-500 text-xs md:text-base mb-20">
          Below is a timeline of the places I studied.
        </p>

        <div className="relative border-l border-gray-300 pl-8">
          {/* Timeline Item 1 */}
          <div className="mb-10">
            <div className="absolute -left-4 w-8 h-8 bg-gray-700 text-gray-50 rounded-full flex items-center justify-center">
              
            </div>
            <div className="pl-6">
              <h4 className="font-medium text-gray-700 text-lg mb-1">Bachelor&apos;s Degree in Computer Science 2023 - 2025</h4>
              <p className="text-gray-500 text-sm">University of Houston</p>
              <p className="text-gray-500 text-sm">Undergraduate Senior, specialized in software engineering.</p>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="mb-10">
            <div className="absolute -left-4 w-8 h-8 bg-gray-700 text-gray-50 rounded-full flex items-center justify-center">
              
            </div>
            <div className="pl-6">
              <h4 className="font-medium text-gray-700 text-lg mb-1">Associate Degree in Natural Science 2020 - 2022</h4>
              <p className="text-gray-500 text-sm">Houston Community College</p>
              <p className="text-gray-500 text-sm">Focused on science and technology courses.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="py-10 md:py-16">

        <div className="container max-w-screen-xl mx-auto px-4">

            <div className="flex flex-col lg:flex-row justify-between gap-4">
                <div className="mb-10 lg:mb-0">
                    <h1 className="font-medium text-gray-700 text-3xl md:text-4xl mb-5">Portfolio</h1>

                    <p className="font-normal text-gray-500 text-xs md:text-base">Current Newest Projects</p>
                </div>

                <div className="space-y-24">
                    <div className="flex space-x-6">
                        <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">01</h1>

                        <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                        <div>
                            <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">Phone Company Webapp With Database</h1>

                            <p className="font-normal text-gray-500 text-sm md:text-base">A group project for phone company website. Include many functions like mock call, text messages and account system. Project showcase communication between front and back-end while ensuring data integrity </p>
                        </div>
                    </div>
                    
                    <div className="flex space-x-6">
                        <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">02</h1>

                        <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                        <div>
                            <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">Amazon Webapp</h1>

                            <p className="font-normal text-gray-500 text-sm md:text-base">A mock web app like Amazon website with fully functional order and tracking system. Project focus on using Javascript to handle many variety data in commercial website.</p>
                        </div>
                    </div>
                    
                    <div className="flex space-x-6">
                        <h1 className="font-normal text-gray-700 text-3xl md:text-4xl">03</h1>

                        <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

                        <div>
                            <h1 className="font-normal text-gray-700 text-3xl md:text-4xl mb-5">Photo Filter</h1>

                            <p className="font-normal text-gray-500 text-sm md:text-base">Simple desktop app for quick image filter like black and white, invert, gradiant.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        </section>
      </main>
    </>
  );
}

