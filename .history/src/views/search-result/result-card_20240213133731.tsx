import { CurrencyIcon } from '@/components/icons';

export default function ResultCard() {
  return (
    <div className="flex items-center rounded-lg bg-white p-4 shadow-md">
      <div className="size-24 overflow-hidden" />
      <div className="flex flex-col justify-between">
        <div className="">
          <h3 className="text-xs text-slate-700">Travie McCoy</h3>
          <h1 className="text-sm text-slate-700">
            Rough Water (feat. Jason Mraz)
          </h1>
        </div>
        <div className="flex items-center justify-between">
          <div className="min-w-11 rounded-full bg-emerald-500 px-2 py-1 text-center text-xs text-white">
            Pop
          </div>
          <div className="flex items-center space-x-2 text-yellow-500">
            <CurrencyIcon className="size-4" />
            <span>1.29</span>
          </div>
        </div>
      </div>
    </div>
  );
}
