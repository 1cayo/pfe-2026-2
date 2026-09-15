// Componente principal do Jogo de Dados (2 jogadores, 5 rodadas)
'use client';

import { useState } from 'react';
import Dado from './Dado';

export default function JogoDados() {
  const [rodada, setRodada] = useState(1);
  const [turno, setTurno] = useState(1); // 1 = Jogador 1, 2 = Jogador 2
  const [dadosJ1, setDadosJ1] = useState([0, 0]);
  const [dadosJ2, setDadosJ2] = useState([0, 0]);
  const [vitoriasJ1, setVitoriasJ1] = useState(0);
  const [vitoriasJ2, setVitoriasJ2] = useState(0);
  const [mensagem, setMensagem] = useState('Clique em Jogar para iniciar a rodada.');
  const [fimDeJogo, setFimDeJogo] = useState(false);

  // Sortear número entre 1 e 6
  // Funcao utilitaria para sortear numero entre 1 e 6
  function sortearDado() {
    return Math.floor(Math.random() * 6) + 1;
  }

  // Jogada do Jogador 1
  // Manipula a jogada do Jogador 1 e passa a vez
  function jogarJogador1() {
    const d1 = sortearDado();
    const d2 = sortearDado();
    setDadosJ1([d1, d2]);
    setTurno(2);
    setMensagem('Vez do Jogador 2!');
  }

  // Jogada do Jogador 2
  // Manipula jogada do Jogador 2 e calcula a soma dos dados
  function jogarJogador2() {
    const d1 = sortearDado();
    const d2 = sortearDado();
    setDadosJ2([d1, d2]);

    const somaJ1 = dadosJ1[0] + dadosJ1[1];
    const somaJ2 = d1 + d2;

    let resRodada = '';
    let novov1 = vitoriasJ1;
    let novov2 = vitoriasJ2;

    if (somaJ1 > somaJ2) {
      resRodada = 'Jogador 1 venceu';
      novov1 += 1;
      setVitoriasJ1(novov1);
    } else if (somaJ2 > somaJ1) {
      resRodada = 'Jogador 2 venceu';
      novov2 += 1;
      setVitoriasJ2(novov2);
    } else {
      resRodada = 'Empate';
    }

    if (rodada < 5) {
      setMensagem(`Rodada ${rodada}: ${resRodada}`);
      setRodada(rodada + 1);
      setTurno(1);
    } else {
      setFimDeJogo(true);
      setTurno(0);

      if (novov1 > novov2) {
        setMensagem('Jogador 1 venceu o jogo');
      } else if (novov2 > novov1) {
        setMensagem('Jogador 2 venceu o jogo');
      } else {
        setMensagem('Empate geral');
      }
    }
  }

  // Reiniciar o jogo
  // Funcao para reiniciar todas as variaveis ao valor inicial
  function reiniciarJogo() {
    setRodada(1);
    setTurno(1);
    setDadosJ1([0, 0]);
    setDadosJ2([0, 0]);
    setVitoriasJ1(0);
    setVitoriasJ2(0);
    setMensagem('Novo jogo iniciado! Vez do Jogador 1.');
    setFimDeJogo(false);
  }

  return (
    <div className="jogo-container">
      {/* Card Principal */}
      <div className="card-principal">
        <h1 className="titulo">Jogo de Dados</h1>
        <p className="rodada-info">Rodada {rodada}/5</p>

        {/* Área dos Jogadores */}
        <div className="jogadores-area">
          {/* Jogador 1 */}
          <div className="coluna-jogador">
            <h2 className="nome-jogador">Jogador 1</h2>
            <div className="dados-box">
              <Dado valor={dadosJ1[0]} />
              <Dado valor={dadosJ1[1]} />
            </div>
            <button
              className="btn-jogar"
              disabled={turno !== 1 || fimDeJogo}
              onClick={jogarJogador1}
            >
              Jogar
            </button>
          </div>

          <div className="divisor-vertical"></div>

          {/* Jogador 2 */}
          <div className="coluna-jogador">
            <h2 className="nome-jogador">Jogador 2</h2>
            <div className="dados-box">
              <Dado valor={dadosJ2[0]} />
              <Dado valor={dadosJ2[1]} />
            </div>
            <button
              className="btn-jogar"
              disabled={turno !== 2 || fimDeJogo}
              onClick={jogarJogador2}
            >
              Jogar
            </button>
          </div>
        </div>

        {/* Caixa de Mensagem */}
        <div className="mensagem-box">
          <p className="mensagem-texto">{mensagem}</p>
        </div>
      </div>

      {/* Card Inferior (Só aparece no final do jogo) */}
      {fimDeJogo && (
        <div className="card-inferior">
          <button className="btn-reiniciar" onClick={reiniciarJogo}>
            Jogar novamente
          </button>
          <span className="subtexto"></span>
        </div>
      )}
    </div>
  );
}






