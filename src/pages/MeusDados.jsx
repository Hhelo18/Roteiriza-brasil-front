import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { apiDelete, apiGet, apiPut } from "../services/api";

export default function MeusDados() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dados, setDados] = useState({ nome: "", email: "", telefone: "" });
  const [carregando, setCarregando] = useState(true);
  const [salvando, setSalvando] = useState(false);
  const [excluindo, setExcluindo] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const [erro, setErro] = useState(false);

  useEffect(() => {
    let ativo = true;

    async function carregarDados() {
      setCarregando(true);
      setMensagem("");
      setErro(false);

      try {
        const usuario = await apiGet(`/api/v1/usuarios/${encodeURIComponent(id)}`);
        if (ativo) {
          setDados({
            nome: usuario?.nome ?? "",
            email: usuario?.email ?? "",
            telefone: usuario?.telefone ?? "",
          });
        }
      } catch (error) {
        if (ativo) {
          setMensagem(error.message);
          setErro(true);
        }
      } finally {
        if (ativo) setCarregando(false);
      }
    }

    carregarDados();
    return () => {
      ativo = false;
    };
  }, [id]);

  function atualizarCampo(event) {
    const { name, value } = event.target;
    setDados((atuais) => ({ ...atuais, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setMensagem("");
    setErro(false);
    setSalvando(true);

    try {
      await apiPut(`/api/v1/usuarios/${encodeURIComponent(id)}`, dados);
      setMensagem("Seus dados foram atualizados com sucesso.");
    } catch (error) {
      setMensagem(error.message);
      setErro(true);
    } finally {
      setSalvando(false);
    }
  }

  async function excluirConta() {
    if (!window.confirm("Tem certeza de que deseja excluir sua conta?")) return;

    setMensagem("");
    setErro(false);
    setExcluindo(true);

    try {
      await apiDelete(`/api/v1/usuarios/${encodeURIComponent(id)}`);
      navigate("/", {
        state: { mensagem: "Sua conta foi excluída com sucesso." },
      });
    } catch (error) {
      setMensagem(error.message);
      setErro(true);
      setExcluindo(false);
    }
  }

  return (
    <main className="meus-dados-page">
      <section className="meus-dados-card">
        <a className="meus-dados-voltar" href="/">
          ← Voltar para o início
        </a>
        <h1>Meus dados</h1>
        <p className="meus-dados-intro">Confira e atualize as informações da sua conta.</p>

        {carregando ? (
          <p role="status">Carregando seus dados...</p>
        ) : (
          <form onSubmit={handleSubmit} className="meus-dados-form">
            <label>
              Nome
              <input
                type="text"
                name="nome"
                value={dados.nome}
                onChange={atualizarCampo}
                required
                disabled={erro && !dados.nome && !dados.email && !dados.telefone}
              />
            </label>
            <label>
              E-mail
              <input
                type="email"
                name="email"
                value={dados.email}
                onChange={atualizarCampo}
                required
                disabled={erro && !dados.nome && !dados.email && !dados.telefone}
              />
            </label>
            <label>
              Telefone
              <input
                type="tel"
                name="telefone"
                value={dados.telefone}
                onChange={atualizarCampo}
                disabled={erro && !dados.nome && !dados.email && !dados.telefone}
              />
            </label>

            {mensagem && (
              <p className={erro ? "meus-dados-mensagem erro" : "meus-dados-mensagem"} role="status">
                {mensagem}
              </p>
            )}

            <button type="submit" className="meus-dados-salvar" disabled={salvando || (erro && !dados.nome && !dados.email && !dados.telefone)}>
              {salvando ? "Salvando..." : "Salvar alterações"}
            </button>
            <button type="button" className="meus-dados-excluir" onClick={excluirConta} disabled={excluindo}>
              {excluindo ? "Excluindo..." : "Excluir minha conta"}
            </button>
          </form>
        )}
      </section>

      <style>{`
        .meus-dados-page {
          min-height: 100vh;
          box-sizing: border-box;
          padding: 48px 20px;
          background: #f8fafc;
          color: #172b3a;
          font-family: inherit;
        }
        .meus-dados-card {
          width: 100%;
          max-width: 520px;
          box-sizing: border-box;
          margin: 0 auto;
          padding: 36px;
          border-radius: 12px;
          background: #fff;
          box-shadow: 0 8px 28px rgba(23, 43, 58, 0.08);
        }
        .meus-dados-voltar {
          color: #167f84;
          font-size: 13px;
          text-decoration: none;
        }
        .meus-dados-card h1 {
          margin: 28px 0 8px;
          font-size: 28px;
        }
        .meus-dados-intro {
          margin: 0 0 26px;
          color: #75838c;
          font-size: 14px;
        }
        .meus-dados-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .meus-dados-form label {
          display: flex;
          flex-direction: column;
          gap: 8px;
          color: #263b49;
          font-size: 13px;
          font-weight: 650;
        }
        .meus-dados-form input {
          box-sizing: border-box;
          width: 100%;
          height: 46px;
          padding: 0 13px;
          border: 1px solid #dce4e8;
          border-radius: 8px;
          outline: none;
          color: #172b3a;
          font: inherit;
          font-size: 14px;
        }
        .meus-dados-form input:focus {
          border-color: #218c91;
          box-shadow: 0 0 0 3px rgba(33, 140, 145, 0.1);
        }
        .meus-dados-mensagem {
          margin: 0;
          color: #167f84;
          font-size: 13px;
          line-height: 1.5;
        }
        .meus-dados-mensagem.erro {
          color: #b42318;
        }
        .meus-dados-salvar,
        .meus-dados-excluir {
          min-height: 46px;
          padding: 0 16px;
          border: 0;
          border-radius: 8px;
          color: #fff;
          font: inherit;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
        }
        .meus-dados-salvar {
          background: #167f84;
        }
        .meus-dados-excluir {
          background: #b42318;
        }
        .meus-dados-salvar:disabled,
        .meus-dados-excluir:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }
        @media (max-width: 520px) {
          .meus-dados-card {
            padding: 26px 20px;
          }
        }
      `}</style>
    </main>
  );
}
