import React, { useState } from "react";
import { FaSearch, FaBookReader, FaAssistiveListeningSystems  } from "react-icons/fa";
import { TfiWrite } from "react-icons/tfi";
import { CgLoadbarDoc } from "react-icons/cg"
import { RiSpeakLine } from "react-icons/ri";
import { MdTopic } from "react-icons/md";
import {Link} from "react-router-dom"

const MenuDoc = () => {
  // State để quản lý trạng thái mở/đóng menu mobile
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Hàm xử lý khi nút toggle được click
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative top-0  w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-yellow-400">EnglishDoc</h1>
          {/* Menu desktop */}
          <div className="hidden md:flex space-x-6">
            <a href="#listening" className="hover:text-yellow-400 transition">
              Listening
            </a>
            <a href="#speaking" className="hover:text-yellow-400 transition">
              Speaking
            </a>
            <a href="#reading" className="hover:text-yellow-400 transition">
              Reading
            </a>
            <a href="#writing" className="hover:text-yellow-400 transition">
              Writing
            </a>
          </div>
          {/* Nút toggle menu mobile */}
          <button
            className="md:hidden"
            id="menu-toggle"
            onClick={handleToggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Menu mobile */}
        <div
          className={`md:hidden ${
            isMenuOpen ? "block" : "hidden"
          } flex-col space-y-2 pt-4`}
          id="mobile-menu"
        >
          <a
            href="#listening"
            className="block py-2 hover:text-yellow-400 transition"
          >
            Listening
          </a>
          <a
            href="#speaking"
            className="block py-2 hover:text-yellow-400 transition"
          >
            Speaking
          </a>
          <a
            href="#reading"
            className="block py-2 hover:text-yellow-400 transition"
          >
            Reading
          </a>
          <a
            href="#writing"
            className="block py-2 hover:text-yellow-400 transition"
          >
            Writing
          </a>
        </div>
      </div>
    </div>
  );
};


const MenuDocummentchoice = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">English Learning Center</h1>
        <p className="text-lg text-gray-600">Master English with our comprehensive learning resources</p>
      </header>

      {/* Search Box */}
      <div className="max-w-2xl mx-auto mb-12 relative">
        <div className="relative">
          <input
            type="text"
            id="topicSearch"
            placeholder="Search topics..."
            className="search-box w-full py-3 px-6 rounded-full border bg-white border-gray-300 focus:outline-none focus:border-indigo-500"
          />
          <button
            id="searchBtn"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700"
          >
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Documents Section */}
        <div className="lg:w-1/2">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800 border-b pb-2">Documents</h2>

          {/* Writing Section */}
          <div className="document-card bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <TfiWrite className="text-indigo-800 text-xl"/>

              </div>
              <h3 className="text-xl font-semibold text-gray-800">Writing</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Improve your writing skills with structured lessons and practical exercises.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link to="/EssayDoc" className="category-btn bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                Essays
              </Link>
              <Link to="/LetterDoc" className="category-btn bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                Letters
              </Link>
             
              <button className="category-btn bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                Creative Writing
              </button>
            </div>
          </div>

          {/* Reading Section */}
          <div className="document-card bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <FaBookReader className="text-indigo-800 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Reading</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Enhance comprehension with diverse reading materials and exercises.
            </p>
            <div className="flex flex-wrap gap-2">
              <button className="category-btn bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                Articles
              </button>
              <button className="category-btn bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                Short Stories
              </button>
              <button className="category-btn bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                News
              </button>
              <button className="category-btn bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                Comprehension
              </button>
            </div>
          </div>

          {/* Listening Section */}
          <div className="document-card bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <i className="fas fa-headphones text-indigo-600 text-xl"></i>
                <FaAssistiveListeningSystems />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Listening</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Develop your listening skills with audio exercises and real-life conversations.
            </p>
            <div className="flex flex-wrap gap-2">
              <button className="category-btn bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                Dialogues
              </button>
              <button className="category-btn bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                Lectures
              </button>
              <button className="category-btn bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                Podcasts
              </button>
              <button className="category-btn bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                Exercises
              </button>
            </div>
          </div>
        </div>

        {/* Grammar & Topics Section */}
        <div className="lg:w-1/2">
          {/* Tenses Section */}
          <div className="document-card bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                                <CgLoadbarDoc className=" text-indigo-800 text-xl"/>
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Tenses</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Master all English tenses with clear explanations and practice exercises.
            </p>
            <div className="grid grid-cols-2 gap-3">
            
              <Link to="/tenses/Present Simple" className="category-btn bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg text-sm font-medium">
               Present Simple 
              </Link>
           
              <Link to="/tenses/Present continuous" className="category-btn bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg text-sm font-medium">
                Present Continuous
              </Link>
              <Link to="/tenses/Simple Past" className="category-btn bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg text-sm font-medium">
                Past Simple
              </Link>
              <Link className="category-btn bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg text-sm font-medium">
                Past Continuous
              </Link>
              <Link className="category-btn bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg text-sm font-medium">
                Present Perfect
              </Link>
              <Link className="category-btn bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg text-sm font-medium">
                Future Forms
              </Link>
              <Link className="category-btn bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg text-sm font-medium">
                Past Continuous
              </Link>
              <Link className="category-btn bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg text-sm font-medium">
                Present Perfect
              </Link>
              <Link className="category-btn bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg text-sm font-medium">
                Future Forms
              </Link>
              <Link className="category-btn bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg text-sm font-medium">
                Past Continuous
              </Link>
              <Link className="category-btn bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg text-sm font-medium">
                Present Perfect
              </Link>
              <Link className="category-btn bg-indigo-100 text-indigo-800 px-4 py-2 rounded-lg text-sm font-medium">
                Future Forms
              </Link> 
            </div>
          </div>

          {/* Speaking Section */}
          <div className="document-card bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <RiSpeakLine className=" text-indigo-800 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">Speaking</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Boost your speaking confidence with conversation practice and pronunciation guides.
            </p>
            <div className="flex flex-wrap gap-2">
              <Link to ="/coversationDoc" className="category-btn bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                Conversation
              </Link>
              <Link to="/SpeakingCheckDoc" className="category-btn bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                Pronunciation
              </Link>
              <Link to="/IdiomsDoc" className="category-btn bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                Idioms
              </Link>
                
            </div>
          </div>

          {/* Topics Section */}
          <div className="document-card bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
              <MdTopic className=" text-indigo-800 text-xl" />

              </div>
              <h3 className="text-xl font-semibold text-gray-800">Topics</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Explore vocabulary and expressions organized by common topics.
            </p>
            <div id="topicsContainer" className="space-y-3">
              {/* Topic items will be dynamically inserted here */}
            </div>
            
             <div className="flex flex-wrap gap-2">
             
              
              <Link to = "/TopicsM" className="category-btn bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                Topics 
              </Link>

              <Link to = "/vocabulary/NewVocabulary" className="category-btn bg-indigo-100 text-indigo-800 px-4 py-2 rounded-full text-sm font-medium">
                Create vocabulary
              </Link>
              
              </div>



          </div>
        </div>
      </div>
    </div>
  );
};

// Exams.jsx


const handleButtonClick = (e) => {
  const skill = e.currentTarget.closest('.skill-card').querySelector('h2')?.textContent;
  const action = e.currentTarget.textContent.trim();

  if (action.startsWith('Take')) {
    alert(`Preparing ${skill} exam...`);
  } else {
    alert(`Opening ${skill} exam creation panel...`);
  }
};

const ListenExam = () => {
  return (
    <div className="skill-card bg-white rounded-xl shadow-md overflow-hidden animate-fadeIn" style={{ animationDelay: "0.2s" }}>
      <div className="p-8">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
            <img src="https://placehold.co/40x40 " alt="Ear icon representing listening skill" className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">Listening</h2>
        </div>
        <p className="text-gray-600 mb-6">
          Improve your comprehension skills with audio-based exams and create custom listening assessments.
        </p>
        <div className="space-y-3">
          <button onClick={handleButtonClick} className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-all">
            Take Listening Exam
          </button>
          <button onClick={handleButtonClick} className="w-full py-3 px-4 border border-blue-500 text-blue-500 hover:bg-blue-50 rounded-lg font-medium transition-all">
            Create Listening Exam
          </button>
        </div>
      </div>
    </div>
  );
};

const SpeakExam = () => {
  return (
    <div className="skill-card bg-white rounded-xl shadow-md overflow-hidden animate-fadeIn" style={{ animationDelay: "0.3s" }}>
      <div className="p-8">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
            <img src="https://placehold.co/40x40 " alt="Speech bubble icon representing speaking skill" className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">Speaking</h2>
        </div>
        <p className="text-gray-600 mb-6">
          Practice oral communication through interactive speaking exams and design customized speaking tests.
        </p>
        <div className="space-y-3">
          <button onClick={handleButtonClick} className="w-full py-3 px-4 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-all">
            Take Speaking Exam
          </button>
          <button onClick={handleButtonClick} className="w-full py-3 px-4 border border-green-500 text-green-500 hover:bg-green-50 rounded-lg font-medium transition-all">
            Create Speaking Exam
          </button>
        </div>
      </div>
    </div>
  );
};

const ReadExam = () => {
  return (
    <div className="skill-card bg-white rounded-xl shadow-md overflow-hidden animate-fadeIn" style={{ animationDelay: "0.4s" }}>
      <div className="p-8">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
            <img src="https://placehold.co/40x40 " alt="Open book icon representing reading skill" className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">Reading</h2>
        </div>
        <p className="text-gray-600 mb-6">
          Enhance your reading comprehension with diverse texts and build custom reading assessments.
        </p>
        <div className="space-y-3">
          <button onClick={handleButtonClick} className="w-full py-3 px-4 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-all">
            Take Reading Exam
          </button>

          <button onClick={handleButtonClick} className="w-full py-3 px-4 border border-purple-500 text-purple-500 hover:bg-purple-50 rounded-lg font-medium transition-all">
            Create Reading Exam
          </button>
        </div>
      </div>
    </div>
  );
};

const WriteExam = () => {
  return (
    <div className="skill-card bg-white rounded-xl shadow-md overflow-hidden animate-fadeIn" style={{ animationDelay: "0.5s" }}>
      <div className="p-8">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mr-4">
            <img src="https://placehold.co/40x40 " alt="Pencil writing icon representing writing skill" className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-semibold text-gray-800">Writing</h2>
        </div>
        <p className="text-gray-600 mb-6">
          Develop your writing proficiency through structured exams and craft customized writing tests.
        </p>
        <div className="space-y-3">
          <button onClick={handleButtonClick} className="w-full py-3 px-4 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-all">
            Take Writing Exam
          </button>
          <Link to ="/CreateExamWrittingLetter">
          <button onClick={handleButtonClick} className="w-full py-3 px-4 border border-yellow-500 text-yellow-500 hover:bg-yellow-50 rounded-lg font-medium transition-all">
            Create Writing Exam
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};



const ProgressBar = () => {
  return (
    <div className="mt-16 bg-white rounded-xl shadow-md p-8 animate-fadeIn" style={{ animationDelay: "0.6s" }}>
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Your Exam Progress</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="text-center">
          <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500" style={{ width: "75%" }}></div>
          </div>
          <p className="mt-2 text-sm text-gray-600">Listening: 75%</p>
        </div>
        <div className="text-center">
          <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-green-500" style={{ width: "55%" }}></div>
          </div>
          <p className="mt-2 text-sm text-gray-600">Speaking: 55%</p>
        </div>
        <div className="text-center">
          <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-purple-500" style={{ width: "82%" }}></div>
          </div>
          <p className="mt-2 text-sm text-gray-600">Reading: 82%</p>
        </div>
        <div className="text-center">
          <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-yellow-500" style={{ width: "68%" }}></div>
          </div>
          <p className="mt-2 text-sm text-gray-600">Writing: 68%</p>
        </div>
      </div>
    </div>
  );
};


export { MenuDoc , MenuDocummentchoice,WriteExam,ReadExam, ListenExam, SpeakExam, ProgressBar };