import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

export default function Caution({ trigger = "Open", variant, title, description, cancel = "Cancel", action = "Continue" }: { trigger?: string; variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined; title: string; description: string; cancel?: string; action?: string }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant={variant}>{trigger}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-black dark:text-white">{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="text-black dark:text-white">{cancel}</AlertDialogCancel>
          <AlertDialogAction>{action}</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
