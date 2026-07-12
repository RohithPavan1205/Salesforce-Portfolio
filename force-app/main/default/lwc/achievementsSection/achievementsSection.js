import { LightningElement, api } from 'lwc';

export default class AchievementsSection extends LightningElement {
    @api rangerBadgeUrl = '';
    @api rangerCredentialUrl = '#';
    @api badgesIconUrl = '';
    @api badgesUrl = '#';
    @api agentblazerBadgeUrl = '';
    @api agentblazerCredentialUrl = '#';
    @api ociBadgeUrl = '';
    @api ociCredentialUrl = '#';

    // ── Editable Text Properties ─────────────────────────────────────
    @api sectionLabel = 'Achievements';

    // Card 1 Text Config
    @api card1Title = 'Achievement 1 Title';
    @api card1Desc = 'Detail of your first credential, certification, or key milestone.';
    @api card1LinkText = 'View Credential';

    // Card 2 Text Config
    @api card2Title = 'Achievement 2 Title';
    @api card2Desc = 'Detail of your second credential, certification, or key milestone.';
    @api card2LinkText = 'View Badges';

    // Card 3 Text Config
    @api card3Title = 'Achievement 3 Title';
    @api card3Desc = 'Detail of your third credential, certification, or key milestone.';
    @api card3LinkText = 'View Credential';

    // Card 4 Text Config
    @api card4Title = 'Achievement 4 Title';
    @api card4Desc = 'Detail of your fourth credential, certification, or key milestone.';
    @api card4LinkText = 'View Credential';
}
