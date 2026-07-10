import React from "react";
import Image from "next/image";

const Profile = () => {
  return (
    <section id="profile">
      <div className="relative w-full bg-[#F4F4F5]">
        <img
          src="/images/profile/Layer-Bunga.webp"
          alt="Nicholas & Clara"
          className="absolute inset-0 w-full h-full object-cover object-top pointer-events-none"
        />
        <div className="relative pt-[101px] pb-[101px] flex flex-col items-center justify-center leading-none">
          <div className="flex flex-col items-center text-center justify-center leading-none">
            <h3 className="font-athelas text-[12px] text-[#717071] leading-[13.5px]">
              MR. TOMI TANUDJAJA (†)
              <br />
              MRS. KO KOEY FAH
            </h3>
            <p className="pt-[18px] font-athelas italic text-[12px] text-[#717071]">
              together with
            </p>
            <h3 className="pt-[19.5px] font-athelas text-[12px] text-[#717071] leading-[14px]">
              MR. EDIH SUTISNA
              <br />
              MRS. INA MARINA
            </h3>
          </div>
          <p className="pt-[20px] font-athelas italic text-[12px] text-[#717071]">
            Cordially invite you to celebrate the wedding reception of
          </p>
          <div className="pt-[9px] flex flex-col items-center text-center justify-center leading-none">
            <Image
              src="/images/profile/William.webp"
              alt="William"
              width={247}
              height={92}
              className="h-auto w-[247px]"
            />
            <h3 className="-mt-[11px] font-averne text-[18px] text-[#50473F]">
              CHRISTIAN TANUDJAJA
            </h3>
            <Image
              src="/images/profile/Maria.webp"
              alt="William"
              width={247}
              height={92}
              className="h-auto w-[247px]"
            />
            <h3 className="-mt-[23px] font-averne text-[18px] text-[#50473F]">LAWRENA</h3>
          </div>
          <div className="pt-[27.5px] flex flex-col items-center text-center justify-center leading-none">
            <p className="font-athelas text-[12px] text-[#717071]">
              SATURDAY, <span className="font-urw">19</span> SEPTEMBER 2026
            </p>
            <p className="pt-[16px] font-athelas text-[12px] text-[#717071] leading-[16px]">
              INTERCONTINENTAL HOTEL BANDUNG <br />
              <span className="italic">
                Jl. Resor Dago Pakar Raya 2B, Bandung
              </span>
            </p>
            <p className="pt-[30px] font-athelas italic text-[12px] text-[#717071] leading-[15px]">
              Our joy will be complete with your presence <br />
              and blessing at our celebration of love
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
