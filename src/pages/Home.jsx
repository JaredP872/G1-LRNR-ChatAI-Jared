import React from "react";
import { Zap, CreditCard, User } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="text-center py-16">
        <div className="max-w-3xl mx-auto px-4">
          {/* Logo Container */}
          <div className="bg-navy-900 rounded-lg p-8 mb-8 inline-block">
            <div className="flex items-center justify-center bg-blue-500 rounded p-4">
              <div className="flex items-center">
                <div className="bg-blue-400 p-2 rounded">
                  <span className="text-4xl">🐢</span>
                </div>
                <div className="text-white text-5xl ml-2">lrnr</div>
              </div>
            </div>
          </div>

          <h2 className="text-gray-700 text-2xl mb-8">
            Your guided path to programming enlightenment
          </h2>

          <button
            className="bg-emerald-500 text-white px-8 py-3 rounded-md hover:bg-emerald-600 transition-colors cursor-pointer"
            onClick={() => (window.location.href = "/quiz")}
          >
            BEGIN JOURNEY
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Personalized Quizzes */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Zap className="w-12 h-12 text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Personalized Quizzes</h3>
            <p className="text-gray-600">
              Greetings, young padawan. Are you ready to embark on a journey of
              personalized enlightenment through the art of coding? Our app can
              create custom quizzes that align with your coding skills and
              interests. Whether you are a novice or a master, our system can
              generate questions that will test your proficiency in programming
              languages, tools, and concepts
            </p>
          </div>

          {/* Rewarding */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <CreditCard className="w-12 h-12 text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Rewarding</h3>
            <p className="text-gray-600">
              Our app is designed to be both challenging and rewarding, so you
              can learn new concepts while enjoying the process. With our
              personalized quiz app, you can track your progress, compete with
              your peers, and discover new areas of expertise. The journey of a
              thousand lines of code begins with a single keystroke
            </p>
          </div>

          {/* Personal SME */}
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <User className="w-12 h-12 text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Personal SME</h3>
            <p className="text-gray-600">
              Welcome to the path of knowledge. Our app is like having a
              personal subject matter expert at your side, guiding you on your
              journey towards wisdom
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
