export default function Footer() {
  return (
    <footer className="w-full py-20 border-t border-on-surface/10 bg-background">
      <div className="footer-content flex flex-col md:flex-row justify-between items-center px-container-margin gap-12 max-w-7xl mx-auto">
        <div className="space-y-4 text-center md:text-left">
          <span className="font-headline-md text-headline-md font-black text-on-surface tracking-tighter">SAHITI KOTTURTY</span>
          <p className="text-label-sm text-on-surface-variant uppercase tracking-widest">© {new Date().getFullYear()} DESIGNED IN THE NOIR — ALL RIGHTS RESERVED</p>
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          <a className="text-label-sm text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest font-bold" href="https://dribbble.com/sahitikotturty" target="_blank" rel="noopener noreferrer">Dribbble</a>
          <a className="text-label-sm text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest font-bold" href="https://linkedin.com/in/sahitikotturty" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="text-label-sm text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest font-bold" href="https://www.instagram.com/_sahitikotturty_.20?igsh=MW9ubXNwM2ozNGtpNg==" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a className="text-label-sm text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest font-bold" href="https://behance.net/sahitikotturty" target="_blank" rel="noopener noreferrer">Behance</a>
        </div>
      </div>
    </footer>
  );
}
