export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50">
      {children}
    </div>
  );
}