function Intro() {
  return (
    <div>
      <section>
        <div className="flex flex-col">
          <div className="mb-6">
  <div className="flex items-center justify-between">
    <div>
      <h1 className="text-5xl text-gray-900 font-calistoga">Shivdutt here 🗿</h1>
      <h2 className="font-calistoga text-gray-900 text-2xl mt-2">Full Stack Development & DevOps</h2>
    </div>
    <img
      src="https://media.licdn.com/dms/image/v2/D4D03AQGSJr_G0ZHyhA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722624342969?e=1758758400&v=beta&t=smdpXIE5P_4ElQM3shBSotOGpPJ8Zdvw4cwMZpvblT0"
      alt="Shivdutt - Full Stack Developer"
      className="w-32 h-32 rounded-full object-cover border-2 border-gray-200 ml-4"
    />
  </div>
</div>


          {/* Location */}
          <div>
            <p className="flex items-center gap-1 mt-2">
              <span className="text-xl">📍</span>
              <span className="text-gray-800">Maharashtra, India</span>
            </p>
          </div>

          {/* About */}
          <div>
            <p className="mt-3 text-gray-700">
              I’m a <span className="font-semibold text-blue-600">computer engineering student</span> who loves building{" "}
              <span className="font-semibold text-blue-600">full-stack applications</span> that scale. From crafting{" "}
              <span className="font-semibold text-blue-600">deployment platforms</span> to creating{" "}
              <span className="font-semibold text-blue-600">monitoring tools</span>, I enjoy turning ideas into real
              products while exploring <span className="font-semibold text-blue-600">modern web & DevOps tech</span>.
            </p>
          </div>

          {/* Resume Link */}
          <div>
            <div className="flex items-end gap-1 mt-4 text-blue-600 group">
              <p className="text-gray-800">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-calistoga font-[100] underline transition-colors duration-300 group-hover:text-blue-700"
                  href="src/assets/resume/shivdutt.pdf"
                >
                  Check out my Resume
                </a>
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-up-right size-5 text-blue-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                aria-hidden="true"
              >
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <section className="mt-8 flex items-center gap-8">
              <section className="flex gap-6">
                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/shivdutt-bhadakwad-07a462280/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition"
                  title="LinkedIn"
                >
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/shivdutt-B"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition"
                  title="GitHub"
                >
                  <span className="sr-only">GitHub</span>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>

                {/* Twitter */}
                <a
                  href="https://x.com/shivdutt059"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition"
                  title="Twitter"
                >
                  <span className="sr-only">Twitter</span>
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    height="20"
                    width="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </section>
            </section>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Intro
