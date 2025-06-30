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

  // Use the standard `Headers` class for robust header management
  const headers = new Headers(options.headers);

  // Set default Accept header if not present
  if (!headers.has("Accept")) {
    headers.set("Accept", "application/json");
  }
  
  // <<< FIX: Add 'await' to handle the case where getCookie is async
  const tokenCookie = await getCookie("auth_token");

  if (tokenCookie) {
    try {
      const token = JSON.parse(tokenCookie);
      headers.set("Authorization", `Bearer ${token}`);
    } catch (e) {
      console.error("Could not parse auth token from cookie", e);
    }
  }

  let body = options.body;
  if (body) {
    if (body instanceof FormData) {
      headers.delete("Content-Type"); 
    } else {
      if (!headers.has("Content-Type")) {
        headers.set("Content-Type", "application/json");
      }
      body = JSON.stringify(body);
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
        errorMessage =
          responseData.detail || responseData.message || "An error occurred.";
      }
    }
  } catch (error) {
    console.error("Fetch request failed:", error);
    errorMessage = "A network error occurred. Please try again.";
  }

  return { data, errorMessage };
}