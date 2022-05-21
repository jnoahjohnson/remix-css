import type { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import React from "react";

import styles from "~/styles/index.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

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
      background: "yellow",
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
    blue: "#1e3a8a",
    red: "#7f1d1d",
    green: "#14532d",
    yellow: "#713f12",
    orange: "#7c2d12",
    purple: "#581c87",
    pink: "#831843",
  };

  return (
    <main>
      <div className="content-wrapper">
        <header className="main-header">
          <img
            src="/images/RemixStacks.png"
            alt="Remix Stacks"
            className="logo"
          />
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/" className="active">
                  Explore
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="nav-button"
                  style={
                    {
                      "--background-color ": "#F42435",
                    } as React.CSSProperties
                  }
                >
                  Submit
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <section className="grid-section">
          {stacks.map((stack) => (
            <article key={stack.title} className="grid-item">
              <img
                src={stack.imgSrc}
                alt={stack.title}
                className="grid-image"
              />
              <div
                className="image-cover"
                style={
                  {
                    "--background-color": COLORS[stack.background],
                  } as React.CSSProperties
                }
              />
              <p className="grid-item-text">{stack.title}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
