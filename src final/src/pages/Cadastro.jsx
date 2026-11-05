import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiPost } from "../services/api";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [aceitou, setAceitou] = useState(false);
  const [mensagem, setMensagem] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    setMensagem("");

    if (!aceitou) {
      setMensagem("Aceite a política de privacidade para continuar.");
      return;
    }

    try {
      const usuario = await apiPost("/api/v1/usuarios", { nome, email, senha });
      const id = typeof usuario === "object" ? usuario?.id : usuario;
      if (id === undefined || id === null || id === "") {
        throw new Error("O cadastro foi concluído, mas a API não retornou o id do usuário.");
      }
      navigate(`/meus-dados/${encodeURIComponent(id)}`);
    } catch (error) {
      setMensagem(error.message);
    }
  }

  return (
    <>
      <main className="auth-layout">
        <section className="auth-visual">
          <div className="auth-brand">
            <span className="auth-brand-icon">✦</span>
            <span>Roteiriza Brasil</span>
          </div>

          <div className="auth-visual-content">
            <p className="auth-tagline">PLANEJE · EXPLORE · VIVA</p>
            <h1>Seu próximo destino começa aqui.</h1>
            <p className="auth-description">
              Descubra o Brasil. Planeje sua viagem.
            </p>
          </div>

          <p className="auth-photo-caption">
            Lençóis Maranhenses, Maranhão — Brasil
          </p>
        </section>

        <section className="auth-form-panel">
          <div className="auth-form-container">
            <Link to="/" className="auth-back-link">
              ← Voltar para o início
            </Link>

            <div className="auth-heading">
              <p className="auth-eyebrow">COMECE SUA JORNADA</p>
              <h2>Crie sua conta</h2>
              <p>Crie sua conta e comece a planejar sua próxima aventura.</p>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              <div className="auth-field">
                <label htmlFor="nome">Nome completo</label>
                <input
                  id="nome"
                  type="text"
                  placeholder="Digite seu nome"
                  value={nome}
                  onChange={(event) => setNome(event.target.value)}
                  required
                />
              </div>

              <div className="auth-field">
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  type="email"
                  placeholder="voce@exemplo.com"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  required
                />
              </div>

              <div className="auth-field">
                <div className="auth-password-label">
                  <label htmlFor="senha">Senha</label>
                </div>

                <input
                  id="senha"
                  type="password"
                  placeholder="Crie uma senha"
                  value={senha}
                  onChange={(event) => setSenha(event.target.value)}
                  minLength={6}
                  required
                />
                <span className="auth-hint">Use pelo menos 6 caracteres.</span>
              </div>

              <label className="auth-privacy">
                <span>
                  Li e concordo com aot{" "}
                  <a href="/privacidade">Política de Privacidade</a>.
                </span>
                <input
                  type="checkbox"
                  checked={aceitou}
                  onChange={(event) => setAceitou(event.target.checked)}
                />
              </label>

              {mensagem && (
                <p className="auth-message" role="status">
                  {mensagem}
                </p>
              )}

              <button type="submit" className="auth-submit">
                Criar minha conta
                <span>→</span>
              </button>
            </form>

            <div className="auth-switch">
              Já tem uma conta? <Link to="/login">Fazer login</Link>
            </div>

            <p className="auth-footer-note">
              Roteiriza Brasil · Seu guia para explorar o país.
            </p>
          </div>
        </section>
      </main>

      <style>{`
        .auth-layout {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: #fff;
          color: #172b3a;
          font-family: inherit;
        }

        .auth-visual {
          position: relative;
          isolation: isolate;
          min-height: 680px;
          padding: 42px 48px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          overflow: hidden;
          color: #fff;
          background: #173d42;
        }

        .auth-visual::before {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -2;
          background-image: url("https://www.blumar.com.br/blog/images/len_mar_topo.jpg");
          background-size: cover;
          background-position: center;
        }

        .auth-visual::after {
          content: "";
          position: absolute;
          inset: 0;
          z-index: -1;
          background: linear-gradient(
            180deg,
            rgba(8, 27, 34, 0.48) 0%,
            rgba(8, 27, 34, 0.05) 42%,
            rgba(8, 27, 34, 0.67) 100%
          );
        }

        .auth-brand {
          display: flex;
          align-items: center;
          gap: 11px;
          font-size: 20px;
          font-weight: 750;
          letter-spacing: -0.4px;
        }

        .auth-brand-icon {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          font-size: 22px;
        }

        .auth-visual-content {
          max-width: 500px;
          margin: auto 0;
          padding: 90px 0 70px;
        }

        .auth-tagline {
          margin: 0 0 20px;
          font-size: 11px;
          font-weight: 750;
          letter-spacing: 3px;
        }

        .auth-visual-content h1 {
          max-width: 470px;
          margin: 0;
          color: #fff;
          font-size: clamp(38px, 4.2vw, 60px);
          line-height: 1.08;
          letter-spacing: -1.8px;
          font-weight: 750;
        }

        .auth-description {
          margin: 22px 0 0;
          color: rgba(255, 255, 255, 0.92);
          font-size: 16px;
          line-height: 1.7;
        }

        .auth-photo-caption {
          margin: 0;
          color: rgba(255, 255, 255, 0.9);
          font-size: 12px;
          letter-spacing: 0.2px;
        }

        .auth-form-panel {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 38px;
          background: #fff;
        }

        .auth-form-container {
          width: 100%;
          max-width: 410px;
        }

        .auth-back-link {
          display: inline-block;
          margin-bottom: 54px;
          color: #60717d;
          font-size: 13px;
          text-decoration: none;
        }

        .auth-back-link:hover {
          color: #167d83;
        }

        .auth-heading {
          margin-bottom: 32px;
        }

        .auth-eyebrow {
          margin: 0 0 12px;
          color: #17858a;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .auth-heading h2 {
          margin: 0;
          color: #172b3a;
          font-size: 34px;
          font-weight: 750;
          letter-spacing: -1px;
          line-height: 1.2;
        }

        .auth-heading > p:last-child {
          margin: 12px 0 0;
          color: #71808a;
          font-size: 14px;
          line-height: 1.7;
        }

        .auth-form {
          display: flex;
          flex-direction: column;
          gap: 21px;
        }

        .auth-field {
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .auth-field label,
        .auth-password-label label {
          color: #263b49;
          font-size: 13px;
          font-weight: 650;
        }

        .auth-field input {
          box-sizing: border-box;
          width: 100%;
          height: 49px;
          padding: 0 15px;
          border: 1px solid #dce4e8;
          border-radius: 8px;
          outline: none;
          background: #fff;
          color: #172b3a;
          font: inherit;
          font-size: 13px;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .auth-field input::placeholder {
          color: #a1adb4;
        }

        .auth-field input:focus {
          border-color: #218c91;
          box-shadow: 0 0 0 3px rgba(33, 140, 145, 0.1);
        }

        .auth-password-label {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }

        .auth-hint {
          color: #84919a;
          font-size: 11px;
        }

        .auth-privacy {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          color: #62727c;
          font-size: 12px;
          line-height: 1.6;
          cursor: pointer;
        }

        .auth-privacy input {
          flex: 0 0 auto;
          width: 16px;
          height: 16px;
          accent-color: #17858a;
          cursor: pointer;
        }

        .auth-submit {
          width: 100%;
          min-height: 49px;
          padding: 0 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          border: 0;
          border-radius: 8px;
          background: #167f84;
          color: #fff;
          font: inherit;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }

        .auth-submit:hover {
          background: #116c71;
          transform: translateY(-1px);
        }

        .auth-submit span {
          font-size: 18px;
        }

        .auth-message {
          margin: -4px 0 0;
          color: #167f84;
          font-size: 12px;
          line-height: 1.5;
        }

        .auth-switch {
          margin-top: 28px;
          color: #75838c;
          text-align: center;
          font-size: 13px;
        }

        .auth-switch a {
          color: #167f84;
          font-weight: 750;
          text-decoration: none;
        }

        .auth-footer-note {
          margin: 55px 0 0;
          color: #a0abb1;
          text-align: center;
          font-size: 11px;
        }

        @media (max-width: 850px) {
          .auth-layout {
            grid-template-columns: 0.85fr 1.15fr;
          }
          .auth-visual {
            padding: 32px 28px;
          }
          .auth-form-panel {
            padding: 40px 28px;
          }
          .auth-visual-content h1 {
            font-size: 42px;
          }
        }

        @media (max-width: 650px) {
          .auth-layout {
            grid-template-columns: 1fr;
          }
          .auth-visual {
            min-height: 270px;
            padding: 25px 24px;
          }
          .auth-visual-content {
            padding: 38px 0 28px;
          }
          .auth-visual-content h1 {
            max-width: 400px;
            font-size: 36px;
          }
        }
      `}</style>
    </>
  );
}