

export type Gender = {
    name: string;
    surnom: string;
    profession: string;
    Experience?: number;
}

const Greeting = ({ name, surnom, profession, Experience }: Gender) => { 
return <div>Bonjour, {name} {surnom}, Je suis {profession}, avec {Experience} années d'expérience en tant que Dev professionnel !</div>;
 };
 export default Greeting;
