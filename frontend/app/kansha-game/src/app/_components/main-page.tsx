import { GetStartedButton } from "./get-started-button";
import { MainNavbar } from "./main-navbar";

export const MainPage = () => {
  return (
    <div className="flex min-h-[100dvh] flex-col items-center">
      <MainNavbar />
      <section className="h-full ps-4 pe-4">
        <section className="flex h-[calc(100dvh-100px)] flex-col items-center justify-center gap-8">
          <h1 className="text-4xl leading-12 font-bold sm:text-5xl lg:text-7xl lg:leading-20">
            感謝の気持ちを
            <br />
            <span className="from-primary to-secondary bg-linear-to-r bg-clip-text text-transparent">
              ゲーム
            </span>
            で伝えましょう
          </h1>
          <GetStartedButton />
        </section>
      </section>
    </div>
  );
};
