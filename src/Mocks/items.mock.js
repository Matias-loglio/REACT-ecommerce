import sapiens from '../assets/Tapa sapiens.jpg';
import artista from '../assets/Tapa el camino del artista.jpg';
import Breve_historia from '../assets/Breve historia.png';
import pink_floyd from '../assets/pink_floyd.png';


export const items = [
    {
        id: "1",
        name: "Sapiens",
        category: "libro",
        img: sapiens,
        precio:"4000",
        descripcion:"En De animales a dioses Yuval Noah Harari traza una breve historia de la humanidad, desde los primeros humanos que caminaron sobre la Tierra hasta los radicales y a veces devastadores avances de las tres grandes revoluciones que nuestra especie ha protagonizado: la cognitiva, la agrícola y la científica.",
        stock: "10",
    },
    {
        id: "2",
        name: "Una Breve historia del Mundo",
        category: "libro",
        img: Breve_historia,
        precio:"6000",
        descripcion:"Libro Sapiens",
        stock: "6",
    },
    {
        id: "3",
        name: "El camino del artista",
        category: "libro",
        img:artista,
        precio:"4500",
        descripcion:"Libro El Camino del Artista",
        stock: "5",
    },
    {
        id: "4",
        name: "Pink Floyd - dark side of the moon",
        category: "disco",
        img:pink_floyd,
        precio:"12500",
        descripcion:"The Dark Side of the Moon, el álbum que encumbró a Pink Floyd, cumplía en 2013 su 40 aniversario. Además del apartado musical, el disco de rock progresivo se hizo famoso por su diseño, un enigmático prisma luminoso, realizado por el colectivo británico Hipgnosis con Storm Thorgerson al frente.",
        stock: "2",
    },
];

