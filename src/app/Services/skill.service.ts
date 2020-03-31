import { Injectable } from '@angular/core';
import { AbilityService } from './ability.service';
import { Skill } from '../Models/skill';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  /**
   * Tutte le skill del sistema
   */
  skills: Skill[] = [
    {
      id: 1,
      title: 'Angular',
      progress: 'fas fa-check-double text-success'
    },
    {
      id: 2,
      title: 'Jquery',
      progress: 'fas fa-check-double text-success'
    },
    {
      id: 3,
      title: 'HTML/CSS',
      progress: 'fas fa-check-double text-success'
    },
    {
      id: 3,
      title: 'Freemarker',
      progress: 'fas fa-check-double text-success'
    },
    {
      id: 4,
      title: 'Ionic',
      progress: 'fas fa-check-double text-success'
    },
    {
      id: 5,
      title: 'Electron',
      progress: 'fas fa-check-double text-success'
    },
    {
      id: 6,
      title: 'Vue.js',
      progress: 'fas fa-check-double text-success'
    },
    {
      id: 7,
      title: 'Bootstrap 4',
      progress: 'fas fa-check-double text-success'
    },
    {
      id: 8,
      title: 'Grunt',
      progress: 'fas fa-check-double text-success'
    },
    {
      id: 9,
      title: 'Materialize',
      progress: 'fas fa-check-double text-success'
    },
    {
      id: 10,
      title: 'Laravel',
      progress: 'fas fa-check-double text-success'
    },
    {
      id: 11,
      title: 'Spring-boot',
      progress: 'fas fa-check-double text-success'
    },
    {
      id: 12,
      title: 'Code Igniter',
      progress: 'fas fa-check-double text-success'
    },
    {
      id: 13,
      title: 'Symphony',
      progress: 'fas fa-check-double text-success'
    },
    {
      id: 14,
      title: 'Microsoft Excel',
      progress: 'fas fa-check-double text-success'
    },
    {
      id: 15,
      title: 'Microsoft PowerPoint',
      progress: 'fas fa-check-double text-success'
    },
    {
      id: 16,
      title: 'Kantt Project management',
      progress: 'fas fa-check-double text-success'
    },
    {
      id: 17,
      title: 'Microsoft Word',
      progress: 'fas fa-check-double text-success'
    },
    {
      id: 18,
      title: 'Photoshop',
      progress: 'fas fa-check-double text-success'
    },
    {
      id: 19,
      title: 'Illustrator',
      progress: 'fas fa-check-double text-success'
    },
    {
      id: 20,
      title: 'InDesign',
      progress: 'fas fa-check-double text-success'
    },
    {
      id: 22,
      title: 'Acrobat',
      progress: 'fas fa-check-double text-success'
    },
    {
      id: 23,
      title: 'Premiere',
      progress: 'fas fa-check-double text-success'
    },
    {
      id: 24,
      title: 'XD',
      progress: 'fas fa-check-double text-success'
    }
  ];
  /**
 * Tutte le skill del sistema
 */

  constructor() { }

  findSkill(id: number): Skill {
    let tmpskill: Skill;
    tmpskill = this.skills.find(p => p.id === id);
    return tmpskill;
  }
}
