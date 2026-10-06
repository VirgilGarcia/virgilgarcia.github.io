const SectionHeading = ({ index, kicker, children }) => (
  <header className="section-head">
    <p className="kicker" data-reveal>
      <span>{index}</span> {kicker}
    </p>
    <h2 className="section-head__title" data-reveal>
      {children}
    </h2>
  </header>
);

export default SectionHeading;
