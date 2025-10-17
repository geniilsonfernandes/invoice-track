import Link from 'next/link';



import { Logo } from 'components/icons';
import { cn } from 'lib/utils';
import { urls } from '../../config/urls';

export default function FooterSection() {
  return (
    <div
      className={cn(
        'w-full sm:max-w-4xl mt-28 p-4 flex flex-col sm:flex-row justify-between',
      )}
    >
      <div className="flex flex-col">
        <h2 className="text-lg font-semibold tracking-wide flex items-center gap-2.5">
          <Logo className='size-8' />
          Invoice Track.
        </h2>
        <p className="text-muted-foreground mt-4 text-sm">
          Invoice Track is a helps you to manage your
          invoices.
        </p>
      </div>
      <div className="flex gap-20 max-w-xs w-fit max-sm:mt-12 max-sm:w-full">
        <div className="flex flex-col w-fit text-sm">
          <h3 className="font-semibold flex items-center gap-2">Links</h3>
          <div className="flex flex-col gap-2.5 mt-4">
            <Link
              href={urls.extensions.chrome}
              className="hover:underline  hover:text-primary active:text-primary text-muted-foreground"
            >
              Extensions
            </Link>
            <Link
              href={urls.github}
              className="hover:underline hover:text-primary active:text-primary text-muted-foreground"
            >
              Github
            </Link>
            <Link
              href={urls.twitter}
              className="hover:underline hover:text-primary active:text-primary text-muted-foreground"
            >
              Twitter
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-fit text-sm">
          <div className="flex flex-col w-fit">
            <h3 className="font-semibold flex items-center">Legal</h3>
            <div className="flex flex-col gap-2.5 mt-4">
              <Link
                href={'/privacy'}
                className="hover:underline  hover:text-primary active:text-primary text-muted-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href={'/terms'}
                className="hover:underline hover:text-primary active:text-primary text-muted-foreground"
              >
                Terms & Condition
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
