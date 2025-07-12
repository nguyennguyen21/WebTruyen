import { useEffect, useRef, useState } from "react";

const Mess = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Chào bạn, cuối tuần này có đi chơi không?", isUser: false },
    { id: 2, text: "Đi chơi ở đâu vậy bạn?", isUser: true },
    { id: 3, text: "Mình định đi Đà Lạt, 2 ngày 1 đêm thôi", isUser: false },
    { id: 4, text: "Nghe hay đó, mấy giờ đi?", isUser: true },
    { id: 5, text: "Sáng thứ 7 đi lúc 6h sáng, tối chủ nhật về", isUser: false },
    { id: 6, text: "Ok, mình đồng ý. Mai đi ăn nhé?", isUser: true },
    { id: 7, text: "Ừ, tối mai mình gặp nhau lúc 7h nhé", isUser: false },
  ]);

  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (!inputValue.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: inputValue,
      isUser: true,
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");

    // Simulate reply
    setTimeout(() => {
      const replies = [
        "Mình đồng ý với ý kiến của bạn",
        "Bạn nghĩ sao về việc này?",
        "Mình sẽ xem xét và phản hồi sau",
        "Cảm ơn bạn đã chia sẻ",
      ];
      const reply = replies[Math.floor(Math.random() * replies.length)];
      const replyMessage = {
        id: messages.length + 2,
        text: reply,
        isUser: false,
      };
      setMessages((prev) => [...prev, replyMessage]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="chat-container flex h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <div className="w-64 md:w-80 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-gray-800">Trò chuyện</h1>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
          {/* Search Input */}
          <div className="mt-4 relative">
            <input type="text" placeholder="Tìm kiếm..." className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500" />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 absolute right-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Conversations */}
        <div className="flex-1 overflow-y-auto">
          <div className="active-conversation">
            <div className="flex items-center p-3 border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
              <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/478efec7-5985-4df0-a6b9-3f8330a6ebf6.png " alt="Ngọc Duy" className="w-12 h-12 rounded-full object-cover" />
              <div className="ml-3 flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-gray-900">Ngọc Duy</h3>
                  <span className="text-xs text-gray-500">12:30</span>
                </div>
                <p className="text-sm text-gray-500 truncate">Mai đi ăn nhé</p>
              </div>
            </div>
          </div>
          {/* More conversations... */}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-200 bg-white flex items-center">
          <div className="flex items-center">
            <img src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2932f665-aec2-47d6-bb07-6b65c7a95717.png " alt="Ngọc Duy" className="w-10 h-10 rounded-full object-cover" />
            <div className="ml-3">
              <h2 className="font-medium text-gray-900">Ngọc Duy</h2>
              <p className="text-xs text-gray-500">Đang hoạt động</p>
            </div>
          </div>
          <div className="ml-auto flex">
            {/* Call button */}
            <button className="p-2 rounded-full hover:bg-gray-100 ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </button>
            {/* Video call button */}
            <button className="p-2 rounded-full hover:bg-gray-100 ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </button>
            {/* More options */}
            <button className="p-2 rounded-full hover:bg-gray-100 ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
              </svg>
            </button>
          </div>
        </div>

        {/* Messages Area */}
        <div className="chat-messages p-4 space-y-3 flex-1 overflow-y-auto">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
              <div className={`${msg.isUser ? "message-out bg-blue-500 text-white" : "message-in bg-gray-200"} px-4 py-2 max-w-xs md:max-w-md rounded-lg`}>
                <p>{msg.text}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex items-center">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100 ml-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>
            <input
              type="text"
              placeholder="Nhắn tin..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              className="chat-input flex-1 mx-4 px-4 py-2 border border-gray-300 rounded-full focus:outline-none"
            />
            <button className="ml-2 p-2 bg-blue-500 text-white rounded-full hover:bg-blue-600" onClick={sendMessage}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mess;