import { Exp } from './exp';
import { Edu } from './edu';
import { Ability } from './ability';

export class Profile {
    id: number;
    nome: string;
    cognome: string;
    biography: string;
    img: string;
    email: string;
    indirizzo: string;
    tel: string;
    professione: string;
    ability?: Ability[];
    edu?: Edu[];
    exp?: Exp[];
    git?: string;
    skype?: string;
    facebook?: string;
    instagram?: string;
}
