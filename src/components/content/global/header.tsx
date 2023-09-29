import { env } from "process";
import { ReactNode } from "react";
import randomItem from "random-item";
import { tips } from "@/script/variable";
import Icon from "@/components/container/library/icon";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

type HeaderContentType = {
  children: ReactNode;
  condition: boolean;
  className?: string;
};

const Paragraph: React.FC<HeaderContentType> = ({ children, condition, className }) => {
  return condition ? (
    <p
      className={className}
      dangerouslySetInnerHTML={{
        __html: children as string,
      }}></p>
  ) : (
    <p className={className}>{children}</p>
  );
};

export default function Header() {
  const description: string | undefined = env.NEXT_PUBLIC_APP_D;
  return (
    <Card className="rounded-t-none rounded-b-3xl sm:rounded-lg bg-white dark:bg-slate-900">
      <CardHeader>
        <CardTitle>
          <a className="inline-flex" href="/">
            <Icon iconName="HiFingerPrint" iconFolder="hi" iconProps={{ className: "my-auto" }} />
            <code className="text-3xl leading-none ml-1.5">{env.NEXT_PUBLIC_APP_N}</code>
          </a>
        </CardTitle>
        <CardDescription>{env.NEXT_PUBLIC_META_D}</CardDescription>
      </CardHeader>
      <CardContent>
        <Paragraph className="text-base" condition={description !== undefined && /<\/?[a-z][\s\S]*>/i.test(description)}>
          {description}
        </Paragraph>
      </CardContent>
      <CardFooter>
        <Alert variant="info">
          <AlertTitle className="inline-flex">
            <Icon iconName="HiOutlineLightBulb" iconFolder="hi" iconProps={{ className: "my-auto" }} />
            <span className="ml-1.5">Helpful Tips</span>
          </AlertTitle>
          <AlertDescription>
            <p
              dangerouslySetInnerHTML={{
                __html: randomItem(tips),
              }}
            />
          </AlertDescription>
        </Alert>
      </CardFooter>
    </Card>
  );
}
