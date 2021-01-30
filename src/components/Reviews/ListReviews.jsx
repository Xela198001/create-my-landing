import React from 'react';

function ListReviews({ data }) {
  return (
    <div className="review1 flex flex-row flex-wrap bg-gray-200 p-2 ml-2 mr-2">
      <div className="avatar flex justify-center bg-gray-700 bg-cover bg-center rounded-full overflow-hidden w-40 h-40  mr-5 ml-5 shadow-md">
        <img className="w-full h-full" src={data.avatar} alt={data.author} />
      </div>
      <div className="review w-full bg-grey-600 mt-2">{data.review}</div>
      <div className="author w-full flex justify-end">{data.author}</div>
      <div className="socialLink w-full flex justify-end"></div>
    </div>
  );
};

export default ListReviews;
