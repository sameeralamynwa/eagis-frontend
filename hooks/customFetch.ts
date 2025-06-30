import { getCookie } from "cookies-next";

// Define a type for our fetcher options
interface FetchOptions extends RequestInit {
  body?: any;
}

export default async function customFetch<T>(
  url: string,
  options: FetchOptions = {}
) {
  let errorMessage: string | null = null;
  let data: T | null = null;

  // Set default headers, but be careful not to override FormData's content-type
  const headers: HeadersInit = {
    Accept: "application/json",
    ...options.headers,
  };

  // <<< FIX: Logic to handle different body types
  let body = options.body;
  if (options.body) {
    if (options.body instanceof FormData) {
      // If body is FormData, do not set Content-Type header.
      // The browser will set it automatically with the correct boundary.
    } else {
      // For any other body, assume JSON.
      headers["Content-Type"] = "application/json";
      body = JSON.stringify(options.body);
    }
  }

  const tokenCookie = getCookie("auth_token");
  if (tokenCookie) {
    try {
      const token = JSON.parse(tokenCookie);
      headers["Authorization"] = `Bearer ${token}`;
    } catch (e) {
      console.error("Could not parse auth token from cookie", e);
    }
  }

  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "";
  const fullUrl = `${apiUrl}${url}`;

  try {
    const res = await fetch(fullUrl, {
      ...options,
      headers,
      body: body,
    });

    if (res.status === 204) {
      return { data: null, errorMessage: null };
    }

    const responseData = await res.json();

    if (res.ok) {
      data = responseData;
    } else {
      if (responseData.detail && Array.isArray(responseData.detail)) {
        errorMessage = responseData.detail[0].msg;
      } else {
        errorMessage = responseData.detail || responseData.message || "An error occurred.";
      }
    }
  } catch (error) {
    console.error("Fetch request failed:", error);
    errorMessage = "A network error occurred. Please try again.";
  }

  return { data, errorMessage };
}