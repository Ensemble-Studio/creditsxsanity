
import client from '../lib/sanity';
import { siteWrapper, homepageImage, homepageText, siteBanner, siteQuote, siteManifesto, manTitle, manContent } from '../styles/Home.module.css';


import Header from '../components/Header';
import Footer from '../components/Footer';
import Text from '../components/Text';
import MediaQuery from 'react-responsive';

export default function Home({ data }) {
  const { siteHeaderData, homepageData } = data;



  // Check your browser console for output
  console.log({ siteHeaderData, homepageData });


  return (
    <div className={siteWrapper}>

      <Header />



      <div className={siteBanner}>
        <MediaQuery minWidth={900}>        <div className={homepageImage}><img src={homepageData.image.url} /></div>
        </MediaQuery>
        <div className={homepageText}><h1 className={siteQuote}>
          <Text content={homepageData.subtitle} />
        </h1>


        </div>

      </div>


      <div className={siteManifesto}>

        <span className={manTitle}>manifesto</span>
        <span className={manContent}>Conversations & portraits with the real heroes behind the scenes of the creative industries.</span>

      </div>
      <Footer />
    </div>










  )
}




// Create a query called siteHeaderQuery
const siteHeaderQuery = `*\[_type == "siteheader"\][0] {
        title,
        repoURL {
        current
      }
}`;

// Create a query called homepageQuery
const homepageQuery = `*\[_type == "homepage"\][0] {
        title,
        subtitle,
        "ctaUrl": cta {
        current
      },
      image {
        ...asset ->
  }
}`;

export async function getStaticProps() {
  const homepageData = await client.fetch(homepageQuery);
  const siteHeaderData = await client.fetch(siteHeaderQuery);

  const data = { homepageData, siteHeaderData };

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}






