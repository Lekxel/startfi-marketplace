import Head from "../components/_head";
import Footer from "../components/_foot";
import Link from "next/link";
import range from "../helpers/range";

const items = [1, 2, 3];

const Home: React.FC = () => {
  return (
    <div>
      <Head />

      <main className="mx-2 md:mx-10 -top-56 md:-top-52 relative px-2">
        <BreadCrumb />
        <ItemsContainer>
          {range(12).map((a, index) => (
            <Item key={String(index)} />
          ))}
        </ItemsContainer>
      </main>

      <Footer />
    </div>
  );
};

export const ItemsContainer: React.FC = ({ children }) => (
  <div className="grid grid-cols-2 gap-3 md:gap-5 md:grid-cols-3">
    {children}
  </div>
);

export const Item = () => {
  const item = items[Math.floor(Math.random() * items.length)];
  return (
    <Link href={`/shoes/${item}`}>
      <div className="rounded-2xl flex flex-col items-center bg-gradient-to-b from-yellow-200 to-yellow-100 p-3 h-72 md:h-96 shadow-2xl cursor-pointer">
        <div className="flex justify-between w-full px-4">
          {/* @ts-ignore */}
          <ion-icon name="contrast"></ion-icon>

          {/* @ts-ignore */}
          <ion-icon name="heart"></ion-icon>
        </div>
        <img
          className="h-72 object-contain rounded-3xl"
          src={`/images/${item}.jpg`}
        />
        <h4 className="text-purple-600 font-bold mb-1">Nike Shoes</h4>
        <span className="text-xs font-bold text-purple-900">$236.00</span>
      </div>
    </Link>
  );
};

const BreadCrumb = () => (
  <div className="p-3 flex justify-center md:justify-between md:mx-10 mb-5 items-center">
    <p className="text-sm font-bold hidden md:block">
      <span className="text-white">Home</span> / Product
    </p>
    <h2 className="text-2xl font-bold">Shop</h2>
    <p className="text-sm hidden md:block">Showing 1 - 12 of 12 results</p>
  </div>
);

export default Home;
