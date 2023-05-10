import { FaTelegram, FaTwitter } from 'react-icons/fa';

import { SiGitbook, SiMedium } from 'react-icons/si';
export default function App() {
  const Links = [
    {
      icon: <FaTelegram className="text-[#928165]" size={20} />,
      href: '',
      name: 'Telegram',
    },
    {
      icon: <FaTwitter className="text-[#928165]" size={20} />,
      href: '',
      name: 'twitter',
    },
    {
      icon: <SiMedium className="text-[#928165]" size={20} />,
      href: '',
      name: 'medium',
    },
    {
      icon: <SiGitbook className="text-[#928165]" size={20} />,
      href: '',
      name: 'gitbook',
    },
  ];

  return (
    <main className=" relative ">
      <header className="py-6 container mx-auto px-5 lg:px-14">
        <img src="/Logo.png" alt="follopa" className="max-w-[120px] w-full" />
      </header>
      {/* Hero section */}
      <section className="hero container relative mx-auto  ">
        <div className="flex   flex-col lg:flex-row px-5 lg:px-16">
          <div className=" order-last lg:order-first">
            <img
              className=" hidden lg:block lg:max-w-[658px] w-full"
              src="/hero.png"
              alt="foloopa"
            />
            <img
              className=" lg:hidden max-w-[658px] w-full"
              src="/hero-mobile.png"
              alt="foloopa"
            />
          </div>
          <div className=" order-first lg:order-last">
            <img
              className="max-w-[758px] hidden md:block w-full"
              src="/hero_logo.png"
              alt="foloopa"
            />
            <img
              className=" md:hidden w-full"
              src="/hero_logo_mobile.png"
              alt="foloopa"
            />
          </div>
        </div>
        <div className="w-full min-h-[120px]  relative flex py-4 justify-center bg-white md:rounded-[96px]">
          <ul className="grid  grid-cols-2 place-items-center md:grid-cols-4 gap-6">
            {Links.map((link, i) => (
              <li
                key={i}
                className=" flex w-full min-w-[176px] bg-[#EFE9E1] max-h-[48px] rounded-full px-5 py-4 items-center gap-2"
              >
                {link.icon}
                <a
                  className="text-sm text-[#534741]  uppercase font-semibold"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className=" absolute right-0 md:right-[3%] -z-10 top-[-70%] md:top-[-100%]">
            <svg
              width="484"
              className="max-w-[204px] md:max-w-full"
              height="151"
              viewBox="0 0 484 151"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M208.34 111.094C208.34 111.094 228.43 108.034 245.79 90.6637C263.15 73.2937 293.11 68.5337 313.53 77.0437C333.96 85.5537 330.89 91.0037 345.19 86.9137C359.49 82.8237 373.1 56.9537 401.7 67.5137C430.3 78.0637 423.83 102.574 445.96 104.964C468.09 107.344 483.41 114.834 483.41 141.394H160C160 141.394 160 104.634 208.34 111.094Z"
                fill="#F8E3CB"
              />
              <path
                d="M47.49 112.254C47.49 112.254 56.68 129.954 86.98 120.764C117.28 111.574 132.6 79.5737 155.41 82.6337C178.22 85.6937 174.81 104.764 190.13 100.674C205.45 96.5837 213.62 78.1337 233.7 82.4237C253.78 86.7137 249.02 123.144 252.76 133.014C256.5 142.884 284.76 133.354 284.76 150.374H0C0 150.374 3.83 143.144 17.62 137.774C31.4 132.424 11.49 112.004 47.49 112.254Z"
                fill="white"
              />
              <path
                d="M392.13 135.143C392.13 135.143 393.169 113.003 393.342 108.455C393.516 103.908 406.351 103.39 408.089 98.7261C409.821 94.0669 409.475 86.6446 408.089 85.7827C406.703 84.9208 406.356 91.1314 403.926 94.584C401.495 98.0366 397.159 102.006 394.733 101.144C392.303 100.283 391.263 91.319 393.867 85.7015C396.471 80.0892 399.936 63.8655 397.857 62.8262C395.773 61.7919 394.993 78.5327 392.395 78.188C389.791 77.8432 389.184 63.6881 392.135 56.0984C395.085 48.5037 396.817 41.2538 396.817 41.2538C396.817 41.2538 409.225 41.0814 409.266 38.1459C409.307 35.2104 412.603 14.8447 410 14.6723C407.396 14.4999 406.356 32.9695 403.579 34.0038C400.802 35.0381 398.203 34.8657 398.203 34.8657C398.203 34.8657 398.03 18.1249 395.773 12.2539C393.516 6.38807 393.689 0 391.783 0C389.877 0 390.051 11.0473 391.783 18.4696C393.516 25.892 392.823 44.7013 388.486 51.6065C388.486 51.6065 383.804 53.8525 383.284 49.5329C382.764 45.2184 383.804 29.1671 381.026 28.8224C378.249 28.4776 378.769 49.8777 378.942 52.296C379.116 54.7143 387.615 56.4381 387.615 56.4381C387.615 56.4381 385.358 68.1749 386.402 78.0105C387.442 87.8461 388.833 101.312 386.229 101.484C383.625 101.657 382.759 86.8119 379.982 86.2947C377.205 85.7776 378.423 102.174 380.848 103.897C383.279 105.621 387.961 106.833 387.788 113.905C387.615 120.983 387.615 124.953 385.531 125.125C383.447 125.297 380.262 118.22 378.387 118.22C376.512 118.22 376.339 123.396 379.111 125.47C381.888 127.543 386.927 129.926 386.744 131.686C386.56 133.445 386.744 136 386.744 136C386.744 136 389.526 135.316 392.13 135.143Z"
                fill="#EBC395"
              />
            </svg>
          </div>
          <div className=" absolute  left-0 md:left-[5%] lg:left-[3%] -z-10   top-[85%]">
            <svg
              width="290"
              height="48"
              viewBox="0 0 290 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M290 0.216034C290 0.216034 250.339 41.3717 214.085 46.8887C177.832 52.4056 167.169 35.4338 140.732 38.4027C114.29 41.3717 116.851 51.5526 93.3928 46.0412C69.9346 40.5242 52 24.1118 52 24.1118V0L290 0.216034Z"
                fill="#ECE6DF"
              />
              <path
                d="M0 13C0 13 23.4397 42.3429 55.779 39.8497C88.1182 37.351 95.1718 20.295 117.561 24.4558C139.951 28.6166 147.827 39.8497 164.831 34.4395C181.828 29.0294 203 13 203 13H0Z"
                fill="white"
              />
            </svg>
          </div>
        </div>

        <div className=" flex absolute top-[97%] lg:top-[85%] z-[99999] w-full justify-between">
          <div className="md:w-auto w-[176px]">
            <img src="/1.png" className="" alt="" />
          </div>
          <div className="lg:pt-4 md:w-auto w-[202px]">
            <img src="/2.png" alt="" />
          </div>
        </div>
      </section>
    </main>
  );
}
