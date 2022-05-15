import {
  ArrowForwardIosRounded,
  BusinessCenter,
  ExploreOutlined,
  GroupOutlined,
  OndemandVideoSharp,
} from '@mui/icons-material';
import Image from 'next/image';
import React from 'react';
import HeaderLink from '../components/HeaderLink';

function Home() {
  return (
    <div>
      <header className="flex justify-around items-center py-4">
        <div className="relative w-36 h-10">
          <Image
            src="/li-logo.png"
            alt="logo"
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="flex items-center sm:divide-x divide-gray-300">
          <div className="hidden sm:flex space-x-8 pr-4">
            <HeaderLink Icon={ExploreOutlined} text="Discover" />
            <HeaderLink Icon={GroupOutlined} text="People" />
            <HeaderLink Icon={OndemandVideoSharp} text="Learning" />
            <HeaderLink Icon={BusinessCenter} text="Jobs" />
          </div>

          <div className="pl-4">
            <button className="text-blue-700 hover:text-blue-400 font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-blue-400">
              Sign In
            </button>
          </div>
        </div>
      </header>

      <main className="flex flex-col xl:flex-row items-center max-w-screen-lg mx-auto">
        <div className="space-y-6 xl:space-y-10">
          <h1 className="text-3xl md:text-5xl text-amber-800/80 max-w-xl !leading-snug pl-4 xl:pl-0 font-light">
            Welcome to your professional community.
          </h1>

          <div className="space-y-4">
            <div className="intent">
              <h2 className="text-xl">Search for a job</h2>
              <ArrowForwardIosRounded className="text-gray-700" />
            </div>

            <div className="intent">
              <h2 className="text-xl">Find a person that you know</h2>
              <ArrowForwardIosRounded className="text-gray-700" />
            </div>

            <div className="intent">
              <h2 className="text-xl">Learn a new skill</h2>
              <ArrowForwardIosRounded className="text-gray-700" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
