export const mapPostToCard = (node, selectedCategorySlug = null) => {
    const date = new Date(node.date);

    // Find the category that matches the selected filter, or default to the first one
    let displayCategory = node.categories?.nodes[0];
    if (selectedCategorySlug && node.categories?.nodes) {
        const match = node.categories.nodes.find(c => c.slug === selectedCategorySlug);
        if (match) displayCategory = match;
    }

    return {
        id: node.slug,
        featuredImage: node.featuredImage?.node?.sourceUrl || null,
        title: node.title || "",
        desc: node.excerpt || "",
        author: node.author?.node?.name || "enfycon",
        day: date.getDate(),
        month: date.toLocaleString("en-US", { month: "short" }),
        year: date.getFullYear(),
        category: displayCategory?.name || "Technology",
        categorySlug: displayCategory?.slug || "technology",
    };
};
