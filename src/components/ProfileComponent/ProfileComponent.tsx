"use client";
import { useEffect, useState } from "react";
import HeadlineComponent from "../HeadlineComponent";
import TitleComponent from "../TitleComponent";
import moment from "moment";
import Image from "next/image";

const ProfileComponent = () => {
  const startedProgramming = moment("2018-01-01");
  const startedApprenticeship = moment("2023-08-20");
  const born = moment("2007-07-20");
  const [yearsOfExp, setYearsOfExp] = useState<number>(0);
  const [yearsInApprenticeship, setYearsInApprenticeship] = useState<number>(0);
  const [age, setAge] = useState<number>(0);
  const [languages] = useState<number>(
    [
      "TypeScript/JavaScript",
      "Python",
      "Rust",
      "Go",
      "C",
      "C++",
      "x86 Assembly",
      "Java",
    ].length
  );

  useEffect(() => {
    const apprenticeMonths =
      moment().diff(startedApprenticeship, "months") / 12;
    setYearsInApprenticeship(parseFloat(apprenticeMonths.toFixed(1)));
    setYearsOfExp(moment().diff(startedProgramming, "years"));
    setAge(moment().diff(born, "years"));
  }, [startedProgramming, startedApprenticeship, born]);

  return (
    <section className="flex flex-col md:flex-row justify-center md:items-center p-4 sm:p-8 md:p-12 lg:p-16 max-w-screen-lg mx-auto space-y-8 md:space-y-0 md:space-x-10">
      {/* Image Container */}
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 flex justify-center md:justify-center">
        <Image
          src="profile.jpg"
          alt="Your Image"
          width={400}
          height={400}
          className="w-full h-auto sm:w-64 sm:h-64 md:w-64 md:h-64 lg:w-72 lg:h-72 object-cover rounded-sm"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-2/3 text-left">
        <div className="text-blue-100">
          <TitleComponent title="About Me" />
        </div>

        {/* Headline Details */}
        <div className="flex flex-wrap justify-center md:justify-start mt-4 gap-8">
          <HeadlineComponent number={age} topic="Years Old" />
          <HeadlineComponent number={yearsOfExp} topic="Years Experience" />
          <HeadlineComponent number={languages} topic="Languages" />
          <HeadlineComponent
            number={yearsInApprenticeship}
            topic="Years in Training"
          />
        </div>

        {/* Description */}
        <p className="text-md sm:text-md md:text-lg text-gray-300 mt-8 max-w-lg">
          My name is{" "}
          <span className="text-blue-400 font-semibold">Fabrice</span>. I
          am a full-stack developer based in{" "}
          <span className="text-blue-400 font-semibold">
            Baselland, Switzerland
          </span>
          , &#x1F1E8;&#x1F1ED;. I have a passion for learning new technologies
          and working on projects. I am currently focusing on{" "}
          <span className="text-blue-400 font-semibold">
            Backend Development
          </span>{" "}
          and <span className="text-blue-400 font-semibold">DevOps</span>. I
          worked with a variety of languages and frameworks, but I am most
          comfortable with{" "}
          <span className="text-blue-400 font-semibold">
            TypeScript and C/C++
          </span>
          .
        </p>
      </div>
    </section>
  );
};

export default ProfileComponent;
