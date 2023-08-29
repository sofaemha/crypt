import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Privileges({ session, cookie }: { session: Record<string, any> | null; cookie: RequestCookie | undefined }) {
  return (
    <Card className="py-4 ps-6 pe-2 mx-4 sm:mx-0 rounded-3xl sm:rounded-lg bg-white dark:bg-slate-900">
      <CardHeader>
        <CardTitle>Administrator Privileges</CardTitle>
        <CardDescription>The following content is your data registered in the authorization system.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Keywords</TableHead>
              <TableHead className="text-center max-w-[400px]">Information</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Username</TableCell>
              <TableCell>{session?.account.username || "Unknown"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Password</TableCell>
              <TableCell>{session?.account.password || "Unknown"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cookie Name</TableCell>
              <TableCell>{(cookie?.name as string) || "Unknown"}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Cookie Value</TableCell>
              <TableCell className="truncate w-[400px] max-w-[400px]">{(cookie?.value as string) || "Unknown"}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
