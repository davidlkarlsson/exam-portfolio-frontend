/**
 * A safe API helper:
 * - Handles HTTP errors
 * - Handles invalid JSON
 * - Handles null JSON
 * - Handles API logic failures (success: false)
 * - Returns typed data or null
 *
 * Improvements added:
 * - Supports POST, PUT, DELETE, GET via RequestInit
 * - Automatically includes cookies (required for Spring Boot JWT)
 * - Automatically redirects to /login on 401/403 (expired token)
 * - Accepts extra fetch options
 */

export async function apiFetch<T>(
  url: string,
  options: RequestInit = {}
): Promise<T | null> {
  
  console.group('🚀 apiFetch Debug');
  console.log('📤 Request:', {
    url,
    method: options.method || 'GET',
    credentials: 'include',
    body: options.body ? JSON.parse(options.body as string) : undefined,
  });

  let res: Response;
  
  try {
    // FETCH (network + HTTP errors)
    res = await fetch(url, {
      credentials: "include", // Include cookies for JWT auth
      headers: {
        "Content-Type": "application/json",
        ...(options.headers || {}),
      },
      ...options,
    });

    console.log('📥 Response received:', {
      status: res.status,
      statusText: res.statusText,
      ok: res.ok,
      url: res.url,
    });

    // Log ALL response headers
    console.log('📋 Response headers:');
    const headers: Record<string, string> = {};
    for (const [key, value] of res.headers.entries()) {
      headers[key] = value;
      console.log(`   ${key}: ${value}`);
    }

    // Special debug for Set-Cookie
    const setCookieHeader = res.headers.get('set-cookie');
    console.log('🍪 Set-Cookie header:', setCookieHeader || '❌ NO SET-COOKIE HEADER');
    
    // Check current cookies in browser
    console.log('🔍 Current document.cookie:', document.cookie || 'No cookies');
    
    // Debug CORS headers
    console.log('🌐 CORS headers:', {
      'Access-Control-Allow-Origin': res.headers.get('Access-Control-Allow-Origin'),
      'Access-Control-Allow-Credentials': res.headers.get('Access-Control-Allow-Credentials'),
      'Access-Control-Expose-Headers': res.headers.get('Access-Control-Expose-Headers'),
    });

  } catch (networkError) {
    console.error("❌ Network error:", networkError);
    console.groupEnd();
    return null;
  }
  

  // EXPIRED / INVALID TOKEN (except login request)
if ((res.status === 401 || res.status === 403) && !url.includes("/login")) {
  console.warn("Session expired. Redirecting to login…");
  window.location.href = "/login"; // Client-side redirect
  return null;
}
  

  // HTTP ERROR
  if (!res.ok) {
    console.error("HTTP Error:", res.status, res.statusText);
    return null;
  }
  
  
  // SAFE JSON PARSE
  let json: any;
  try {
    json = await res.json();
  } catch (err) {
    console.error("Response is not valid JSON:", err);
    return null;
  }
  
  
  // JSON IS NULL
  if (json == null) {
    console.error("JSON is null or undefined");
    return null;
  }
  

  // API LOGIC FAILED (if your API uses success/error)
  if (json.success === false) {
    console.error("API logic error:", json.error);
    return null;
  }
  

  // RETURN EITHER json.data OR JUST json
  return (json.data ?? json) as T;
}

