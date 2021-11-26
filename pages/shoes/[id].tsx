import { useRouter } from "next/router";
import Head from "../../components/_head";
import Footer from "../../components/_foot";
import Link from "next/link";
import { Item, ItemsContainer } from "..";
import range from "../../helpers/range";

export default () => {
  const router = useRouter();
  const { id } = router?.query;
  return (
    <div>
      <Head />

      <main className="mx-2 md:mx-10 -top-56 md:-top-52 relative px-2">
        <BreadCrumb id={id} />
        <ItemDetails id={id} />
        <RelatedProducts />
      </main>

      <Footer />
    </div>
  );
};

interface ItemDetailsProps {
  id: any;
}
const ItemDetails: React.FC<ItemDetailsProps> = ({ id }) => (
  <div className="rounded-2xl grid md:grid-cols-3 md:gap-4 bg-gradient-to-b from-yellow-200 to-yellow-100 p-3 w-full shadow-2xl px-2 md:px-10 py-10">
    <div className="mt-10 order-2 md:order-none flex items-center flex-col">
      <h2 className="font-bold text-2xl text-purple-700">
        Nike Air Shoe 270 for John Doe
      </h2>
      <p className="text-gray-500 text-sm my-5">
        Nike's Air Shoe is one of the most popular shoes out there for people
        like you to try out.
      </p>

      <div className="flex">
        {range(3).map((a, index) => (
          <a key={String(index)} href="#">
            <img
              className="h-10 object-contain rounded-lg mr-3 mt-5"
              src={`/images/${id!}.jpg`}
            />
          </a>
        ))}
      </div>
    </div>
    <div>
      <div className="order-1 md:order-none flex justify-center">
        <img
          className="h-64 w-64 md:h-72 md:w-72 object-contain rounded-full border-2 p-1 border-yellow-400"
          src={`/images/${id!}.jpg`}
        />
      </div>
    </div>

    <div className="mt-10 justify-self-center order-3 " id="reviews">
      <div>
        <span className="mr-2">Review:</span>
        {range(5).map((a, index) => (
          <a key={String(index)} href="">
            {/* @ts-ignore */}
            <ion-icon name="star"></ion-icon>
          </a>
        ))}
        <span className="ml-2 font-bold">4.5 (60)</span>
      </div>

      <div className="mt-10">
        <span className="mr-3">Size:</span>
        {range(5).map((a, index) => (
          <a
            className={`mr-2 rounded p-2 px-3 ${
              index === 3 ? "bg-yellow-500" : "bg-yellow-300"
            }`}
            key={String(index)}
            href="#"
          >
            <span className="text-sm font-bold">{37 + index}</span>
          </a>
        ))}
      </div>

      <div className="text-center">
        <button className="bg-black text-yellow-400 rounded-2xl ml-4 py-2 px-6 mt-10">
          Add to cart
        </button>
      </div>
    </div>
  </div>
);

const RelatedProducts = () => (
  <div className="mt-20">
    <h2 className="font-bold my-4">Related Products</h2>
    <ItemsContainer>
      {range(12).map((a, index) => (
        <Item key={String(index)} />
      ))}
    </ItemsContainer>
  </div>
);

const BreadCrumb: React.FC<{ id: any }> = ({ id }) => (
  <div className="p-3 flex justify-center md:justify-between md:mx-10 mb-5 items-center">
    <p className="text-sm font-bold hidden md:block">
      <Link href="/">
        <a className="text-white">Home</a>
      </Link>
      &nbsp; / Product Details
    </p>
    <h2 className="text-2xl font-bold">Product Details</h2>
    <p className="text-sm font-bold items-center hidden md:flex">
      <span className="mr-4"> Next Product</span>
      <Link href={`/shoes/${Number(id) - 1 || 1}`}>
        <a>
          {/* @ts-ignore */}
          <ion-icon name="arrow-back"></ion-icon>
        </a>
      </Link>

      <Link href={`/shoes/${Number(id) + 1 || 1}`}>
        <a className="ml-4">
          {/* @ts-ignore */}
          <ion-icon name="arrow-forward"></ion-icon>
        </a>
      </Link>
    </p>
  </div>
);
