import { NextApiRequest, NextApiResponse } from 'next'

interface Continent {
  id: string
  title: string
  subtitle: string
  image: string
  image2: string
  bio: string
  countries: number
  languages: number
  cities: {
    image: string
    name: string
    countre: string
    countreFlag: string
  }[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  if (req.method === 'GET') {
    const continents: Continent[] = [
      {
        id: 'europa',
        title: 'Europa',
        subtitle: 'O continente mais antigo.',
        image:
          'https://images.unsplash.com/photo-1490642914619-7955a3fd483c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=893&q=80',
        image2:
          'https://images.unsplash.com/photo-1486299267070-83823f5448dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
        bio: 'A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.',
        countries: 50,
        languages: 60,
        cities: [
          {
            image:
              'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            name: 'Londres',
            countre: 'Reino Unido',
            countreFlag:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/255px-Flag_of_the_United_Kingdom_%283-5%29.svg.png'
          },
          {
            image:
              'https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
            name: 'Paris',
            countre: 'França',
            countreFlag:
              'https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg'
          },
          {
            image:
              'https://images.unsplash.com/photo-1529260830199-42c24126f198?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
            name: 'Roma',
            countre: 'Itália',
            countreFlag:
              'https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg'
          },
          {
            image:
              'https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            name: 'Praga',
            countre: 'República Tcheca',
            countreFlag:
              'https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg'
          },
          {
            image:
              'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            name: 'Amsterdã',
            countre: 'Holanda',
            countreFlag:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1024px-Flag_of_the_Netherlands.svg.png'
          }
        ]
      },
      {
        id: 'oceania',
        title: 'Oceania',
        subtitle: 'O menor continente do planeta Terra.',
        image:
          'https://images.unsplash.com/photo-1588001400947-6385aef4ab0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
        image2:
          'https://images.unsplash.com/photo-1534027019354-7c717bedd3c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        bio: 'A Oceania é vizinha da América, da Antártida e está localizado ao sudeste da Ásia. Ela é o menor e mais isolado continente do planeta Terra, com uma área de aproximadamente 8.526.000 km². A região é banhada pelos oceanos Índico e Pacífico, quem nasce por lá é Oceânico.',
        countries: 14,
        languages: 38,
        cities: [
          {
            image:
              'https://images.unsplash.com/photo-1533424922832-a76b7d3563d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            name: 'Sidney',
            countre: 'Austrália',
            countreFlag:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Flag_of_Australia.svg/255px-Flag_of_Australia.svg.png'
          },
          {
            image:
              'https://images.unsplash.com/photo-1569387949526-bf598008cebd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=945&q=80',
            name: 'Milford Sound',
            countre: 'Nova Zelândia',
            countreFlag:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/1280px-Flag_of_New_Zealand.svg.png'
          },
          {
            image:
              'https://images.unsplash.com/photo-1509610696553-9243c1e230f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            name: 'Havaí',
            countre: 'Estados Unidos',
            countreFlag:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png'
          },
          {
            image:
              'https://images.unsplash.com/photo-1580725869538-9b164c27c44f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
            name: 'Bora Bora',
            countre: 'Polinésia Francesa',
            countreFlag:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Flag_of_French_Polynesia.svg/1024px-Flag_of_French_Polynesia.svg.png'
          },
          {
            image:
              'https://images.unsplash.com/photo-1569806145835-1413fbfc1af4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
            name: 'Palau',
            countre: 'República de Palau',
            countreFlag:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Palau.svg/800px-Flag_of_Palau.svg.png'
          }
        ]
      },
      {
        id: 'america-do-norte',
        title: 'América do Norte',
        subtitle: 'Um subcontinente do continente americano.',
        image:
          'https://images.unsplash.com/photo-1496588152823-86ff7695e68f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        image2:
          'https://images.unsplash.com/photo-1581086432225-c436eaf5f70e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        bio: 'A América do Norte é banhada ao norte pelo Oceano glacial Ártico; a oeste, pelo Oceano Pacífico; e a leste, pelo Oceano Atlântico. Relevo: ... A hidrografia da América do Norte é bastante diversificada. No território canadense, os lagos predominam, existem pelo menos 150 mil lagos, grande parte de origem glacial.',
        countries: 3,
        languages: 256,
        cities: [
          {
            image:
              'https://images.unsplash.com/photo-1591053442076-495738f08c12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
            name: 'Mexico City',
            countre: 'México',
            countreFlag:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/800px-Flag_of_Mexico.svg.png'
          },
          {
            image:
              'https://images.unsplash.com/photo-1602940659805-770d1b3b9911?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
            name: 'Nova Iorque',
            countre: 'Estados Unidos',
            countreFlag:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png'
          },
          {
            image:
              'https://images.unsplash.com/photo-1609985932391-0d9d515c1246?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            name: 'Toronto',
            countre: 'Canadá',
            countreFlag:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Canada.svg/800px-Flag_of_Canada.svg.png'
          },
          {
            image:
              'https://images.unsplash.com/photo-1460881680858-30d872d5b530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
            name: 'Los Angeles',
            countre: 'Estados Unidos',
            countreFlag:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/800px-Flag_of_the_United_States.svg.png'
          },
          {
            image:
              'https://images.unsplash.com/photo-1561788655-79bf50b6b174?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1031&q=80',
            name: 'Guadalajara',
            countre: 'México',
            countreFlag:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/800px-Flag_of_Mexico.svg.png'
          }
        ]
      },
      {
        id: 'america-do-sul',
        title: 'América do Sul',
        subtitle: 'A região de maior biodiversidade.',
        image:
          'https://images.unsplash.com/photo-1545832063-74f2d924b61a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        image2:
          'https://images.unsplash.com/photo-1564750576234-75de3cc54053?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
        bio: 'A América do Sul está localizada em grande parte no hemisfério sul, na zona intertropical ocidental. A América do Sul abrange um território de 18 milhões de quilômetros quadrados e é banhada a leste pelo oceano Atlântico, a oeste pelo oceano Pacífico e ao norte pelo mar das Antilhas, conhecido como do Caribe.',
        countries: 12,
        languages: 456,
        cities: [
          {
            image:
              'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            name: 'Rio de Janeiro',
            countre: 'Brasil',
            countreFlag:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/800px-Flag_of_Brazil.svg.png'
          },
          {
            image:
              'https://images.unsplash.com/photo-1612294043468-2904c075bcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            name: 'Buenos Aires',
            countre: 'Argentina',
            countreFlag:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/800px-Flag_of_Argentina.svg.png'
          },
          {
            image:
              'https://images.unsplash.com/photo-1545622647-596c11da49f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=369&q=80',
            name: 'Cusco',
            countre: 'Peru',
            countreFlag:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Flag_of_Peru.svg/1024px-Flag_of_Peru.svg.png'
          },
          {
            image:
              'https://images.unsplash.com/photo-1534943441045-1009d7cb0bb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=508&q=80',
            name: 'Cartagena',
            countre: 'Colômbia',
            countreFlag:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/800px-Flag_of_Colombia.svg.png'
          },
          {
            image:
              'https://images.unsplash.com/photo-1568632234165-47bb34c35708?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            name: 'Bogotá',
            countre: 'Colômbia',
            countreFlag:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Colombia.svg/800px-Flag_of_Colombia.svg.png'
          }
        ]
      },
      {
        id: 'asia',
        title: 'Ásia',
        subtitle: 'O maior dos continentes.',
        image:
          'https://images.unsplash.com/photo-1464817739973-0128fe77aaa1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        image2:
          'https://images.unsplash.com/photo-1535139262971-c51845709a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        bio: 'A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial.',
        countries: 50,
        languages: 2.301,
        cities: [
          {
            image:
              'https://images.unsplash.com/photo-1496939376851-89342e90adcd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2Fwb3JlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
            name: 'Cingapura',
            countre: 'Cingapura',
            countreFlag:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/1200px-Flag_of_Singapore.svg.png'
          },
          {
            image:
              'https://images.unsplash.com/photo-1570521462033-3015e76e7432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
            name: 'Tóquio',
            countre: 'Japão',
            countreFlag:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/800px-Flag_of_Japan.svg.png'
          },
          {
            image:
              'https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
            name: 'Dubai',
            countre: 'Emirados Árabes',
            countreFlag:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1600px-Flag_of_the_United_Arab_Emirates.svg.png'
          },
          {
            image:
              'https://images.unsplash.com/photo-1576788369575-4ab045b9287e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=444&q=80',
            name: 'Hong Kong',
            countre: 'China',
            countreFlag:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/800px-Flag_of_the_People%27s_Republic_of_China.svg.png'
          },
          {
            image:
              'https://images.unsplash.com/photo-1508009603885-50cf7c579365?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80',
            name: 'Bangkok',
            countre: 'Tailândia',
            countreFlag:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/800px-Flag_of_Thailand.svg.png'
          }
        ]
      },
      {
        id: 'africa',
        title: 'África',
        subtitle: 'Rico em biodiversidade e multicultural',
        image:
          'https://images.unsplash.com/photo-1516426122078-c23e76319801?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=868&q=80',
        image2:
          'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
        bio: 'A África é o terceiro continente mais extenso com cerca de 30 milhões de quilômetros quadrados, cobrindo 20, 3% da área total da terra firme do planeta. É o segundo continente mais populoso da Terra com cerca de um bilhão de pessoas, representando cerca de um sétimo da população mundial, e 54 países independentes.',
        countries: 54,
        languages: 2000,
        cities: [
          {
            image:
              'https://images.unsplash.com/photo-1602578984228-c98a9b995f3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            name: 'Joanesburgo',
            countre: 'África do Sul',
            countreFlag:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Flag_of_Johannesburg%2C_South_Africa.svg/1200px-Flag_of_Johannesburg%2C_South_Africa.svg.png'
          },
          {
            image:
              'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
            name: 'Cape Town',
            countre: 'África do Sul',
            countreFlag:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Flag_of_Johannesburg%2C_South_Africa.svg/1200px-Flag_of_Johannesburg%2C_South_Africa.svg.png'
          },
          {
            image:
              'https://images.unsplash.com/photo-1573474072204-f38904808070?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            name: 'Durban',
            countre: 'África do Sul',
            countreFlag:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Flag_of_Johannesburg%2C_South_Africa.svg/1200px-Flag_of_Johannesburg%2C_South_Africa.svg.png'
          },
          {
            image:
              'https://images.unsplash.com/photo-1574708292187-510facd91678?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
            name: 'Entebbe',
            countre: 'Uganda',
            countreFlag:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Flag_of_Uganda.svg/1200px-Flag_of_Uganda.svg.png'
          },
          {
            image:
              'https://images.unsplash.com/photo-1596005554384-d293674c91d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=898&q=80',
            name: 'Nairobi',
            countre: 'Quênia',
            countreFlag:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Flag_of_Kenya.svg/1200px-Flag_of_Kenya.svg.png'
          }
        ]
      }
    ]

    return res.json(continents)
  }

  return res.status(405).json({ error: `Method '${req.method}' Not Allowed` })
}
