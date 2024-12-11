<div class="bg-transparent rounded-[16px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[2.5px] border border-[rgba(255,252,252,0.18)] h-[100px] w-full fixed">

      <nav className="relative flex justify-between items-center h-[60px] w-full px-[40px] top-0 dark:text-white">
        {/* Logo and Links */}
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            width="25"
            height="25"
            id="user"
          >
            <rect width="256" height="256" fill="none"></rect>
            <circle
              cx="128"
              cy="96"
              r="64"
              fill="none"
              stroke="#000"
              stroke-miterlimit="10"
              stroke-width="16"
              class="stroke-black dark:stroke-white"
            ></circle>
            <path
              fill="none"
              stroke="#000"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="16"
              d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002"
              class="stroke-black dark:stroke-white"
            ></path>
          </svg>
          {/* <div className="flex px-6 gap-2">
            <p>Blogs</p>
            <p>Project</p>
            <p>About</p>
          </div> */}
        </div>

        <div id="myDomain">
          <a href="#" className="font-bold">
            raazdura.com.np
          </a>
        </div>

        <div
          className={`flex justify-center items-center hover:cursor-pointer`}
        >
          <div className="flex items-center gap-2">
            {/* Sun & Moon */}
            <div onClick={darkModeHandler}>
              {/* Sun */}
              <svg
                enableBackground="new 0 0 512 512"
                height="25px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 502 502"
                width="25px"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className="p-[1px] rounded-full hidden dark:block"
              >
                <g>
                  <g>
                    <path
                      d="M256,144c-61.75,0-112,50.25-112,112s50.25,112,112,112s112-50.25,112-112S317.75,144,256,144z M256,336    c-44.188,0-80-35.812-80-80c0-44.188,35.812-80,80-80c44.188,0,80,35.812,80,80C336,300.188,300.188,336,256,336z M256,112    c8.833,0,16-7.167,16-16V64c0-8.833-7.167-16-16-16s-16,7.167-16,16v32C240,104.833,247.167,112,256,112z M256,400    c-8.833,0-16,7.167-16,16v32c0,8.833,7.167,16,16,16s16-7.167,16-16v-32C272,407.167,264.833,400,256,400z M380.438,154.167    l22.625-22.625c6.25-6.25,6.25-16.375,0-22.625s-16.375-6.25-22.625,0l-22.625,22.625c-6.25,6.25-6.25,16.375,0,22.625    S374.188,160.417,380.438,154.167z M131.562,357.834l-22.625,22.625c-6.25,6.249-6.25,16.374,0,22.624s16.375,6.25,22.625,0    l22.625-22.624c6.25-6.271,6.25-16.376,0-22.625C147.938,351.583,137.812,351.562,131.562,357.834z M112,256    c0-8.833-7.167-16-16-16H64c-8.833,0-16,7.167-16,16s7.167,16,16,16h32C104.833,272,112,264.833,112,256z M448,240h-32    c-8.833,0-16,7.167-16,16s7.167,16,16,16h32c8.833,0,16-7.167,16-16S456.833,240,448,240z M131.541,154.167    c6.251,6.25,16.376,6.25,22.625,0c6.251-6.25,6.251-16.375,0-22.625l-22.625-22.625c-6.25-6.25-16.374-6.25-22.625,0    c-6.25,6.25-6.25,16.375,0,22.625L131.541,154.167z M380.459,357.812c-6.271-6.25-16.376-6.25-22.625,0    c-6.251,6.25-6.271,16.375,0,22.625l22.625,22.625c6.249,6.25,16.374,6.25,22.624,0s6.25-16.375,0-22.625L380.459,357.812z"
                      fill="white"
                    />
                  </g>
                </g>
              </svg>
              {/* Moon */}
              <svg
                enableBackground="new 0 0 512 512"
                height="30px"
                width="30px"
                id="Layer_1"
                version="1.1"
                viewBox="0 0 502 502"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                className=" rounded-full flex dark:hidden"
              >
                <path
                  d="M248.082,263.932c-31.52-31.542-39.979-77.104-26.02-116.542c-15.25,5.395-29.668,13.833-41.854,26.02  c-43.751,43.75-43.751,114.667,0,158.395c43.729,43.73,114.625,43.752,158.374,0c12.229-12.186,20.646-26.604,26.021-41.854  C325.188,303.91,279.604,295.451,248.082,263.932z"
                  fill="black"
                />
              </svg>
            </div>

            <MusicPlayer />

            {/* Resume*/}
            <a
              className="border border-black dark:border-white rounded-lg px-2 py-1 text-sm"
              href="/RaazDuraCV.pdf"
              download="RaazDuraCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>
    </div>