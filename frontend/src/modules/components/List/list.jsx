import React, { useState, useEffect } from 'react';

const ExamList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [exams, setExams] = useState([]);

  // Sample data
  const sampleExams = [
    {
      id: 1,
      title: "Advanced Mathematics",
      description: "Math exam for gifted 12th graders with advanced and logical problems.",
      date: "10/15/2023"
    },
    {
      id: 2,
      title: "General Physics",
      description: "Test basic knowledge of Physics for first-year students.",
      date: "10/20/2023"
    },
    {
      id: 3,
      title: "IELTS English",
      description: "Practice IELTS exam with a standard format covering all 4 skills.",
      date: "10/25/2023"
    },
    {
      id: 4,
      title: "Organic Chemistry",
      description: "In-depth exam on Organic Chemistry for second-year students.",
      date: "11/02/2023"
    },
    {
      id: 5,
      title: "Vietnamese History",
      description: "Test knowledge of Vietnamese history from the founding to modern times.",
      date: "11/10/2023"
    },
    {
      id: 6,
      title: "Literature 12",
      description: "Exam assessing the ability in Literature according to the 12th-grade curriculum.",
      date: "11/15/2023"
    }
  ];

  // Load exams on mount
  useEffect(() => {
    setExams(sampleExams);
  }, []);

  // Filter exams based on search term
  const filteredExams = exams.filter(exam =>
    exam.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exam.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-10 bg-blue-600 text-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold">Exam List</h1>
          <p className="mt-2 text-sm opacity-90">Search and register for suitable exams</p>
        </header>

        {/* Search Bar */}
        <div className="flex justify-center mb-10">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for exams..."
              className="w-full px-6 py-3 rounded-full border-none shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button
              onClick={() => {}}
              className="absolute right-2 top-1.5 bg-orange-500 hover:bg-orange-400 text-white px-5 py-2 rounded-full transition-transform transform hover:-translate-y-0.5"
            >
              Search
            </button>
          </div>
        </div>

        {/* Exams Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredExams.length > 0 ? (
            filteredExams.map((exam) => (
              <div
                key={exam.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-blue-700">{exam.title}</h3>
                  <p className="text-gray-600 mt-2 text-sm">{exam.description}</p>
                  <div className="mt-4 text-xs text-gray-500 flex justify-between">
                    <span className="font-bold text-blue-800">Date: {exam.date}</span>
                    <span>ID: {exam.id}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10 text-gray-500 text-lg">
              No exams found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExamList;