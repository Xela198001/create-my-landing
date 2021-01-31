import React from 'react';
import { Link } from "react-router-dom";

export default function top(params) {
  return (
    <div className="top bg w-full h-10 flex justify-between items-center pt-2 pb-2 pr-10 pl-10">
      <div>Логотип</div>
      <div className="btn bg-btnGold w-48 h-12  mt-12 text-white text-center font-bold z-20 relative">
        <Link
          to="/landing"
          className="flex justify-center items-center w-full h-full box-border"
        >
          <span>Бронировать</span>
        </Link>
      </div>
      <div>SVG соцсети</div>
    </div>
  );
};
