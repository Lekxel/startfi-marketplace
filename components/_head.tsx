import H from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

interface HeadProps {
  title?: string;
}
interface Page {
  url: string;
  title: string;
}

const pages: Page[] = [
  {
    url: "/",
    title: "Home",
  },
  {
    url: "/#",
    title: "Shop",
  },
  {
    url: "/#",
    title: "Blog",
  },
  {
    url: "/#",
    title: "About",
  },
];

const Head: React.FC<HeadProps> = ({ title }) => {
  const router = useRouter();

  return (
    <>
      <H>
        <title>{title || "StartFi Marketplace"}</title>
        <meta name="description" content="StartFi Marketplace" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400;700&display=swap"
          rel="stylesheet"
        />
      </H>

      <header id="header" className="py-8 px-4 md:px-10 flex justify-between">
        <h1>
          <Link href="/">
            <a className="text-lg font-bold">
              <span className="p-1 rounded-full bg-yellow-50 bg-opacity-60 relative">
                {/* @ts-ignore */}
                <ion-icon name="egg"></ion-icon>
              </span>
              &nbsp; StartFi
            </a>
          </Link>
        </h1>
        <nav className="hidden md:block">
          <ul className="flex justify-evenly">
            {pages.map(({ url, title }, index) => (
              <li
                key={title}
                className={`mr-5 ${
                  router.pathname == url ? "text-yellow-500" : ""
                }`}
              >
                <Link href={url}>
                  <a className="font-bold">{title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <span className="mr-5 font-bold">$23.44</span>
          <span className="p-3 rounded-full  bg-yellow-50 bg-opacity-60 relative">
            <span className="absolute -top-1 right-0 text-xs font-normal bg-yellow-400 rounded-full px-1">
              3
            </span>
            {/* @ts-ignore */}
            <ion-icon name="bag-handle"></ion-icon>
          </span>
        </div>
      </header>

      <div className="mx-2 md:mx-10">
        <div className="bg-gradient-to-br from-yellow-400 to-yellow-300 h-60 rounded-3xl w-full"></div>
      </div>
    </>
  );
};

export default Head;
