import { Profile } from './profile';
import { Skill } from './skill';

export class Ability {
    id: number;
    name: string;
    icon: string;
    percent?: number;
    profile?: Profile;
    skills?: Skill[];
}
