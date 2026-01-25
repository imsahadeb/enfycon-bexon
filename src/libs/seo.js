export function constructMetadata({
    title = "enfycon - empowering business with technology",
    description = "enfycon - empowering business with technology",
    image = "/images/og-image.png", // Make sure to add a default OG image to your public folder
    icons = "/favicon.ico",
    noIndex = false,
    canonicalUrl,
    keywords = [],
} = {}) {
    return {
        title,
        description,
        openGraph: {
            title,
            description,
            images: [
                {
                    url: image,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
            creator: "@enfycon",
        },
        icons,
        metadataBase: new URL("https://enfycon.com"),
        ...(noIndex && {
            robots: {
                index: false,
                follow: false,
            },
        }),
        ...(canonicalUrl && {
            alternates: {
                canonical: canonicalUrl,
            }
        }),
        keywords: keywords.length > 0 ? keywords : extractKeywords(`${title} ${description}`),
    };
}

const BASE_KEYWORDS = ["enfycon", "Business Technology", "IT Solutions", "Digital Transformation", "Consulting", "Software Development"];

function extractKeywords(text) {
    if (!text) return BASE_KEYWORDS;

    const stopWords = new Set([
        "and", "the", "in", "of", "to", "a", "is", "for", "on", "with", "as", "by", "at", "an", "be", "this", "that", "from", "or", "enfycon", "- goldfish",
        "empowering", "revolutionizing", "transforming", "enhancing", "streamlining", "modernizing", "delivering", "leveraging", "providing", "driving", "accelerating", "optimizing", "navigating", "focusing", "using", "helping", "building", "creating", "ensure", "offer"
    ]);

    // Remove special chars, split by space/punctuation, convert to lower case
    const words = text
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .split(/\s+/)
        .filter(word => word.length > 3 && !stopWords.has(word));

    // Page-specific words FIRST, then Base Keywords. Limit to 20.
    // Ensure all base keywords are lowercase to match branding and avoid duplicates
    const lowerBaseKeywords = BASE_KEYWORDS.map(k => k.toLowerCase());
    const uniqueKeywords = Array.from(new Set([...words, ...lowerBaseKeywords]));
    const finalKeywords = uniqueKeywords.slice(0, 20);
    console.log(`[SEO] Generated Keywords for "${text?.substring(0, 30)}...":`, finalKeywords);
    return finalKeywords;
}

export async function generateDynamicMetadata({
    params,
    items,
    resourceName = "Item",
    idParser = (id) => id,
    titleField = "title",
    descField = "desc",
    imageField = "image",
    keywordContext = ""
}) {
    const { id } = await params;
    const parsedId = idParser(id);
    const item = items?.find(({ id: itemId }) => itemId === parsedId);

    if (!item) {
        return constructMetadata({
            title: `${resourceName} Not Found - enfycon`,
            description: `The requested ${resourceName.toLowerCase()} could not be found.`,
            noIndex: true,
        });
    }

    // Use provided context or fall back to title + desc
    let keywordsText = "";
    if (typeof keywordContext === "function") {
        keywordsText = keywordContext(item);
    } else if (keywordContext) {
        keywordsText = keywordContext;
    } else {
        keywordsText = `${item[titleField]} ${item[descField]}`;
    }

    return constructMetadata({
        title: `${item[titleField]} - enfycon`,
        description: item[descField] || `${resourceName} details for ${item[titleField]}`,
        image: item[imageField] || item.img, // Fallback for inconsistent naming
        keywords: extractKeywords(keywordsText),
    });
}
