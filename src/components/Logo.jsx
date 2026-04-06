import { Glasses } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex flex-col items-start font-sans select-none tracking-tight">
      <span className="text-[#3c9c34] font-bold text-[2rem] leading-none mb-1">
        PowerPlatform
      </span>
      <div className="flex items-center gap-3 ml-[3.5rem]">
        <span className="text-[#312f2f] font-semibold text-[2.2rem] leading-none tracking-normal">
          Geeks
        </span>
        <Glasses className="text-[#312f2f] mb-1" size={50} strokeWidth={3} />
      </div>
    </div>
  );
};

export default Logo;
