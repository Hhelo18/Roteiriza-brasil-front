export const API_BASE_URL = "http://localhost:8080";

async function request(path, options = {}) {
  let response;

  try {
    response = await fetch(`${API_BASE_URL}${path}`, {
      ...options,
      headers: {
        Accept: "application/json",
        ...options.headers,
      },
    });
  } catch (error) {
    throw new Error(
      "Não foi possível conectar à API. Verifique se o servidor está disponível.",
      { cause: error },
    );
  }

  const responseText = await response.text();
  let responseBody;

  try {
    responseBody = responseText ? JSON.parse(responseText) : null;
  } catch {
    responseBody = responseText;
  }

  if (!response.ok) {
    const message =
      typeof responseBody === "string"
        ? responseBody
        : responseBody?.message || responseBody?.mensagem;

    throw new Error(
      message || `A API retornou um erro (HTTP ${response.status}).`,
    );
  }

  return responseBody;
}

export function apiGet(path) {
  return request(path);
}

export function apiPost(path, body) {
  return request(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

export function apiPut(path, body) {
  return request(path, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

export function apiDelete(path) {
  return request(path, { method: "DELETE" });
}
