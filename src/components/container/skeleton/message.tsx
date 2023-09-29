import { Skeleton } from "@/components/ui/skeleton";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Loading({ count = 1 }: { count?: number }) {
  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <Card key={index} className="py-4 ps-6 pe-2 mx-4 sm:mx-0 rounded-3xl sm:rounded-lg bg-white dark:bg-slate-900">
            <CardHeader className="flex flex-row items-center space-x-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="space-y-2">
                <Skeleton className="h-3 w-[250px]" />
                <Skeleton className="h-2.5 w-[200px]" />
              </div>
            </CardHeader>
            <CardContent className="grid gap-2">
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-full" />
              <Skeleton className="h-3 w-full" />
            </CardContent>
            <CardFooter className="grid gap-2">
              <Separator />
              <div className="flex flex-row items-center space-x-2">
                <Skeleton className="h-3 w-full" />
                <span className="animate-pulse text-slate-300 dark:text-slate-700">&nbsp;&bull;&nbsp;</span>
                <Skeleton className="h-3 w-full" />
              </div>
              <Separator />
            </CardFooter>
          </Card>
        ))}
    </>
  );
}
