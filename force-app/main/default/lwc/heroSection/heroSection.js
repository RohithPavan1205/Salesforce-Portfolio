import { LightningElement, api } from 'lwc';
import HERO_BG from '@salesforce/resourceUrl/heroBackground';

export default class HeroSection extends LightningElement {

    // ── API Properties (Configurable in Experience Builder) ─────────
    @api profilePhoto = '';
    @api resumeUrl = '';
    @api trailheadPoints = '10,000+';
    @api trailheadBadges = '50+';
    @api flowsBuilt = '10+';
    @api projectsCompleted = '3+';
    @api linkedinUrl = '';
    @api githubUrl = '';
    @api trailheadUrl = '';
    @api emailAddress = '';
    @api heroEyebrow = "Hi, I'm";
    @api heroName = "Your Name";
    @api heroRole = "Salesforce Developer";
    @api heroDescription = "I build scalable Salesforce experiences that automate business processes, enhance user experiences, and drive real impact.";
    @api primaryCtaText = "View My Projects";
    @api secondaryCtaText = "Download Resume";
    @api connectText = "Connect with me";
    @api heroBgImage = 'https://res.cloudinary.com/dqvru2hvc/image/upload/v1783680900/60000_bcbrif.png';





    // ── SVG Data URIs for Icons ─────────────────────────────────────
    cloudIcon = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%230176d3"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></svg>';
    automationIcon = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%230176d3"><path d="M7 2v11h3v9l7-12h-4l3-8z"/></svg>';
    devIcon = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%230176d3"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>';
    aiIcon = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%230176d3"><path d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9zm-7.5.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5 5.5-2.5-5.5-2.5zm7.5 5l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 14.5z"/></svg>';

    // ── Social Icons (Data URIs & URLs) ──────────────────────────────
    linkedinIcon  = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%230a66c2"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>';
    githubIcon    = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23181717"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>';
    trailheadIcon = 'https://res.cloudinary.com/dqvru2hvc/image/upload/v1783604642/logo_trailhead_qo7pdg.png';
    emailIcon     = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%230176d3"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>';

    // ── Getters ─────────────────────────────────────────────────────
    get emailMailto() {
        return this.emailAddress ? `mailto:${this.emailAddress}` : '#';
    }

    // ── CTA handlers ────────────────────────────────────────────────
    handleViewProjects() {
        const event = new CustomEvent('viewprojects');
        this.dispatchEvent(event);
    }

    handleDownloadResume() {
        if (this.resumeUrl) {
            window.open(this.resumeUrl, '_blank');
        } else {
            window.open('/resource/RohithResume', '_blank');
        }
    }
}