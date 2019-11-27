declare interface Section {
    id: string,
    rootKey: string,
    elements: Element[],
}

declare interface Element {
    id: string
    rootKey: string,
    type: string
}

declare interface Contact {
    id?: number,
    thumbnailUrl?: string,
    firstName?: string,
    lastName?: string,
    speakerId?: number,
    facebookPage?: string,
    linkedinPage?: string,
    twitter?: string
}

declare interface DisplayAttribute {
    keyName?: string,
    show?: boolean,
    type?: string
}

declare interface Header extends Element {
    text?: string
}

declare interface People extends Element {
    contacts?: Contact[],
    displayAttributes: DisplayAttribute[],
    contactListId: number
}

declare interface Image extends Element {
    isVideo?: boolean,
    imagePhotoSet?: PhotoSet,
    url?: string
}
declare interface EventVenue extends Element {
    city?: string,
    country?: string,
    displayAddress?: string,
    name?: string
}
declare interface EventLogo extends Element {
    logoPhotoSet?: PhotoSet
}
declare interface EventName extends Element {
    eventName?: string
}
declare interface EventDate extends Element {
    localStartDate?: string,
    localEndDate?: string
}
declare interface EventSecondaryHeaders extends Element {
    header1?: string,
    header2?: string
}
declare interface RegisterButton extends Element {
    name?: string,
    customName?: string,
    mode?: 'rsvpExperience' | undefined,
    url?: string,
    newTab?: boolean,
    flowId?: string
}
declare interface SocialShare extends Element {
    facebook?: boolean,
    twitter?: true,
    linkedin?: true
    landingPageUrl?: string,
    eventName?: string,
    twitterHashtag?: string
}
declare interface CoverPhoto extends Element {
    coverPhoto?: PhotoSet
}

export interface PhotoSet {
    small?: string,
    medium?: string,
    large?: string,
    facebook?: string,
    blur?: string
}

declare interface Header extends Section {
    image: Image,
    eventLogo: EventLogo,
    eventName: EventName,
    eventDate: EventDate,
    eventVenue: EventVenue,
    eventSecondaryHeaders: EventSecondaryHeaders,
    registerButton: RegisterButton,
    socialShare: SocialShare,
    coverPhoto: CoverPhoto
}

export default Section;
