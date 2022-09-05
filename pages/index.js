import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { fetchApi } from "../utils/fetchApi";
import { Flex, Box, Text, Button } from "@chakra-ui/core";
import { Banner, Property } from "../components";

export default function Home({ propretyForRent, propretyForSale }) {
  return (
    <Box minWidth="200px">
      <Banner
        title="Rental Homes for Everyone"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
        purpose="Rent"
      />
      <Flex justifyContent="space-evenly" flexWrap="wrap">
        {propretyForRent?.map(
          ({
            title,
            price,
            id,
            coverPhoto,
            rentFrequency,
            agency,
            area,
            baths,
            rooms,
            isVerified,
          }) => {
            return (
              <Property
                key={id}
                externalId={id}
                description={title}
                area={area?.toFixed(3)}
                numBath={baths}
                numBed={rooms}
                price={price}
                providerLogo={agency?.logo?.url}
                imageName={coverPhoto?.title}
                urlImage={coverPhoto?.url}
                rentFrequency={`/${rentFrequency}`}
                isVerified={isVerified}
              />
            );
          }
        )}
      </Flex>
      <Banner
        title="Find, Buy &amp; Own Your Dream Home"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
        purpose="Sale"
      />
      <Flex justifyContent="space-evenly" flexWrap="wrap">
        {propretyForSale?.map(
          ({
            title,
            price,
            id,
            coverPhoto,
            agency,
            area,
            baths,
            rooms,
            isVerified,
          }) => {
            return (
              <Property
                key={id}
                externalId={id}
                description={title}
                area={area?.toFixed(3)}
                numBath={baths}
                numBed={rooms}
                price={price}
                providerLogo={agency?.logo?.url}
                imageName={coverPhoto?.title}
                urlImage={coverPhoto?.url}
                isVerified={isVerified}
              />
            );
          }
        )}
      </Flex>
    </Box>
  );
}

export async function getStaticProps() {
  const propretyForSale = await fetchApi(
    "locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6",
    "list"
  );
  const propretyForRent = await fetchApi(
    "locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6",
    "list"
  );
  return {
    props: {
      propretyForSale: propretyForSale?.hits || [],
      propretyForRent: propretyForRent?.hits || [],
    },
  };
}
