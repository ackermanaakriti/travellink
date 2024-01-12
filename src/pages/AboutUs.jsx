import React, { useEffect, useState } from "react";
import {
  AboutTravelCard,
  AboutUsSlider,
  MetaDecorator,
  PageTopComponent,
  PageTopTextComponent,
} from "../components";
import { aboutTopBanner, nattaLogo, nepGov, ntbLogo, ourTeam } from "../assets";
import { useGlobalContext } from "../context/useGlobalContext";
import {
  FetchAboutDatas,
  FetchAboutDetailsCardDatas,
  FetchInnerTopAboutDatas,
  FetchPartnerDatas,
  FetchtopAboutDatas,
} from "../utils/apiQueries";

const AboutUs = () => {
  const [aboutUsData, setAboutUsData] = useState({});
  useEffect(() => {
    FetchAboutDatas()
      .then((res) => {
        setAboutUsData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [topaboutUsData, setTopaboutUsData] = useState({});
  useEffect(() => {
    FetchtopAboutDatas()
      .then((res) => {
        setTopaboutUsData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [innerTopaboutUsData, setInnerTopaboutUsData] = useState({});
  useEffect(() => {
    FetchInnerTopAboutDatas()
      .then((res) => {
        setInnerTopaboutUsData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [aboutDetailsCardData, setAboutDetailsCardData] = useState([]);
  useEffect(() => {
    FetchAboutDetailsCardDatas()
      .then((res) => {
        setAboutDetailsCardData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [partnerData, setPartnerData] = useState([]);
  useEffect(() => {
    FetchPartnerDatas()
      .then((res) => {
        setPartnerData(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const { setNavActive } = useGlobalContext();

  // Setting the nav state
  useEffect(() => {
    setNavActive("about-us");
  }, []);
  const { siteInfo } = useGlobalContext();
  return (
    <>
      <MetaDecorator title="About Us" />

      <div className="w-full bg-[#F5FCFF]">
        <div>
          <PageTopComponent
            title={"About Us"}
            image={aboutUsData?.image}
            setTextA={true}
            setTextB={false}
          />
        </div>
        <div className="w-full lg:px-globalPadding px-[11px] mt-[3%]">
          <PageTopTextComponent
            title={aboutUsData?.title}
            discription={aboutUsData?.details}
          />
        </div>
        <div className="my-[2%]">
          <AboutUsSlider />
        </div>
        <div className="w-full lg:px-globalPadding px-[11px] pb-[2%]">
          <PageTopTextComponent
            title={innerTopaboutUsData?.title}
            discription={innerTopaboutUsData?.details}
          />
        </div>
        <div className="w-full lg:px-globalPadding px-[11px] pb-[2%]">
          <div className="w-full flex gap-[25px] flex-col justify-between lg:flex-row">
            {aboutDetailsCardData?.slice(0,4)?.map((item, index) => (
              <AboutTravelCard data={item} key={index} />
            ))}{" "}
          </div>
        </div>
        <div className="w-full lg:px-globalPadding px-[11px] pt-[4%] lg:pt-[0%] lg:pb-[2%]">
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-semibold font-inter text-[32px] text-[#0E9EDA] leading-[32px] text-center">
              Our Team
            </h2>
            <img
              src={topaboutUsData?.image}
              alt="team Image"
              className="py-8 object-contain w-full h-[55vh]"
            />
          </div>
        </div>
        <div className="w-full lg:px-globalPadding px-[11px] pb-[2%]">
          <div className="flex flex-col items-center justify-center">
            <h2 className="font-semibold font-inter text-[32px] text-[#2D3134] leading-[32px] text-center">
            {siteInfo?.about_us_associated}
            </h2>
            <div className="flex gap-[18px] justify-center pt-8">
              {partnerData?.map((item, index) => (
                <img
                  src={item?.image}
                  key={index}
                  alt="nepGov Image"
                  className="h-[80px] w-[80px] object-contain"
                />
              ))}
              {/* <img src={nattaLogo}
                            alt='nattaLogo Image'
                            className='h-[80px] w-[80px] object-contain'/>
                        <img src={ntbLogo}
                            alt='ntbLogo Image'
                            className='h-[80px] w-[80px] object-contain'/> */}{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
