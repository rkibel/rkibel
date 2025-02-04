export default function NotFound() {
    return (
        <div className="min-h-screen bg-primary flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-accent mb-4">404</h1>
                <p className="text-secondary text-xl mb-8">Page not found</p>
                <a
                    href="/"
                    className="text-accent hover:text-secondary transition-colors"
                >
                    Return Home
                </a>
            </div>
        </div>
    );
} 