//img Libretas
import libretatradicionalgrande from './Assets/img/libretas/libretatradicionalgrande.jpg'
import libretatradicionalmediana from './Assets/img/libretas/libretatradicionalmediana.jpg'
import libretatradicionalpequeña from './Assets/img/libretas/libretatradicionalpequeña.jpg'
import libretatradicionalmini from './Assets/img/libretas/libretatradicionalmini.jpg'
import libretaespecializadadedibujo from './Assets/img/libretas/libretaespecializadadedibujos.jpg'
import libretaespecializadadebocetos from './Assets/img/libretas/libretaespecializadadebocetos.jpg'
import libretaespecializadapentagramada from './Assets/img/libretas/libretaespecializadapentagramada.jpg'
//img Organizadores
import planeadorsemanalgrande from './Assets/img/organizadores/planeadorgrande.jpg'
import planeadorsemanalmediano from './Assets/img/organizadores/planeadorsemanalmediano.jpeg'
//img Paqueteria 
import cajasparalibretas from './Assets/img/Paqueteria/cajasparalibretasabierta.jpg'
import cajasalamedida from './Assets/img/Paqueteria/portada.jpg'
import bolsasalamedida from './Assets/img/Paqueteria/bolsasalamedida.jpg'
//img Extras
import tarjeta from './Assets/img/Extras/tarjetas.jpg'

export const dataProducts = [
    {
        id: 1,
        type:'Libretas',
        products:[
            {
                id:1,
                route:'/personalizarlibretas',
                name:'Libreta Tradicional',
                image:libretatradicionalgrande,
                price: 33000,
                size:'Grande',
                cms: '25 x 17 cms.',
                sheets:'100 Hojas'
            },
            {
                id:2,
                route:'/personalizarlibretas',
                name:'Libreta Tradicional',
                image:libretatradicionalmediana,
                price: 20000,
                size:'Mediana',
                cms: '21 x 14 cms.',
                sheets:'80 Hojas'
            },
            {
                id:3,
                route:'/personalizarlibretas',
                name:'Libreta Tradicional',
                image:libretatradicionalpequeña ,
                price: 6200,
                size:'Pequeña',
                cms: '14 x 10 cms.',
                sheets:'60 Hojas'   
            },
            {
                id:4,
                route:'/personalizarlibretas',
                name:'Libreta Tradicional',
                image:libretatradicionalmini,
                price: 4500,
                size:'Mini',
                cms: '9 x 9 cms.',
                sheets:'40 Hojas'  
            },
            {
                id:5,
                route:'/personalizarlibretas',
                name:'Libreta Especializada de Bocetos',
                image:libretaespecializadadebocetos,
                price: 36000,
                size:'Mediana',
                cms: '21 x 14 cms.',
                sheets:'200 Hojas - 72gr'  
            },
            {
                id:6,
                route:'/personalizarlibretas',
                name:'Libreta Especializada de Dibujo',
                image:libretaespecializadadedibujo,
                price: 33000,
                size:'Grande',
                cms: '25 x 17 cms.',
                sheets:'50 Hojas - 200gr' 
            },
            {
                id:7,
                route:'/personalizarlibretas',
                name:'Libreta Especializada Pentagramada',
                image:libretaespecializadapentagramada,
                price: 33000,
                size:'Mediana',
                cms: '21 x 14 cms.',
                sheets:'80 Hojas - 72gr'             
            }
        ]
    },
    {
        id: 2,
        type:'Planeadores',
        products:[
            {
                id:8,
                route:'/personalizarlibretas',
                name:'Planeador Semanal',
                image:planeadorsemanalgrande,
                price: 35000,
                size:'Grande',
                cms: '21 x 28 cms.',
                sheets:'50 Hojas' 
            },
            {
                id:9,
                route:'/personalizarlibretas',
                name:'Planeador Semanal',
                image:planeadorsemanalmediano,
                price: 30000,
                size:'Mediano',
                cms: '21 x 14 cms.',
                sheets:'50 Hojas' 
            }
        ]
    },
    {
        id: 3,
        type:'Paqueteria',
        products:[
            {
                id:10,
                route:'/personalizarcajas',
                name:'Cajas para Libretas',
                image:cajasparalibretas,
                size:'Grandes',
                cms:'18 x 26 x 3 cms.',
                price: 11000
            },
            {
                id:11,
                route:'/personalizarcajas',
                name:'Cajas para Libretas',
                image:cajasparalibretas,
                size:'Medianas',
                cms:'15 x 22 x 3 cms.',
                price: 7000
            },
            {
                id:12,
                route:'/personalizarcajas',
                name:'Cajas para Libretas',
                image:cajasparalibretas,
                size:'Pequeñas',
                cms:'11 x 15 x 3 cms.',
                price: 5000
            },
            {
                id:13,
                route:'/personalizarcajas',
                name:'Cajas para Libretas',
                image:cajasparalibretas,
                size:'Mini',
                cms:'10 x 10 x 3 cms.',
                price: 5000
            },
            {
                id:14,
                route:'/personalizarcajas',
                name:'Cajas a la medida',
                image:cajasalamedida 
            },
            {
                id:15,
                route:'/personalizarbolsas',
                name:'Bolsas a la medida',
                image:bolsasalamedida 
            }
        ]
    },
    {
        id: 4,
        type:'Extras',
        products:[
            {
                id:16,
                route:'/personalizarbolsas',
                name:'Tarjetas',
                image:tarjeta,
                price:1000
            }
        ]
    }
]