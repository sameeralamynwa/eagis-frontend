"use server";

import type { IAuthContext } from "@/utills/types/IAuthContext";
import { getCookie, hasCookie } from "cookies-next";

export default async function getServerAuth(): Promise<IAuthContext> {
  const hasUser = await hasCookie("auth_user");
  console.log(hasUser);

  const user = hasUser
    ? (JSON.parse(
        (await getCookie("auth_user"))!.toString()
      ) as IAuthContext["user"])
    : null;
  ``;

  const token = (await hasCookie("auth_token"))
    ? (JSON.parse(
        (await getCookie("auth_token"))!.toString()
      ) as IAuthContext["token"])
    : null;

  return { token, user };
}
