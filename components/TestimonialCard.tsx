type Props={name:string;role:string;quote:string;avatar:string;accent:string};
export function TestimonialCard({name,role,quote,avatar,accent}:Props){
  return <article className="testimonial" style={{"--accent":accent} as React.CSSProperties}>
    <div className="quoteMark">“</div>
    <p>{quote}</p>
    <div className="person"><img src={avatar} alt={`${name} testimonial portrait`}/><div><strong>{name}</strong><span>{role}</span></div></div>
  </article>
}
