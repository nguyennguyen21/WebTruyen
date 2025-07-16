import React from 'react';
import { FaEye } from 'react-icons/fa'; // Sử dụng react-icons để thêm icon mắt

const ComicsViewRank = () => {
  const rankingData = [
    {
      id: 1,
      rank: '01',
      title: 'Bách Luyện Thành Thần',
      chapter: 'Chapter 1295',
      views: '41M',
      image:
        'https://storage.googleapis.com/a1aa/image/8eba4afc-cebd-4c80-c865-019d19ab9162.jpg ',
      bgColor: 'bg-blue-600',
      borderColor: 'border-blue-300',
    },
    {
      id: 2,
      rank: '02',
      title: 'Đại Phụng Đả Canh Nhân',
      chapter: 'Chapter 547',
      views: '173K',
      image:
        'https://storage.googleapis.com/a1aa/image/48da0366-556d-46b9-29df-1722ba6e2e67.jpg ',
      bgColor: 'bg-green-600',
      borderColor: 'border-green-300',
    },
    {
      id: 3,
      rank: '03',
      title: 'Tinh Giáp Hồn Tướng',
      chapter: 'Chapter 290',
      views: '132K',
      image:
        'https://storage.googleapis.com/a1aa/image/ed39282b-f63b-4c26-6df4-66fbcaef6387.jpg ',
      bgColor: 'bg-orange-600',
      borderColor: 'border-orange-300',
    },
    {
      id: 4,
      rank: '04',
      title: 'Tự Kỷ Luật Ta Đầy Bất Khả ...',
      chapter: 'Chapter 132',
      views: '6K',
      image:
        'https://storage.googleapis.com/a1aa/image/19b317f5-9edd-4de8-6242-88edc423ffb2.jpg ',
      bgColor: 'bg-gray-400',
      borderColor: 'border-gray-300',
    },
    {
      id: 5,
      rank: '05',
      title: 'Mỗi Tuần Ta Có Một Nghề N...',
      chapter: 'Chapter 813',
      views: '5M',
      image:
        'https://storage.googleapis.com/a1aa/image/c0d56289-5ab6-4ff3-9238-5e7dbca73750.jpg ',
      bgColor: 'bg-yellow-600',
      borderColor: 'border-yellow-300',
    },
    {
      id: 6,
      rank: '06',
      title: 'Chàng Rể Mạnh Nhất Lịch Sử',
      chapter: 'Chapter 316',
      views: '119K',
      image:
        'https://storage.googleapis.com/a1aa/image/35086811-143a-4e5f-5c09-83a6a72f4877.jpg ',
      bgColor: 'bg-pink-600',
      borderColor: 'border-pink-300',
    },
    {
      id: 7,
      rank: '07',
      title: 'Mạt Thế Siêu Cấp Hệ Thống',
      chapter: 'Chapter 356',
      views: '5M',
      image:
        'https://storage.googleapis.com/a1aa/image/39afb2e3-1355-4700-8db3-6e70667ecaaf.jpg ',
      bgColor: 'bg-indigo-600',
      borderColor: 'border-indigo-300',
    },
  ];

  return (
    <div className="w-full h-full sm:max-w-xs md:h-185 xl:h-170 md:max-w-md lg:w-200 xl:w-200 2xl:max-w-110 2xl:mr-15 mx-auto bg-white rounded-2xl shadow-2xl border border-gray-300 overflow-hidden ">
      {/* Tabs */}
      <div className="flex border-b border-black text-gray-700 text-sm font-semibold bg-purple-50">
        <button
          aria-current="page"
          className="flex-1 py-4 border-b-4 border-black text-purple-900 transition-colors duration-300 hover:text-purple-800 focus:outline-none"
          type="button"
        >
          Top Tháng
        </button>
        <button
          className="flex-1 py-4 text-black hover:text-purple-700 transition-colors duration-300 focus:outline-none"
          type="button"
        >
          Top Tuần
        </button>
        <button
          className="flex-1 py-4 text-black hover:text-purple-700 transition-colors duration-300 focus:outline-none"
          type="button"
        >
          Top Ngày
        </button>
      </div>

      {/* List Items */}
      <ul className="divide-y divide-purple-200">
        {rankingData.map((item, index) => (
          <li
            key={item.id}
            className={`flex items-center text-center px-5 py-4 transition-colors duration-200 cursor-pointer ${
              index === rankingData.length - 1
                ? 'rounded-b-2xl'
                : ''
            } ${
              index === 0
                ? 'hover:bg-purple-100'
                : index === 1
                ? 'hover:bg-green-100'
                : index === 2
                ? 'hover:bg-orange-100'
                : index === 3
                ? 'hover:bg-gray-100'
                : index === 4
                ? 'hover:bg-yellow-100'
                : index === 5
                ? 'hover:bg-pink-100'
                : 'hover:bg-indigo-100'
            }`}
          >
            <div className={`w-8 text-lg font-extrabold ${item.bgColor} select-none`}>
              {item.rank}
            </div>
            <img
              src={item.image}
              alt={`Illustration for ${item.title}`}
              className={`w-14 h-14 object-cover rounded-lg mx-5 shadow-lg border ${item.borderColor}`}
              width="56"
              height="56"
            />
            <div className="flex-1 min-w-0">
              <p className="text-base font-semibold text-black break-words drop-shadow-sm">
                {item.title}
                </p>
              <p className="text-sm text-gray-400 font-medium mt-1">{item.chapter}</p>
            </div>
            {/* <div className="flex items-center space-x-2 text-blue-300 text-sm font-light ml-6 select-none">
              <FaEye />
              <span>{item.views}</span>
            </div> */}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default ComicsViewRank;