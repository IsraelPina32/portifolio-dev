export const Footer = () => {
  return (
    <footer className="py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-3 sm:space-y-4">
          <div className="h-px w-16 mx-auto bg-gradient-to-r from-transparent via-brand to-transparent mb-4" />
          <p className="text-xs sm:text-sm text-muted-foreground font-light">
            © {new Date().getFullYear()} Israel Pina. Todos os direitos reservados.
          </p>
          <p className="text-xs text-brand/60 font-light">
            Desenvolvido com elegância e atenção aos detalhes
          </p>
        </div>
      </div>
    </footer>
  );
};
