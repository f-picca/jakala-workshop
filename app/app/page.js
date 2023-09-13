import Contentstack from "contentstack";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import ProductGrid from "./components/ProductGrid";
import CommerceLayerAuth from "./providers/CommerceLayerAuthProvider";
import products from "./products.json";
export default async function Home() {
  const products = await getAllProducts();
  const heroBannerContent = await getHeroBanner();

  return (
    <CommerceLayerAuth
      clientId={process.env.COMMERCELAYER_CLIENT_ID}
      slug={process.env.COMMERCELAYER_ORGANISATION_SLUG}
      market="13719"
    >
      <Header cartLabel="🛒" />
      <HeroBanner content={heroBannerContent} />
      <ProductGrid products={products} />
      <Footer />
    </CommerceLayerAuth>
  );
}

async function getHeroBanner() {
  const content = {
      "title" : "Welcome to our record store",
      "text" : "this is some hardcoded content!",
      "image" : {
        "url" : "/vinyl-black.png",
        "description" : "a nice image"
      }
  }
  
  return content;
}

async function getAllProducts(){
  return products;
}

/* contentstack version
async function getHeroBanner() {
  try {
    const Stack = Contentstack.Stack({
      api_key: process.env.CONTENTSTACK_API_KEY,
      delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN,
      environment: process.env.CONTENTSTACK_ENVIRONMENT,
      region: Contentstack.Region.EU,
    });
    const Query = Stack.ContentType("hero_banner").Query();
    const results = await Query.includeCount().toJSON().find();
    return results[0][0];
  } catch (error) {
    console.log(error);
    return null;
}}
*/

/* contentstack version
async function getAllProducts() {
  try {
    const Stack = Contentstack.Stack({
      api_key: process.env.CONTENTSTACK_API_KEY,
      delivery_token: process.env.CONTENTSTACK_DELIVERY_TOKEN,
      environment: process.env.CONTENTSTACK_ENVIRONMENT,
      region: Contentstack.Region.EU,
    });
    const Query = Stack.ContentType("product").Query();
    const results = await Query.includeCount().toJSON().find();
    return results[0];
  } catch (error) {
    console.log(error);
    return null;
  }
}
*/
