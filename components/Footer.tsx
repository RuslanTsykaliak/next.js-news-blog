export default function Footer() {
  return (
    <footer className="py-3 bg-gray-800 text-white">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Next.js Tech News.
        </p>
        <p className="text-sm mt-2">
          Built with <a href="https://nextjs.org/" className="underline">Next.js</a> and ❤️
        </p>
      </div>
    </footer>
  );
}
