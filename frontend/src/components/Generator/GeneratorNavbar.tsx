import { useNavigate } from "react-router-dom";

const GeneratorNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-primary py-[25px] px-[80px] flex items-center">
      <button onClick={() => navigate("/")} className="flex items-center gap-3">
        <img src="/logo.svg" alt="logo" className="h-[32px] w-[32px]" />
        ReadME Generator
      </button>
      <div className="ml-auto flex items-center gap-[30px]  ">
        <CustomButton>
          <img src="/icons/coin.svg" alt="coin" className="h-[16px] w-[16px]" />
          Ko-Fi
        </CustomButton>
        <CustomButton>
          <img src="/icons/copy.svg" alt="copy" className="h-[16px] w-[16px]" />
          Copy
        </CustomButton>
        <CustomButton>
          <img
            src="/icons/download.svg"
            alt="download"
            className="h-[16px] w-[16px]"
          />
          Download
        </CustomButton>

        {/* TODO: Add a Seperator Here */}
      </div>
    </div>
  );
};

const CustomButton: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <button
      className="gap-[15.6px] flex items-center justify-between 
      bg-themeGreen text-white font-poppins text-md font-semibold px-7 py-3 rounded-lg
      transition-all hover:bg-opacity-80"
    >
      {children}
    </button>
  );
};

export default GeneratorNavbar;
