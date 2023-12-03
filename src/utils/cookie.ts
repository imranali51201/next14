'use server';

import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export interface SetCookieOptions {
  directus_access_token: string;
  directus_refresh_token: string;
}

export const saveCookies = async (obj: SetCookieOptions, expires_in?: number) => {
  const cookieStore = cookies();
  Object.entries(obj).forEach(([key, value]) => {
    cookieStore.set({
      name: key,
      value,
      domain: process.env.NODE_ENV === 'development' ? 'localhost' : 'findmynanny.ae',
      secure: true,
      httpOnly: true,
      sameSite: 'lax',
      ...(key === 'directus_access_token' && expires_in && { maxAge: expires_in }),
    });
  });
  return Promise.resolve(obj);
};

export const saveCookieByResponse = (
  response: NextResponse,
  obj: { [key: string]: string },
  expires_in?: number,
) => {
  Object.entries(obj).forEach(([key, value]) => {
    response.cookies.set({
      name: key,
      value,
      domain: process.env.NODE_ENV === 'development' ? 'localhost' : 'findmynanny.ae',
      secure: true,
      httpOnly: true,
      sameSite: 'lax',
      ...(key === 'directus_access_token' && expires_in && { maxAge: expires_in }),

    });
  });
};

export const deleteCookies = async (keys: string[]) => {
  const cookieStore = cookies();
  keys.forEach((key) => cookieStore.delete(key));
  return Promise.resolve();
};

export const getCookie = async (key: string) => {
  const cookieStore = cookies();
  const cookie = cookieStore.get(key)?.value;
  return Promise.resolve(cookie || '');
};
