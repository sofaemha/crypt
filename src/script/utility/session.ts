import { cookies } from "next/headers";
import { IronSession, getIronSession, unsealData } from "iron-session";

const sessionOptions: { cookieName: string; password: string } = {
  cookieName: process.env.NEXT_PUBLIC_ADMIN_SC as string,
  password: process.env.NEXT_PUBLIC_ADMIN_P as string,
};

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
  const encryptedSession = cookieStore.get(process.env.NEXT_PUBLIC_ADMIN_SC as string)?.value;
  const session = encryptedSession ? await unsealData(encryptedSession, { password: process.env.NEXT_PUBLIC_ADMIN_P as string }) : null;
  return session;
};
