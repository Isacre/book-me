import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    livros: [
        {
        nome: '20 Mil Léguas Submarinas',
        autor: 'Jules Verne',
        capa: 'https://images-na.ssl-images-amazon.com/images/I/81wmElXiKqL.jpg'
    },
    {
        nome: 'Moby Dick',
        autor: 'Herman Melville',
        capa: 'https://64.media.tumblr.com/82f56f7adfc3d4064aa5b4da899e035a/tumblr_o90l4m7XVV1qhttpto3_1280.jpg'
    },
    {
        nome: '1984',
        autor: 'George Orwell',
        capa: 'https://images-na.ssl-images-amazon.com/images/I/81EStZoMf7L.jpg'
    },
    {
        nome: 'Orgulho e Preconceito',
        autor: 'Jane Austen',
        capa: 'https://images-na.ssl-images-amazon.com/images/I/61JosO2tkdL.jpg'
    },
    {
        nome: 'A Divina Comédia',
        autor: 'Dante Alighieri',
        capa: 'https://www.lpm.com.br/livros/imagens/a_divina_comedia_9788525433206_hd.jpg'
    },
    {
        nome: 'A Odisséia',
        autor: 'Homero',
        capa: 'https://kbimages1-a.akamaihd.net/c5a9e519-a7d3-4727-ad5d-2110aa6467df/1200/1200/False/a-odisseia-edicao-ilustrada.jpg'
    },
    {
        nome: 'Dom Quixote',
        autor: 'Miguel de Cervantes',
        capa: 'https://www.lpm.com.br/livros/imagens/dom_quixote_hq_9788525425669_hd.jpg'
    },
    {
        nome: 'Dom Casmurro',
        autor: 'Machado de Assis',
        capa: 'https://images-na.ssl-images-amazon.com/images/I/71cERjQgroL.jpg'
    },
    {
        nome: 'A Metamorfose',
        autor: 'Franz Kafka',
        capa: 'https://images-na.ssl-images-amazon.com/images/I/91ibsHmdNQL.jpg'
    },
    {
        nome: 'O Estrangeiro',
        autor: 'Albert Camus',
        capa: 'https://5934488p.ha.azioncdn.net/capas-livros/9788577992706-albert-camus-valerie-rumjanek-estrangeiro-o-livro-de-bolso-2823047218.jpg'
    },
    {
        nome: 'Lolita',
        autor: 'Vladmir Nabokov',
        capa: 'https://pictures.abebooks.com/inventory/22404935230.jpg'
    },
    {
        nome: 'Uisses',
        autor: 'James Joyce',
        capa: 'https://img.travessa.com.br/livro/GR/77/7734f380-1155-4ac5-8fcf-135c25ae8125.jpg'
    },
    {
        nome: 'Em busca do Tempo Perdido',
        autor: 'Marcel Proust',
        capa: 'http://s3.amazonaws.com/cdn.globolivros.com.br/livros/1725/medium_1725.jpg?1480360473'
    },
    {
        nome: 'O Homem Sem Qualidades',
        autor: 'Robert Musli',
        capa: 'https://images-na.ssl-images-amazon.com/images/I/A11+5m1K0jL.jpg'
    },
    {
        nome: 'Mythos',
        autor: 'Stephan Fry',
        capa: 'https://images-na.ssl-images-amazon.com/images/I/51bgQDKD+pL._SX324_BO1,204,203,200_.jpg'
    },
],
emprestados: [
    {
    nome: 'A Morte de Virgílio',
    autor: 'Hermann Broch',
    capa: 'https://images-na.ssl-images-amazon.com/images/I/31Za4e-x08L._BO1,204,203,200_.jpg'
},
{
    nome: 'O Código da Vinci',
    autor: 'Dan Brown',
    capa: 'https://m.media-amazon.com/images/I/41U51ByfcwL.jpg'
},
{
    nome: 'Necromancer',
    autor: 'William Gibson',
    capa: 'https://preview.redd.it/6ffen5751x661.jpg?auto=webp&s=38bbbff01112576858710450580f54b1c36663ab'
},
{
    nome: 'Drácula',
    autor: 'Bran Stocker',
    capa: 'https://www.hotelcoroanadeaur.ro/wp-content/uploads/2019/06/dracula-bram-stoker-270x400.jpg'
},
{
    nome: 'Inferno',
    autor: 'Dan Brown',
    capa: 'https://images-na.ssl-images-amazon.com/images/I/81Tzi88m+jL.jpg'
},
{
    nome: 'O Livro Da Mitologia',
    autor: 'Thomas Bulfinch',
    capa: 'https://images-na.ssl-images-amazon.com/images/I/61Bu2clrlbL.jpg'
},
]
    
}

const HomeReducer = createSlice({
    name: 'home',
    initialState: initialState,
    reducers: {
        DefaultReducer(state, action) {
            state.livros = action.payload
        }
    }
})


export const {DefaultReducer} = HomeReducer.actions;
export default HomeReducer.reducer;