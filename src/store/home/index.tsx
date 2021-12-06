import { createSlice } from "@reduxjs/toolkit";

export type Livro = typeof initialState.livros[0];

const initialState = {
  livros: [
    {
      nome: "20 Mil Léguas Submarinas",
      banana: 25,
      autor: "Jules Verne",
      capa: "https://images-na.ssl-images-amazon.com/images/I/81wmElXiKqL.jpg",
      categoria: "Ficção Cientifica",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      nome: "Moby Dick",
      autor: "Herman Melville",
      capa: "https://64.media.tumblr.com/82f56f7adfc3d4064aa5b4da899e035a/tumblr_o90l4m7XVV1qhttpto3_1280.jpg",
      categoria: "Romance",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      nome: "1984",
      autor: "George Orwell",
      capa: "https://images-na.ssl-images-amazon.com/images/I/81EStZoMf7L.jpg",
      categoria: "Romance",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      nome: "Orgulho e Preconceito",
      autor: "Jane Austen",
      capa: "https://images-na.ssl-images-amazon.com/images/I/61JosO2tkdL.jpg",
      categoria: "Romance",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      nome: "A Divina Comédia",
      autor: "Dante Alighieri",
      capa: "https://www.lpm.com.br/livros/imagens/a_divina_comedia_9788525433206_hd.jpg",
      categoria: "Poema",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      nome: "A Odisséia",
      autor: "Homero",
      capa: "https://kbimages1-a.akamaihd.net/c5a9e519-a7d3-4727-ad5d-2110aa6467df/1200/1200/False/a-odisseia-edicao-ilustrada.jpg",
      categoria: "Poema",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      nome: "Dom Quixote",
      autor: "Miguel de Cervantes",
      capa: "https://www.lpm.com.br/livros/imagens/dom_quixote_hq_9788525425669_hd.jpg",
      categoria: "Romance",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      nome: "Dom Casmurro",
      autor: "Machado de Assis",
      capa: "https://images-na.ssl-images-amazon.com/images/I/71cERjQgroL.jpg",
      categoria: "Romance",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      nome: "A Metamorfose",
      autor: "Franz Kafka",
      capa: "https://images-na.ssl-images-amazon.com/images/I/91ibsHmdNQL.jpg",
      categoria: "Ficção",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      nome: "O Estrangeiro",
      autor: "Albert Camus",
      capa: "https://5934488p.ha.azioncdn.net/capas-livros/9788577992706-albert-camus-valerie-rumjanek-estrangeiro-o-livro-de-bolso-2823047218.jpg",
      categoria: "Ficção",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      nome: "Lolita",
      autor: "Vladmir Nabokov",
      capa: "https://pictures.abebooks.com/inventory/22404935230.jpg",
      categoria: "Romance",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      nome: "Uisses",
      autor: "James Joyce",
      capa: "https://img.travessa.com.br/livro/GR/77/7734f380-1155-4ac5-8fcf-135c25ae8125.jpg",
      categoria: "Romance",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      nome: "Em busca do Tempo Perdido",
      autor: "Marcel Proust",
      capa: "http://s3.amazonaws.com/cdn.globolivros.com.br/livros/1725/medium_1725.jpg?1480360473",
      categoria: "Ficção",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      nome: "O Homem Sem Qualidades",
      autor: "Robert Musli",
      capa: "https://images-na.ssl-images-amazon.com/images/I/A11+5m1K0jL.jpg",
      categoria: "Ficção",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      nome: "Mythos",
      autor: "Stephan Fry",
      capa: "https://images-na.ssl-images-amazon.com/images/I/51bgQDKD+pL._SX324_BO1,204,203,200_.jpg",
      categoria: "Fantasia",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ],
  emprestados: [
    {
      nome: "A Morte de Virgílio",
      autor: "Hermann Broch",
      capa: "https://images-na.ssl-images-amazon.com/images/I/31Za4e-x08L._BO1,204,203,200_.jpg",
      categoria: "História Ficcional",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      nome: "O Código da Vinci",
      autor: "Dan Brown",
      capa: "https://m.media-amazon.com/images/I/41U51ByfcwL.jpg",
      categoria: "Mistério",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      nome: "Necromancer",
      autor: "William Gibson",
      capa: "https://preview.redd.it/6ffen5751x661.jpg?auto=webp&s=38bbbff01112576858710450580f54b1c36663ab",
      categoria: "Suspense",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      nome: "Drácula",
      autor: "Bran Stocker",
      capa: "https://www.hotelcoroanadeaur.ro/wp-content/uploads/2019/06/dracula-bram-stoker-270x400.jpg",
      categoria: "Terror",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      nome: "Inferno",
      autor: "Dan Brown",
      capa: "https://images-na.ssl-images-amazon.com/images/I/81Tzi88m+jL.jpg",
      categoria: "Terror",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      nome: "O Livro Da Mitologia",
      autor: "Thomas Bulfinch",
      capa: "https://images-na.ssl-images-amazon.com/images/I/61Bu2clrlbL.jpg",
      categoria: "Ficção",
      sinopse:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
  ],
};

const HomeReducer = createSlice({
  name: "home",
  initialState: initialState,
  reducers: {
    AddBook(state, action) {
      state.livros.push(action.payload);
    },
    AddBorowedBook(state, action) {
      state.emprestados.push(action.payload);
    },
  },
});

export const { AddBook, AddBorowedBook } = HomeReducer.actions;
export default HomeReducer.reducer;
