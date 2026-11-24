import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { HelpCircle, CheckCircle, XCircle, RotateCcw, Trophy, Sparkles } from 'lucide-react';
import { QUIZ_QUESTIONS } from '../data/stalwarts';
import { sounds } from '../utils/sound';

export default function BatchQuiz({ isHostelMode }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const question = QUIZ_QUESTIONS[currentIdx];

  const handleSelectOption = (idx) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);

    const isCorrect = idx === question.correctIndex;
    if (isCorrect) {
      setScore((s) => s + 1);
      sounds.playFanfare();
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
    } else {
      sounds.playPop();
    }
  };

  const handleNext = () => {
    sounds.playPop();
    if (currentIdx + 1 < QUIZ_QUESTIONS.length) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setQuizFinished(true);
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.5 }
      });
    }
  };

  const handleRestart = () => {
    sounds.playPop();
    setCurrentIdx(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <section id="quiz" className="py-20 border-b border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-950/60 border border-rose-500/30 text-rose-300 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Interactive Party Game</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display text-white">
            Who Is Most Likely To...?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Test how well you know the 2008 Serene Stalwarts gang!
          </p>
        </div>

        {/* Quiz Container */}
        <div className="bg-gradient-to-b from-slate-900 to-slate-950 rounded-3xl p-6 sm:p-10 border border-white/10 shadow-2xl relative">
          
          {!quizFinished ? (
            <div>
              
              {/* Progress Bar */}
              <div className="flex items-center justify-between text-xs font-bold text-slate-400 mb-4">
                <span>QUESTION {currentIdx + 1} OF {QUIZ_QUESTIONS.length}</span>
                <span className="text-teal-400">SCORE: {score}</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1.5 mb-8 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-teal-400 to-rose-400 h-full transition-all duration-300"
                  style={{ width: `${((currentIdx + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Question Text */}
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-6">
                "{question.question}"
              </h3>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                {question.options.map((option, idx) => {
                  let btnStyle = "bg-slate-950/60 border-white/10 text-slate-200 hover:border-teal-400/50 hover:bg-slate-800/80";

                  if (isAnswered) {
                    if (idx === question.correctIndex) {
                      btnStyle = "bg-teal-500/20 border-teal-400 text-teal-200 font-bold shadow-lg shadow-teal-500/20";
                    } else if (idx === selectedOption) {
                      btnStyle = "bg-rose-500/20 border-rose-400 text-rose-200 font-bold";
                    } else {
                      btnStyle = "bg-slate-950/40 border-white/5 text-slate-500 opacity-60";
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      disabled={isAnswered}
                      className={`p-4 rounded-2xl border text-left text-sm font-semibold transition-all duration-300 flex items-center justify-between ${btnStyle}`}
                    >
                      <span>{option}</span>
                      {isAnswered && idx === question.correctIndex && (
                        <CheckCircle className="w-5 h-5 text-teal-400 shrink-0" />
                      )}
                      {isAnswered && idx === selectedOption && idx !== question.correctIndex && (
                        <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Reveal Feedback */}
              {isAnswered && (
                <div className="p-4 rounded-2xl bg-teal-950/30 border border-teal-500/20 animate-fadeIn mb-6 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs font-bold text-amber-300 uppercase tracking-wide">
                      Stalwarts Lore:
                    </div>
                    <p className="text-xs sm:text-sm text-slate-200 mt-0.5">
                      {question.funFact}
                    </p>
                  </div>
                </div>
              )}

              {/* Next Question Button */}
              {isAnswered && (
                <div className="flex justify-end">
                  <button
                    onClick={handleNext}
                    className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 hover:brightness-110 shadow-lg shadow-teal-500/20 transition-all"
                  >
                    {currentIdx + 1 < QUIZ_QUESTIONS.length ? "Next Question →" : "See Final Score 🏆"}
                  </button>
                </div>
              )}

            </div>
          ) : (
            <div className="text-center py-6 space-y-6 animate-fadeIn">
              <div className="w-20 h-20 rounded-3xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mx-auto shadow-xl">
                <Trophy className="w-10 h-10" />
              </div>
              
              <div>
                <h3 className="text-2xl sm:text-4xl font-black font-display text-white">
                  {score === QUIZ_QUESTIONS.length ? "Legendary Stalwart!" : "Honorary 2008 Batchmate!"}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 mt-2">
                  You scored <span className="text-amber-400 font-bold">{score}</span> out of {QUIZ_QUESTIONS.length}!
                </p>
                <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto mt-1">
                  16 years later, the bonds, banter, and laughter of RIMS Srikakulam 2008 remain as fresh as day one.
                </p>
              </div>

              <div>
                <button
                  onClick={handleRestart}
                  className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-slate-800 hover:bg-slate-700 text-white border border-white/10 hover:border-white/20 inline-flex items-center gap-2 transition-all"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Play Again</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
