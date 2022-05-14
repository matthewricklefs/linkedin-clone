import Image from 'next/image';
import React from 'react';

function Home() {
  return (
    <div>
      <header>
        <div className="relative w-36 h-10">
          <Image
            src="/li-logo.png"
            alt="logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </header>
    </div>
  );
}

export default Home;
