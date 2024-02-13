import { CurrencyIcon } from "@/components/icons";

export default function ResultCard() {
  return (
    <div className="flex items-center rounded-lg bg-white p-4 shadow-md">
      <div className="" />
      <div className="flex flex-col justify-between">
        <div className="">
        <h3 className="text-xs text-slate-700">Travie McCoy</h3>
        <h1 className="text-sm text-slate-700">Rough Water (feat. Jason Mraz)</h1>
        </div>
        <div className="flex justify-between items-center">
            <div className="text-xs bg-emerald-500 rounded-full px-3 py-1.5">Pop</div>
            <div className="flex items-center space-x-2">
                <CurrencyIcon className="size-4" />
                <span>1.29</span>
            </div>
        </div>
      </div>
    </div>
  );
}
