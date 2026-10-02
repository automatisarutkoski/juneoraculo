export const WHATSAPP_NUMBER = "5548991749508";

export const whatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export type Consulta = {
  id: string;
  nome: string;
  descricao: string;
  preco?: number;
  unidade?: string;
  selo?: string;
  quantidade?: boolean;
  precoPorQuantidade?: (quantidade: number) => number;
  opcoes?: { nome: string; preco: number; selo?: string }[];
  adicional?: string;
};

export const consultas: Consulta[] = [
  { id: "objetiva", nome: "Pergunta objetiva", descricao: "Resposta direta para quem precisa de clareza rápida.", preco: 10, unidade: "por pergunta", quantidade: true },
  { id: "aprofundada", nome: "Pergunta aprofundada", descricao: "Análise detalhada da pergunta com clareza e orientação.", selo: "Ideal para começar", quantidade: true, precoPorQuantidade: (quantidade) => quantidade === 1 ? 15.07 : quantidade <= 4 ? 27 + (quantidade - 2) * 10 : 65 + (quantidade - 5) * 12, adicional: "Conselho com baralho de Osho — R$7" },
  { id: "tempo", nome: "Consulta por sessão — tempo", descricao: "Um espaço reservado para olhar a sua questão com calma e profundidade.", opcoes: [{ nome: "40 minutos", preco: 60 }, { nome: "60 minutos", preco: 100, selo: "Melhor valor por minuto" }] },
  { id: "osho", nome: "Tarot de Osho", descricao: "Orientação e clareza para compreender o momento presente.", preco: 20, unidade: "por pergunta", quantidade: true },
  { id: "pendulo", nome: "Pêndulo", descricao: "Respostas objetivas para perguntas que pedem uma direção simples.", opcoes: [{ nome: "Sim ou Não", preco: 20 }, { nome: "Durante a sessão", preco: 10 }], quantidade: true, adicional: "Durante a sessão é um adicional para usar dentro de outra sessão." },
  { id: "afrodite", nome: "Templo de Afrodite", descricao: "Revela pensamentos, sentimentos, intenção e desejos da pessoa amada. Clareza e direcionamento para o futuro do vínculo.", preco: 37, unidade: "por sessão" },
  { id: "mensal", nome: "Panorama mensal", descricao: "Mapa completo do seu mês com direcionamento.", preco: 44, unidade: "por sessão" },
  { id: "anual", nome: "Panorama anual", descricao: "Mapa completo, revelando a projeção das energias principais para os seus próximos 12 meses.", preco: 77, unidade: "por sessão", selo: "Mais completo" },
];

export type Trabalho = { nome: string; preco: number; descricao: string; vela?: boolean };
export type CategoriaFeitico = { numero: string; titulo: string; nomeCarta: string; trabalhos: Trabalho[] };
const vela: Trabalho = { nome: "Pedido de Vela", preco: 30, descricao: "Acenda uma vela com o seu pedido.", vela: true };
export const feiticos: CategoriaFeitico[] = [
  { numero: "VI", titulo: "Amor", nomeCarta: "The Lovers", trabalhos: [
    { nome: "Adoçamento", preco: 97, descricao: "Trabalho para suavizar e aproximar a energia entre você e a pessoa amada." },
    { nome: "Vira Pensamento", preco: 170, descricao: "Direciona a energia dos pensamentos da pessoa em sua direção." },
    { nome: "Obsessão Amorosa", preco: 200, descricao: "Intensifica o interesse, a atenção e o desejo da pessoa por você." },
    { nome: "Afastamento de Rival", preco: 107, descricao: "Afasta interferências e terceiros que atrapalham a sua relação." },
    { nome: "Auto Adoçamento", preco: 97, descricao: "Fortalece o seu amor-próprio, o seu magnetismo e a sua presença." },
    { nome: "Corte de Laços", preco: 77, descricao: "Desfaz vínculos energéticos de relações que já finalizaram seu ciclo." }, vela ] },
  { numero: "X", titulo: "Financeiro", nomeCarta: "Wheel of Fortune", trabalhos: [
    { nome: "Prosperidade", preco: 150, descricao: "Atrai abundância e estabilidade para a sua vida financeira." },
    { nome: "Coroa de Sucesso", preco: 147, descricao: "Fortalece o seu brilho, o reconhecimento e as conquistas." },
    { nome: "Abertura de Caminho", preco: 200, descricao: "Remove bloqueios e abre portas onde tudo parece travado." }, vela ] },
  { numero: "XIV", titulo: "Limpeza & Proteção", nomeCarta: "Temperance", trabalhos: [
    { nome: "Limpeza Energética", preco: 107, descricao: "Retira cargas densas e renova a sua energia." },
    { nome: "Parede de Fogo", preco: 147, descricao: "Cria uma barreira energética forte contra o que te prejudica." },
    { nome: "Proteção", preco: 147, descricao: "Fecha o seu campo energético e mantém você resguardada no dia a dia." },
    { nome: "Banimento", preco: 167, descricao: "Expulsa energias e presenças negativas persistentes." }, vela ] },
];

export const formatMoney = (value: number) => `R$${value.toLocaleString("pt-BR", { minimumFractionDigits: Number.isInteger(value) ? 0 : 2, maximumFractionDigits: 2 })}`;
