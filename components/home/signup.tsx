import Link from 'next/link';



import GitButton from 'components/git-button';
import { ArrowRightIcon } from 'components/icons';
import { urls } from '../../config/urls';

export default function Account() {
  return (
    <div className="flex gap-6 justify-center">
      <Link
        href={urls.api}
        className="rounded-full group/signin transition-colors inline-flex text-sm items-center focus:outline-0 bg-black hover:bg-black/80 shadow border border-black px-4 py-2 text-white"
      >
        Get Started{' '}
        <ArrowRightIcon className="ml-1 transition-all group-hover/signin:translate-x-0.5 w-4 h-4" />
      </Link>
      <GitButton />
    </div>
  );
}
