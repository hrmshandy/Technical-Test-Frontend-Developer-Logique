import Image from 'next/image';

import { CurrencyIcon } from '@/components/icons';

interface ResultCardProps {
  data: any;
}

export default function ResultCard({ data }: ResultCardProps) {
  return (
    <div className="flex items-center space-x-3 rounded-lg bg-white p-3 shadow-md">
      <div className="size-26 shrink-0 overflow-hidden rounded-lg">
        <Image
          src={data.artworkUrl100}
          alt={data.trackName}
          width={100}
          height={100}
        />
      </div>
      <div className="flex h-full flex-col justify-between">
        <div className="">
          <h3 className="mb-1 text-xs text-slate-700">{data.artistName}</h3>
          <h1 className="text-sm font-bold text-slate-700">{data.trackName}</h1>
        </div>
        <div className="flex items-center justify-between">
          <div className="min-w-11 rounded-full bg-emerald-500 px-2 py-1 text-center text-xs text-white">
            {data.primaryGenreName}
          </div>
          <div className="flex items-center space-x-2 text-yellow-500">
            <CurrencyIcon className="size-4" />
            <span>{data.trackPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
