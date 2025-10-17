import { Skeleton } from '../../components/ui/skeleton';

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-full space-x-2">
      <Skeleton className="h-[20px] w-[100px] rounded-full" />
    </div>
  );
}
