export const tips: string[] = [
  "Don't forget to refresh the page if you feel that the data you have sent is missing.",
  "Did you know that pressing the <kbd class='w-5 h-5 min-w-[20px] rounded inline-flex items-center justify-center uppercase bg-slate-200 dark:bg-slate-600 text-black dark:text-white'>⌘</kbd> <kbd class='w-5 h-5 min-w-[20px] rounded inline-flex items-center justify-center uppercase bg-slate-200 dark:bg-slate-600 text-black dark:text-white'>⇧</kbd> <kbd class='w-5 h-5 min-w-[20px] rounded inline-flex items-center justify-center uppercase bg-slate-200 dark:bg-slate-600 text-black dark:text-white'>Z</kbd> keys simultaneously triggers a list of commands dialog?",
  "Press <kbd class='w-5 h-5 min-w-[20px] rounded inline-flex items-center justify-center uppercase bg-slate-200 dark:bg-slate-600 text-black dark:text-white'>⌘</kbd> <kbd class='w-5 h-5 min-w-[20px] rounded inline-flex items-center justify-center uppercase bg-slate-200 dark:bg-slate-600 text-black dark:text-white'>⇧</kbd> <kbd class='w-5 h-5 min-w-[20px] rounded inline-flex items-center justify-center uppercase bg-slate-200 dark:bg-slate-600 text-black dark:text-white'>Z</kbd> to change the page theme.",
  "Did you know that the symbol <kbd class='w-5 h-5 min-w-[20px] rounded inline-flex items-center justify-center uppercase bg-slate-200 dark:bg-slate-600 text-black dark:text-white'>⌘</kbd> is a command in MacOS or control ( CTRL ) in Windows?",
  "Did you know that the symbol <kbd class='w-5 h-5 min-w-[20px] rounded inline-flex items-center justify-center uppercase bg-slate-200 dark:bg-slate-600 text-black dark:text-white'>⇧</kbd> is pronounced SHIFT?",
  "Always use capital letters if you want to trigger a command.",
  "Consider trying dark mode for a new eye-pleasing sensation at night.",
  "Don't forget to always include my name in your cloned projects and consider tagging my github account as well.",
  "Feel free to create new issues or discussions or even pull requests for better improvements.",
  "Always consider using a Virtual Private Network (VPN) to mask your identity and make it more complex and difficult to track.",
];

export const sessionOptions: { cookieName: string; password: string } = {
  cookieName: process.env.NEXT_PUBLIC_ADMINISTRATOR_SESSION_COOKIE as string,
  password: process.env.NEXT_PUBLIC_ADMINISTRATOR_PASSWORD as string,
};
