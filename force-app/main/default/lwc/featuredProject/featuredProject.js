import { LightningElement, api } from 'lwc';

export default class FeaturedProject extends LightningElement {
    @api projectImageUrl = '';
    @api caseStudyUrl = '#';
    @api liveDemoUrl = '#';

    // ── Editable Text Properties ─────────────────────────────────────
    @api sectionLabel = 'Featured Project';
    @api projectType = 'CRM SOLUTION';
    @api projectTitle = 'Project Title';
    @api projectDescription = 'A summary description of your featured project, its core features, and architectural highlights.';
    
    @api feature1 = 'Feature Highlight 1';
    @api feature2 = 'Feature Highlight 2';
    @api feature3 = 'Feature Highlight 3';
    @api feature4 = 'Feature Highlight 4';
    
    @api impactHeading = 'Impact';
    @api impactText = 'Detail the key metrics, efficiencies gained, and business outcomes resulting from this project.';
    
    @api caseStudyLabel = 'View Case Study';
    @api liveDemoLabel = 'Live Demo';

    @api techStack = 'Experience Cloud, LWC, Apex, Flow, SOQL, Reports';

    // ── Getters ──────────────────────────────────────────────────────
    get techStackList() {
        return this.techStack ? this.techStack.split(',').map(item => item.trim()) : [];
    }
}
