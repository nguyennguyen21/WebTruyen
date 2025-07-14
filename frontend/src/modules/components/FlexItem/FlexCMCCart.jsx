// src/components/FlexCMCItem.jsx
import React from "react";
import ComicCartItem from "../Cart/ComicCartItem";

const FlexCMCItem = () => {
  const comics = [
    {
      title: "One Piece - Đảo Hải Tặc Vĩ Đại",
      chapter: "Chap 1085",
      time: "2 giờ trước",
      imageSrc:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/134a3017-1348-455d-8c30-a3ef1bd14a57.png ",
    },
   
    {
      title: "Attack on Titan - Cuộc Tấn Công Của Người Khổng Lồ",
      chapter: "Chap 139",
      time: "3 ngày trước",
      imageSrc:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ec0825df-7105-4cf0-b771-0ad05cf081b2.png ",
    },
    {
      title: "Demon Slayer: Kimetsu no Yaiba",
      chapter: "Chap 205",
      time: "5 giờ trước",
      imageSrc:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e70ce81c-4720-4c81-92d8-7c36bcce82ab.png ",
    },
      {
      title: "One Piece - Đảo Hải Tặc Vĩ Đại",
      chapter: "Chap 1085",
      time: "2 giờ trước",
      imageSrc:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/134a3017-1348-455d-8c30-a3ef1bd14a57.png ",
    },
   
    {
      title: "Attack on Titan - Cuộc Tấn Công Của Người Khổng Lồ",
      chapter: "Chap 139",
      time: "3 ngày trước",
      imageSrc:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ec0825df-7105-4cf0-b771-0ad05cf081b2.png ",
    },
    {
      title: "Demon Slayer: Kimetsu no Yaiba",
      chapter: "Chap 205",
      time: "5 giờ trước",
      imageSrc:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e70ce81c-4720-4c81-92d8-7c36bcce82ab.png ",
    },
      {
      title: "One Piece - Đảo Hải Tặc Vĩ Đại",
      chapter: "Chap 1085",
      time: "2 giờ trước",
      imageSrc:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/134a3017-1348-455d-8c30-a3ef1bd14a57.png ",
    },
   
    {
      title: "Attack on Titan - Cuộc Tấn Công Của Người Khổng Lồ",
      chapter: "Chap 139",
      time: "3 ngày trước",
      imageSrc:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ec0825df-7105-4cf0-b771-0ad05cf081b2.png ",
    },
    {
      title: "Demon Slayer: Kimetsu no Yaiba",
      chapter: "Chap 205",
      time: "5 giờ trước",
      imageSrc:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e70ce81c-4720-4c81-92d8-7c36bcce82ab.png ",
    },
      {
      title: "One Piece - Đảo Hải Tặc Vĩ Đại",
      chapter: "Chap 1085",
      time: "2 giờ trước",
      imageSrc:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/134a3017-1348-455d-8c30-a3ef1bd14a57.png ",
    },
   
    {
      title: "Attack on Titan - Cuộc Tấn Công Của Người Khổng Lồ",
      chapter: "Chap 139",
      time: "3 ngày trước",
      imageSrc:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ec0825df-7105-4cf0-b771-0ad05cf081b2.png ",
    },
    {
      title: "Demon Slayer: Kimetsu no Yaiba",
      chapter: "Chap 205",
      time: "5 giờ trước",
      imageSrc:
        "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e70ce81c-4720-4c81-92d8-7c36bcce82ab.png ",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {comics.map((comic, index) => (
          <ComicCartItem
            key={index}
            title={comic.title}
            chapter={comic.chapter}
            time={comic.time}
            imageSrc={comic.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default FlexCMCItem;