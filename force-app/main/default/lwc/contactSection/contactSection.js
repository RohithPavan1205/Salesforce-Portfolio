import { LightningElement, api } from 'lwc';

export default class ContactSection extends LightningElement {
    @api connectBgImage = '';
    @api illustrationUrl = '';

    // ── Editable Text Properties ─────────────────────────────────────
    @api sectionHeader = "Let's Connect";
    @api sectionDesc = 'I am always open to discussing new opportunities, collaborating on exciting projects, or just having a conversation.';
    @api contactButtonText = 'Contact Me';
    @api emailAddress = 'your.email@example.com';
    @api phoneNumber = '+1 234 567 8900';
    @api locationText = 'City, Country';

    // ── Link Getters ────────────────────────────────────────────────
    get emailMailto() {
        return this.emailAddress ? `mailto:${this.emailAddress}` : '#';
    }

    get phoneTel() {
        return this.phoneNumber ? `tel:${this.phoneNumber.replace(/\s+/g, '')}` : '#';
    }
}
