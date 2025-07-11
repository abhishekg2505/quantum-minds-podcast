import Image from "next/image";
import { Button } from "@/src/components/ui/button";

const CallToAction: React.FC = () => {
  return (
    <section className="bg-black text-white px-4 md:px-20 pt-14 pb-20">
      <div className="max-w-7xl mx-auto">
        <div className="px-0 grid grid-cols-1 md:grid-cols-2 gap-6 rounded-xl p-6">
          <div className="bg-roadshow-reverse-border rounded-[20px] p-[1px] md:min-h-[300px]">
            <div className="bg-[url('/images/technical/mesh-bg.svg')] bg-no-repeat bg-top bg-contain bg-[#0C0318] rounded-[20px] flex flex-col justify-between items-center text-center p-6 h-full">
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/images/technical/shield.svg"
                  alt="Shield Icon"
                  width={135}
                  height={135}
                />
                <h5 className="text-h5 font-montserrat font-medium mt-5">
                  Build secure and innovative solutions with Quranium.
                </h5>
              </div>
              <Button className="group mt-20">Build with us</Button>
            </div>
          </div>
          <div className="bg-roadshow-reverse-border rounded-[20px] p-[1px] md:min-h-[300px]">
            <div className="bg-[url('/images/technical/mesh-bg.svg')] bg-no-repeat bg-top bg-contain bg-[#0C0318] rounded-[20px] flex flex-col justify-between items-center text-center p-6 h-full">
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/images/technical/download.svg"
                  alt="Download Icon"
                  width={135}
                  height={135}
                />
                <h5 className="text-h5 font-montserrat font-medium mt-5">
                  Read our whitepaper for comprehensive details on
                  Quranium&rsquo;s innovative infrastructure.
                </h5>
              </div>
              <Button className="group mt-20">
                <span className="text-buttons font-montserrat font-medium">
                  Download Whitepaper
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
