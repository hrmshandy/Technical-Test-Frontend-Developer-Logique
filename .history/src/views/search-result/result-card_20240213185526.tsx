/* eslint-disable jsx-a11y/control-has-associated-label */
import Image from 'next/image';

import { CurrencyIcon, PlayIcon } from '@/components/icons';
import { truncate } from '@/lib/utils';

interface ResultCardProps {
  data: any;
}

export default function ResultCard({ data }: ResultCardProps) {
  return (
    <div className="flex items-center space-x-3 rounded-lg bg-white p-2 shadow-md">
      <div className="relative size-26 shrink-0 overflow-hidden rounded-lg">
        <a
          href={data.trackViewUrl}
          target="_blank"
          className="absolute inset-0 z-20 m-auto flex items-center justify-center"
          title={data.trackName}
        >
          <PlayIcon />
        </a>
        <Image
          src={data.artworkUrl100}
          alt={data.trackName}
          width={100}
          height={100}
          className="z-10"
        />
      </div>
      <div className="flex size-full flex-col justify-between">
        <div className="overflow-hidden">
          <h3 className="mb-1 text-xxs text-slate-700">{data.artistName}</h3>
          <h1 className="text-sm font-bold text-slate-700">
            <a
              href={data.trackViewUrl}
              target="_blank"
              className="block leading-tight"
            >
              {data.trackName ? truncate(data.trackName, 50) : ''}
            </a>
          </h1>
        </div>
        <div className="flex w-full items-center justify-between">
          <div className="min-w-11 rounded-full bg-emerald-500 px-2 py-1 text-center text-xs text-white">
            {data.primaryGenreName}
          </div>
          <div className="flex items-center space-x-2 text-yellow-500">
            <CurrencyIcon className="size-4" />
            <span className="text-xs font-bold">{data.trackPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
