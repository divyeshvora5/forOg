import slugify from 'slugify';

function subRoute(root, subRoute) {
    return `${root}${subRoute}`;
}
const ROOT = "/";

export const PATH_DASHBOARD = {
    root: ROOT,
    create: {
        nfts: subRoute(ROOT, "create/item"),
        collection: subRoute(ROOT, "create/collection"),
        hypercubes: subRoute(ROOT, "create/hypercubes"),
        importCollection: subRoute(ROOT, "create/import-collection"),
    },
    explore: {
        nfts: subRoute(ROOT, "explore/nfts"),
        collectionRoot: subRoute(ROOT, "explore/collection"),
        collection: (address) =>
            subRoute(ROOT, `explore/collection/${address}`),
        auctions: subRoute(ROOT, "explore/auctions"),
    },
    stats: {
        ranking: subRoute(ROOT, "stats/ranking"),
        collectors: subRoute(ROOT, "stats/collectors"),
    },
    rewards:{
        root: subRoute(ROOT, "rewards/"),
        leaderBoard: subRoute(ROOT, "rewards/leaderBoard"),
        achievements: subRoute(ROOT, "rewards/achievements"),
        membership: subRoute(ROOT, "rewards/membership"),
    },
    profile: {
        root: subRoute(ROOT, "profile"),
    },
    item: {
        details: subRoute(ROOT, "item/details"),
        listing: subRoute(ROOT, "item/listing"),
    },
    user: {
        detail: (address) => subRoute(ROOT, `/${address}`),
    },
    blog: {
        root: subRoute(ROOT, "blog"),
        details: (id, title) => {
            const slug = slugify(title, { lower: true, strict: true });
            return subRoute(ROOT, `blog/${slug}-${id}`);
        },
    },
    contact: {
        root: subRoute(ROOT, "contact-us"),
    },
    termsAndConditions: {
        root: subRoute(ROOT, "terms-and-conditions"),
    },
    privacyPolicy: {
        root: subRoute(ROOT, "privacy-policy"),
    },
    faqs: {
        root: subRoute(ROOT, "faqs"),
    },
    helpCenter: {
        root: subRoute(ROOT, "help-center"),
    },
    chat: {
        root: subRoute(ROOT, "chat"),
        user: (address) => subRoute(ROOT, `chat?recipient=${address}`),
    },
};

export const DISABLE_CHAINS_SELECTION_ROUTE = {
    "/item/listing": true, // Item listing Page
    "/item/details": true, // Item Details Page
    // "/profile": true, // Profile Page
    "/explore/collection/[itemCollection]": true, // Collection Detail Page
    "/blog": true, // Blog Page
    "/blog/[id]": true, // Blog Details Page
    "/contact-us": true, // Contact-us Page
    "/privacy-policy": true, // Privacy Policy Page
    "/terms-and-conditions": true, // Terms & Conditions Page
    "/404": true, // 404 Page
    "/chat": true, // chat Page
    "/rewards": true, // rewards Page
    "/rewards/leaderBoard": true, // leaderBoard Page
    "/rewards/achievements": true, // achievements Page
};

export const SET_HEADER_CLASS = {
    "/explore/collection/[itemCollection]": true,
    "/[userAddress]": true,
};
