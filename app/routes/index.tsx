import type { LoaderFunction } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import React from "react";
import styled from "styled-components";

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
      <ContentWrapper>
        <Header>
          <LogoImage src="/images/RemixStacks.png" alt="Remix Stacks" />
          <nav>
            <NavigationLinks>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/" className="active">
                  Explore
                </Link>
              </li>
              <li>
                <NavButton
                  to="/"
                  style={
                    {
                      "--background-color ": "#F42435",
                    } as React.CSSProperties
                  }
                >
                  Submit
                </NavButton>
              </li>
            </NavigationLinks>
          </nav>
        </Header>

        <GridSection>
          {stacks.map((stack) => (
            <GridItem key={stack.title} className="hover:shadow-lg">
              <GridImage src={stack.imgSrc} alt={stack.title} />
              <ImageCover
                style={
                  {
                    "--background-color": COLORS[stack.background],
                  } as React.CSSProperties
                }
              />
              <GridItemText>{stack.title}</GridItemText>
            </GridItem>
          ))}
        </GridSection>
      </ContentWrapper>
    </main>
  );
}

const ContentWrapper = styled.div`
  max-width: 64rem;
  margin: 0 auto;
  padding: 0 0.5rem;
`;

const LogoImage = styled.img`
  max-height: 100%;
  width: auto;
  margin-top: 0.25rem;
`;

const Header = styled.header`
  border-bottom: 2px solid #6b7280;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 1.75rem 0;
  height: 120px;
`;

const NavigationLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  font-family: "Roboto Mono", monospace;

  // Everything but first li
  & > li:not(:first-child) {
    margin-left: 1rem;
  }

  a {
    text-decoration: none;
    color: white;
  }

  a.active {
    font-weight: bold;
  }
`;

const NavButton = styled(Link)`
  box-sizing: border-box;
  padding: 0.25rem 0.75rem;
  background: var(--background-color);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

const GridSection = styled.section`
  display: grid;
  width: 100%;

  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2.5rem;

  padding: 2rem 0;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const GridItem = styled.article`
  position: relative;
  aspect-ratio: 1 / 1;
  width: 100%;

  border: 4px solid #d1d5db;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const GridImage = styled.img`
  inset: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const GridItemText = styled.p`
  font-size: 3rem;
  font-weight: bold;
  font-family: "Roboto Mono", monospace;
  color: white;
  position: relative;
  cursor: default;
`;

const ImageCover = styled.div`
  inset: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.4;
  background: var(--background-color);

  &:hover {
    box-shadow: 0 20px 25px -5px var(--background-color),
      0 20px 25px -5px var(--background-color);
  }
`;
