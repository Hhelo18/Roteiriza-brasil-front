const API_BASE_URL = "http://localhost:8080";

async function request(path, options = {}) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!response.ok) {
    let message = `Erro ${response.status} ao comunicar com o servidor.`;
    try {
      const data = await response.json();
      if (data?.message) message = data.message;
    } catch {
      // resposta sem corpo JSON, mantém a mensagem padrão
    }
    throw new Error(message);
  }

  if (response.status === 204) return null;
  return response.json();
}

export function apiGet(path) {
  return request(path, { method: "GET" });
}

export function apiPost(path, body) {
  return request(path, { method: "POST", body: JSON.stringify(body) });
}

export function apiPut(path, body) {
  return request(path, { method: "PUT", body: JSON.stringify(body) });
}