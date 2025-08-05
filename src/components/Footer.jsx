export default function Footer() {
  return (
    <footer className="bg-primary py-6 px-6">
      <div className="container mx-auto text-center text-text-secondary">
        <p>&copy; {new Date().getFullYear()} My Portfolio. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
