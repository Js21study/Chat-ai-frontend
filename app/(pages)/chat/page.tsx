import { MessagesContainer } from "@/app/components/MessagesContainer";
import { ChatHeader } from "@/app/components/ChatHeader";
import { InputArea } from "@/app/components/InputArea";

export default function ChatPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 to-blue-200/20 animate-pulse"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-sky-400/15 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      ></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 h-screen flex flex-col">
        <ChatHeader />

        <div
          className="flex-1 glass rounded-lg border border-blue-200 mb-4 animate-fadeInUp"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="h-full flex flex-col">
            <MessagesContainer />
          </div>
        </div>

        <InputArea />
      </div>
    </div>
  );
}
