import { cookies } from "next/headers";
import { IronSession, getIronSession, unsealData } from "iron-session";
import { sessionOptions } from "@/script/variable";

export type DynamicSegments = {
  params: { slug: string } | undefined;
};

export type RouteHandler = (request: Request, routeSegment: DynamicSegments) => Promise<Response>;

export type RouteHandlerWithSession = (request: Request & { session: IronSession }, routeSegment: DynamicSegments) => Promise<Response>;

export const ironSessionWrapper: (handler: RouteHandlerWithSession) => RouteHandler = (handler: RouteHandlerWithSession): RouteHandler => {
  return async (request, routeSegment) => {
    const cookieResponse = new Response();
    const session = await getIronSession(request, cookieResponse, sessionOptions);

    const sessionRequest = Object.assign(request, { session });
    const response = await handler(sessionRequest, routeSegment);

    const setCookie = cookieResponse.headers.get("set-cookie");
    if (setCookie) {
      response.headers.set("set-cookie", setCookie);
    }

    return response;
  };
};

export const getSession = async () => {
  const cookieStore = cookies();
  const encryptedSession = cookieStore.get(process.env.NEXT_PUBLIC_ADMINISTRATOR_SESSION_COOKIE as string)?.value;
  const session = encryptedSession ? await unsealData(encryptedSession, { password: process.env.NEXT_PUBLIC_ADMINISTRATOR_PASSWORD as string }) : null;
  return session;
};
