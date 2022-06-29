import React from "react";

const GitStar = () => {
  return (
    <a
      href="https://github.com/zadigg/Tailwind-Background-Designes"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="w-full bg-black text-white py-3 text-lg  ">
        <div className="flex justify-center">
          <span className="animate-pulse">🌟 </span> Star
          Tailwind-Background-Designes on GitHub{" "}
          <span className="animate-pulse">🌟 </span>
        </div>
      </div>
    </a>
  );
};

export default GitStar;
