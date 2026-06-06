export default function Footer() {
  return (
    <footer className="w-full py-20 border-t border-white/5 bg-background">
      <div className="footer-content flex flex-col md:flex-row justify-between items-center px-container-margin gap-12 max-w-7xl mx-auto">
        <div className="space-y-4 text-center md:text-left">
          <span className="font-headline-md text-headline-md font-black text-white tracking-tighter">SAHITI KOTTURTY</span>
          <p className="text-label-sm text-outline uppercase tracking-widest">© 2024 DESIGNED IN THE NOIR — ALL RIGHTS RESERVED</p>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          <a className="text-label-sm text-outline hover:text-primary transition-colors uppercase tracking-widest font-bold" href="#">Dribbble</a>
          <a className="text-label-sm text-outline hover:text-primary transition-colors uppercase tracking-widest font-bold" href="#">LinkedIn</a>
          <a className="text-label-sm text-outline hover:text-primary transition-colors uppercase tracking-widest font-bold" href="https://www.instagram.com/_sahitikotturty_.20?igsh=MW9ubXNwM2ozNGtpNg==" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a className="text-label-sm text-outline hover:text-primary transition-colors uppercase tracking-widest font-bold" href="#">Behance</a>
        </div>
      </div>
    </footer>
  );
}
