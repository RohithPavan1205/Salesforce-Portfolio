import { LightningElement, api } from 'lwc';

export default class SkillsSection extends LightningElement {
    @api salesforceLogo = '';
    @api agentforceLogo = '';
    @api salesCloudLogo = '';
    @api serviceCloudLogo = '';
    @api experienceCloudLogo = '';
    @api lwcLogo = '';
    @api apexLogo = '';
    @api flowLogo = '';
    @api soqlLogo = '';
    @api reportsLogo = '';
    @api vsCodeLogo = '';
    @api gitLogo = '';
    @api githubLogo = '';
    @api pythonLogo = '';
    @api antigravityLogo = '';

    // ── Editable Text Properties ─────────────────────────────────────
    @api sectionHeader = 'TECHNOLOGIES & TOOLS';
    @api skill1 = 'Agentforce';
    @api skill2 = 'Sales Cloud';
    @api skill3 = 'Service Cloud';
    @api skill4 = 'Experience Cloud';
    @api skill5 = 'LWC';
    @api skill6 = 'Apex';
    @api skill7 = 'Flow Builder';
    @api skill8 = 'SOQL';
    @api skill9 = 'Reports & Dashboards';
    @api skill10 = 'VS Code';
    @api skill11 = 'Git';
    @api skill12 = 'GitHub';
    @api skill13 = 'Python';
    @api skill14 = 'Antigravity';
}
