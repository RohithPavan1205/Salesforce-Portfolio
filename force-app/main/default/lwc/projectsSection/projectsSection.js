import { LightningElement, api } from 'lwc';

export default class ProjectsSection extends LightningElement {
    @api viewAllProjectsUrl = '#';
    @api project1ImageUrl = '';
    @api project1Url = '#';
    @api project2ImageUrl = '';
    @api project2Url = '#';
    @api project3ImageUrl = '';
    @api project3Url = '#';

    // ── Editable Text Properties ─────────────────────────────────────
    @api sectionLabel = 'Projects';
    @api viewAllLabel = 'View All Projects';

    // Project 1 Text Config
    @api project1Type = 'Category';
    @api project1Title = 'Project 1 Title';
    @api project1Desc = 'A description of your first project explaining what it does, who it was for, and the core benefits.';
    @api project1Tech = 'Custom Objects, Reports, App Builder';
    @api project1LinkText = 'View Project';

    // Project 2 Text Config
    @api project2Type = 'Category';
    @api project2Title = 'Project 2 Title';
    @api project2Desc = 'A description of your second project explaining what it does, who it was for, and the core benefits.';
    @api project2Tech = 'Approval Process, Email Alerts, Flows';
    @api project2LinkText = 'View Project';

    // Project 3 Text Config
    @api project3Type = 'Category';
    @api project3Title = 'Project 3 Title';
    @api project3Desc = 'A description of your third project explaining what it does, who it was for, and the core benefits.';
    @api project3Tech = 'Experience Builder, LWC, Responsive';
    @api project3LinkText = 'View Project';

    // ── Getters for Tech Stack Lists ─────────────────────────────────
    get project1TechList() {
        return this.project1Tech ? this.project1Tech.split(',').map(item => item.trim()) : [];
    }

    get project2TechList() {
        return this.project2Tech ? this.project2Tech.split(',').map(item => item.trim()) : [];
    }

    get project3TechList() {
        return this.project3Tech ? this.project3Tech.split(',').map(item => item.trim()) : [];
    }
}
