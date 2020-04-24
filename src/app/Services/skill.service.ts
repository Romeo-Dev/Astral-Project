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
      status: 'fas fa-check-double text-success'
    },
    {
      id: 2,
      title: 'Jquery',
      status: 'fas fa-check-double text-success'
    },
    {
      id: 3,
      title: 'HTML/CSS',
      status: 'fas fa-check-double text-success'
    },
    {
      id: 3,
      title: 'Freemarker',
      status: 'fas fa-check-double text-success'
    },
    {
      id: 4,
      title: 'Ionic',
      status: 'fas fa-check-double text-success'
    },
    {
      id: 5,
      title: 'Electron',
      status: 'fas fa-check-double text-success'
    },
    {
      id: 6,
      title: 'Vue.js',
      status: 'fas fa-check-double text-success'
    },
    {
      id: 7,
      title: 'Bootstrap 4',
      status: 'fas fa-check-double text-success'
    },
    {
      id: 8,
      title: 'Grunt',
      status: 'fas fa-check-double text-success'
    },
    {
      id: 9,
      title: 'Materialize',
      status: 'fas fa-check-double text-success'
    },
    {
      id: 10,
      title: 'Laravel',
      status: 'fas fa-check-double text-success'
    },
    {
      id: 11,
      title: 'Spring-boot',
      status: 'fas fa-check-double text-success'
    },
    {
      id: 12,
      title: 'Code Igniter',
      status: 'fas fa-check-double text-success'
    },
    {
      id: 13,
      title: 'Symphony',
      status: 'fas fa-check-double text-success'
    },
    {
      id: 14,
      title: 'Microsoft Excel',
      status: 'fas fa-check-double text-success'
    },
    {
      id: 15,
      title: 'Microsoft PowerPoint',
      status: 'fas fa-check-double text-success'
    },
    {
      id: 16,
      title: 'Kantt Project management',
      status: 'fas fa-check-double text-success'
    },
    {
      id: 17,
      title: 'Microsoft Word',
      status: 'fas fa-check-double text-success'
    },
    {
      id: 18,
      title: 'Photoshop',
      status: 'fas fa-check-double text-success'
    },
    {
      id: 19,
      title: 'Illustrator',
      status: 'fas fa-check-double text-success'
    },
    {
      id: 20,
      title: 'InDesign',
      status: 'fas fa-check-double text-success'
    },
    {
      id: 22,
      title: 'Acrobat',
      status: 'fas fa-check-double text-success'
    },
    {
      id: 23,
      title: 'Premiere',
      status: 'fas fa-check-double text-success'
    },
    {
      id: 24,
      title: 'XD',
      status: 'fas fa-check-double text-success'
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
