import type { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

type RemixStack = {
  imgSrc: string;
  title: string;
  background: string;
};

export const loader: LoaderFunction = () => {
  const stacks: RemixStack[] = [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1611191796022-2be279cc9957?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988",
      title: "Blues",
      background: "blue",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1575672913784-11a7cd4f25f4?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1769",
      title: "Indie",
      background: "amber",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1576109188032-aed32779c007?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986",
      title: "Grunge",
      background: "red",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1471995606044-d5222f0f91d2?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770",
      title: "Reggae",
      background: "green",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1559424452-eeb3a13ffe2b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770",
      title: "Disco",
      background: "purple",
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1647953960058-38dbef424e1b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1765",
      title: "Polka",
      background: "pink",
    },
  ];

  return { stacks };
};

export default function Index() {
  const { stacks } = useLoaderData<{ stacks: RemixStack[] }>();

  const COLORS: any = {
    blue: "bg-blue-900",
    red: "bg-red-900",
    green: "bg-green-900",
    yellow: "bg-yellow-900",
    orange: "bg-orange-900",
    purple: "bg-purple-900",
    pink: "bg-pink-900",
    gray: "bg-gray-900",
  };

  return (
    <main className="text-white">
      <div className="max-w-5xl mx-auto px-4">
        <header className="border-b-2 border-gray-500 flex items-center justify-between py-7 h-[120px]">
          <img
            src="/images/RemixStacks.png"
            alt="Remix Stacks"
            className="max-h-full w-auto mt-1"
          />

          <nav className="font-mono">
            <ul className="flex space-x-4 items-center">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/" className="font-bold">
                  Explore
                </Link>
              </li>
              <li>
                <Link to="/" className="py-1 px-3 bg-red-600 shadow">
                  Submit
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 py-8">
          {stacks.map((stack) => (
            <article
              key={stack.title}
              className="relative aspect-square w-full border-4 border-gray-300 hover:shadow-lg flex items-center justify-center"
            >
              <img
                src={stack.imgSrc}
                alt={stack.title}
                className="inset-0 absolute w-full h-full object-cover"
              />
              <div
                className={`inset-0 absolute w-full h-full ${
                  COLORS[stack.background]
                } opacity-30`}
              />
              <p className="text-5xl font-bold text-white relative font-mono">
                {stack.title}
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
