import { FormEvent, useState } from 'react';

const steps = [
  ['01', 'Vertel ons wie je bent', 'Een paar korte vragen geven ons een goed beeld van wat bij je past.'],
  ['02', 'Ontdek jouw matches', 'Wij koppelen je aan buurten en woningen die aansluiten bij jouw leven.'],
  ['03', 'Voel je thuis', 'Plan een bezichtiging en zet de volgende stap met vertrouwen.'],
];

export default function App() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (email.trim()) setSubmitted(true);
  }

  return <main><nav className="nav" aria-label="Hoofdnavigatie"><a className="brand" href="#top" aria-label="Thuiskwartier, naar boven">thuis<span>kwartier</span></a><a className="nav-link" href="#hoe-het-werkt">Hoe het werkt</a><a className="button button-small" href="#start">Vind mijn plek <span aria-hidden="true">↗</span></a></nav><section className="hero" id="top"><div className="hero-copy"><p className="eyebrow">Wonen op jouw manier</p><h1>Een plek die<br /><em>bij je past.</em></h1><p className="intro">Thuiskwartier helpt je niet alleen een huis, maar vooral een thuis te vinden. In een buurt waar jouw leven klopt.</p><a className="button" href="#start">Ontdek jouw kwartier <span aria-hidden="true">↓</span></a></div><div className="hero-art" aria-label="Illustratie van een warm huis tussen bomen" role="img"><div className="sun" /><div className="cloud cloud-one" /><div className="cloud cloud-two" /><div className="hill hill-back" /><div className="hill hill-front" /><div className="tree tree-left"><i /></div><div className="tree tree-right"><i /></div><div className="house"><div className="roof" /><div className="chimney" /><div className="window" /><div className="door" /></div></div></section><section className="statement"><p>Een nieuw adres is pas het begin.<br />Wij helpen je landen.</p></section><section className="steps" id="hoe-het-werkt"><div><p className="eyebrow">Zo werkt Thuiskwartier</p><h2>Jouw zoektocht,<br /><em>persoonlijk gemaakt.</em></h2></div><div className="step-list">{steps.map(([number, title, text]) => <article className="step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><b aria-hidden="true">↗</b></article>)}</div></section><section className="join" id="start"><p className="eyebrow">Blijf dichtbij</p><h2>Jouw thuis begint<br /><em>met een goed gesprek.</em></h2>{submitted ? <p className="success" role="status">Dank je! We houden je op de hoogte.</p> : <form onSubmit={handleSubmit}><label htmlFor="email">E-mailadres</label><div className="email-row"><input id="email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="jij@voorbeeld.nl" required /><button className="button" type="submit">Houd me op de hoogte <span aria-hidden="true">→</span></button></div></form>}</section><footer><a className="brand" href="#top">thuis<span>kwartier</span></a><p>© {new Date().getFullYear()} Thuiskwartier</p><a href="mailto:hello@thuiskwartier.nl">hello@thuiskwartier.nl</a></footer></main>;
}
