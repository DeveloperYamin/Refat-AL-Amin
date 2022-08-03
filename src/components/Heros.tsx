import { Button, Tooltip } from "flowbite-react";
import Image from "next/image";
import { HiInbox, HiPhone } from "react-icons/hi";

export default function Heros(): JSX.Element {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="container px-6 py-10 mx-auto">
        <div className="items-center lg:flex">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-lg">
              <h1 className="text-3xl flex items-center flex-wrap font-semibold leading-tight pb-1.5 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                <span className="mr-2">Hello,</span>
                <span className="font-extrabold">My Name Is Refat AL Amin</span>
              </h1>
              <h2 className="text-2xl font-semibold text-gray-700 uppercase dark:text-white lg:text-3xl">
                I'm a Digital Markter
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
                beatae error laborum ab amet sunt recusandae? Reiciendis natus
                perspiciatis optio.
              </p>
              <div className="flex flex-wrap items-center mt-6 sm:mt-8 gap-16">
                <Tooltip content="developer.yamin@gmail.com" placement="bottom">
                  <Button outline gradientDuoTone="tealToLime">
                    <span className="font-bold flex items-center uppercase text-yellow-500">
                      <HiInbox size={25} />
                      Email
                    </span>
                  </Button>
                </Tooltip>
                <Tooltip content="+8801403370507" placement="bottom">
                  <Button outline gradientDuoTone="redToYellow">
                    <span className="font-bold flex items-center uppercase text-lime-500">
                      <HiPhone size={25} />
                      Call Me
                    </span>
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2 bg-gradient-to-r from-sky-100 to-indigo-100 sm:p-12 p-6 rounded-full">
            <Image
              src="https://rahianhussain.com/wp-content/uploads/2022/05/IMG_31421-modified-1-1-1-1-1-1-1-768x768.png"
              alt="hero"
              width={768}
              height={768}
              className="rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
