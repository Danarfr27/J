import { marqueeText } from '../data/games';

export default function Marquee() {
  return (
    <div className="w-full bg-game-yellow py-2 overflow-hidden">
      <div className="flex items-center">
        <span className="bg-red-600 text-white text-xs font-bold px-3 py-1 mr-2 shrink-0 z-10">
          NEW :
        </span>
        <div className="overflow-hidden flex-1">
          <div className="animate-marquee whitespace-nowrap">
            <span className="text-game-purple-900 text-sm font-medium">
              {marqueeText}
            </span>
            <span className="text-game-purple-900 text-sm font-medium ml-8">
              {marqueeText}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
