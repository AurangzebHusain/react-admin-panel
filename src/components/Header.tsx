import React from "react";

const Header = ({ category, title }: { category: String; title: String }) => {
  return (
    <div className="mb-10">
      <p className="text-gray-400">{category}</p>
      <p className="text-3xl font-extralight tracking-tighter text-slate-900">
        {title}
      </p>
    </div>
  );
};

export { Header };
