import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h1 className="mb-4 text-4xl font-bold">404 - Not Found</h1>
      <p className="mb-8 text-lg">お探しのページは見つかりませんでした。</p>
      <Link href="/" className="underline">
        ホームに戻る
      </Link>
    </div>
  );
};

export default NotFound;
