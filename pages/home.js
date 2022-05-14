import {
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
            <button className="text-blue-700 font-semibold rounded-full border border-blue-700 px-5 py-1.5 transition-all hover:border-2">
              Sign In
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
