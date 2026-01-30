import siteConfig from "@/config/siteConfig";
import GET_POSTS_QUERY, { GET_LATEST_POST_QUERY } from "@/libs/blogQueries";

const API_URL = `${siteConfig.blogApiUrl}/graphql`;

async function fetchAPI(query, { variables } = {}) {
  const headers = { "Content-Type": "application/json" };

  const res = await fetch(API_URL, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!res.ok) {
    console.error(`API Error: ${res.status} ${res.statusText}`);
    throw new Error(`Failed to fetch API: ${res.status}`);
  }

  const contentType = res.headers.get("content-type");
  if (!contentType || !contentType.includes("application/json")) {
    const text = await res.text();
    console.error(`API Error: Received non-JSON response from ${API_URL}`);
    console.error("Response Preview:", text.slice(0, 500)); // Log more content to identify the HTML page
    throw new Error(`API returned non-JSON response from ${API_URL}`);
  }

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getAllBlogs() {
  const data = await fetchAPI(
    `
    query AllPosts {
      posts(first: 20, where: { orderby: { field: DATE, order: DESC } }) {
        nodes {
          id
          title
          slug
          date
          excerpt
          featuredImage {
            node {
              sourceUrl
            }
          }
          author {
            node {
              name
            }
          }
          categories {
            nodes {
              name
              slug
            }
          }
        }
      }
    }
  `
  );

  return (
    data?.posts?.nodes.map((post) => {
      const date = new Date(post.date);
      return {
        id: post.slug,
        featuredImage: post.featuredImage?.node?.sourceUrl || null,
        title: post.title || "",
        desc: post.excerpt || "",
        author: post.author?.node?.name || "enfycon",
        day: date.getDate(),
        month: date.toLocaleString("en-US", { month: "short" }),
        year: date.getFullYear(),
        category: post.categories?.nodes[0]?.name || "Technology",
      };


    }) || []
  );
}

export async function getBlogBySlug(slug) {
  const data = await fetchAPI(
    `
    query PostBySlug($id: ID!) {
      post(id: $id, idType: SLUG) {
        id
        title
        slug
        date
        commentCount
        content
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        tags {
          nodes {
            name
            slug
          }
        }
      }
    }
  `,
    {
      variables: { id: slug },
    }
  );

  if (!data?.post) return null;

  const post = data.post;
  const date = new Date(post.date);
  return {
    id: post.slug,
    featuredImage: post.featuredImage?.node?.sourceUrl || null,
    title: post.title,
    desc: post.excerpt,
    content: post.content,
    author: post.author?.node?.name || "enfycon",
    day: date.getDate(),
    month: date.toLocaleString("en-US", { month: "short" }),
    year: date.getFullYear(),
    category: post.categories?.nodes[0]?.name || "Technology",
    tags: post.tags?.nodes?.map(tag => tag.name) || [],
    commentCount: post.commentCount || 0,
    avatar: post.author?.node?.avatar?.url || null,
  };


}

export async function getBlogPageData(category = null) {
  try {
    const variables = {
      first: 15,
      after: null,
      categoryName: category || null,
    };

    const [latestRes, initialRes] = await Promise.all([
      fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: GET_LATEST_POST_QUERY }),
        next: { revalidate: 60 },
      }),
      fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: GET_POSTS_QUERY,
          variables: variables,
        }),
        next: { revalidate: 60 },
      }),
    ]);

    if (!latestRes.ok || !initialRes.ok) {
      throw new Error("Failed to fetch posts");
    }

    const latestJson = await latestRes.json();
    const initialJson = await initialRes.json();

    return {
      latestPost: latestJson.data?.posts?.nodes?.[0] || null,
      posts: initialJson.data?.posts,
    };
  } catch (error) {
    console.error("Error fetching blog data:", error);
    return null;
  }
}
