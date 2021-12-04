import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    livros: [
        {
        nome: '20 Mil Léguas Submarinas',
        autor: 'Jules Verne',
        capa: 'https://images-na.ssl-images-amazon.com/images/I/81wmElXiKqL.jpg'
    },
    {
        nome: '20 Mil Léguas Submarinas',
        autor: 'Jules Verne',
        capa: 'https://images-na.ssl-images-amazon.com/images/I/81wmElXiKqL.jpg'
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
    autor: 'Jules Verne',
    capa: 'https://preview.redd.it/6ffen5751x661.jpg?auto=webp&s=38bbbff01112576858710450580f54b1c36663ab'
},
{
    nome: 'Drácula',
    autor: 'Bran Stocker',
    capa: 'https://images-na.ssl-images-amazon.com/images/I/61GcKUacmQL.jpg'
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