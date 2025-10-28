import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Brand */}
        <div className="mb-8">
          <Link href="/" className="inline-block mb-4">
            <span className="text-2xl font-bold gradient-text">UnlockLab</span>
          </Link>
          <p className="text-gray-400 max-w-md">
            Empowering professionals and teams to harness the power of AI through hands-on learning, educational offerings, and community.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} UnlockLab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
