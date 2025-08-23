import Link from "next/link";
import { MainNavbar } from "./main-navbar";

export const MainPage = () => {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center">
      <MainNavbar />
      <section className="h-full ps-4 pe-4">
        <section className="flex h-[calc(100dvh-100px)] flex-col items-center justify-center gap-4">
          <h1 className="text-4xl leading-12 font-bold sm:text-5xl lg:text-7xl lg:leading-20">
            感謝の気持ちを
            <br />
            <span className="from-primary to-secondary bg-linear-to-r bg-clip-text text-transparent">
              ゲーム
            </span>
            で伝えましょう
          </h1>
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/sign-up" color="primary">
                さっそくはじめる
              </Link>
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
};
