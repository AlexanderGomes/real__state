import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Button } from '@chakra-ui/react'
import {baseUrl, fetchApi} from '../utils/fetchApi'
import Property from '../components/Property'

export const Banner = ({purpose, title1, title2, desc1, desc2, buttonText, linkName, imgUrl}) => (

<Flex flexWrap={'wrap'} justifyContent='center' alignItems={'center'} m='10'>
<Image src={imgUrl} width={500} height={300}/>
 <Box p={'5'}>
 <Text color={'gray.500'} fontSize='sm' fontWeight={'medium'}>{purpose}</Text>
 <Text fontSize={'3xl'} fontWeight='bold'>{title1}<br />{title2}</Text>
 <Text fontSize='lg' paddingTop='3' paddingBottom='3' color='gray.700'>{desc1}<br />{desc2}</Text>
 <Button fontSize='xl'>
    <Link href={linkName}><a>{buttonText}</a></Link>
    </Button>
 </Box>
</Flex>
);



export default function Home  ({forRent, forSale})  {


  return (
    <Box>
    <Banner
     purpose = 'RENT A HOME'
     title1= 'Rental Homes for'
     title2='Everyone'
     desc1= 'Explore from Apartments, builder floors, villas'
     desc2= 'and more'
     buttonText= 'Explore Renting'
     linkName='/search?purpose=for-rent'
     imgUrl = '/apartment.jpg'
    />
    <Flex flexWrap={'wrap'}>
   {forRent.map((property) => <Property property={property} key={property.id} />)}
    </Flex>
    <Banner
     purpose = 'BUY A HOME'
     title1= 'Find, Buy, & Own Your'
     title2='Dream Home'
     desc1= 'Explore from Apartments, land, builder floors'
     desc2= 'villas and more'
     buttonText= 'Explore Buying'
     linkName='/search?purpose=for-sale'
     imgUrl = '/house.jpg'
    />
    <Flex flexWrap={'wrap'}>
    {forSale.map((property) => <Property property={property} key={property.id} />)}
    </Flex>
    </Box>
  )
}

export async function getStaticProps() {
  const forSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
  const forRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)
  

  return {
    props: {
      forSale: forSale?.hits,
      forRent: forRent?.hits,
    },
  };
}



