"use client";

import { useState } from "react";
import BlogCard1 from "@/components/shared/cards/BlogCard1";
import styles from "./LoadMorePosts.module.scss";

const LoadMorePosts = ({ initialPosts, initialPageInfo }) => {
    const [posts, setPosts] = useState(initialPosts);
    const [pageInfo, setPageInfo] = useState(initialPageInfo);
    const [loading, setLoading] = useState(false);

    // Helper to map graphQL nodes to BlogCard1 expected format
    const mapPostToCard = (node) => {
        const date = new Date(node.date);
        return {
            id: node.slug,
            featuredImage: node.featuredImage?.node?.sourceUrl || null,
            title: node.title || "",
            desc: node.excerpt || "",
            author: node.author?.node?.name || "enfycon",
            day: date.getDate(),
            month: date.toLocaleString("en-US", { month: "short" }),
            year: date.getFullYear(),
            category: node.categories?.nodes[0]?.name || "Technology",
        };
    };

    const loadMore = async () => {
        if (loading || !pageInfo.hasNextPage) return;

        setLoading(true);
        try {
            const res = await fetch("/api/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    after: pageInfo.endCursor,
                }),
            });

            const data = await res.json();

            if (data.posts) {
                const newPosts = data.posts.edges.map((edge) => mapPostToCard(edge.node));
                setPosts((prev) => [...prev, ...newPosts]);
                setPageInfo(data.posts.pageInfo);
            }
        } catch (error) {
            console.error("Error loading more posts:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="row row-gap-4">
                {posts.map((blog, idx) => (
                    <div key={idx} className="col-md-6 col-lg-4">
                        <BlogCard1 blog={blog} idx={idx} />
                    </div>
                ))}
            </div>

            <div className="text-center mt-5 mb-4">
                <button
                    onClick={loadMore}
                    disabled={loading}
                    style={{
                        position: 'relative',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '1rem 3rem',
                        fontSize: '1rem',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        color: '#ffffff',
                        background: loading ? '#9ca3af' : 'linear-gradient(135deg, #009ca6 0%, #007c85 100%)',
                        border: 'none',
                        borderRadius: '50px',
                        cursor: loading ? 'not-allowed' : 'pointer',
                        overflow: 'hidden',
                        boxShadow: loading ? 'none' : '0 4px 15px rgba(0, 156, 166, 0.3)',
                        minWidth: '200px',
                        textDecoration: 'none',
                        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                        opacity: loading ? 0.7 : 1
                    }}
                    onMouseEnter={(e) => {
                        if (!loading) {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0, 156, 166, 0.4)';
                            e.currentTarget.style.background = 'linear-gradient(135deg, #00aeb8 0%, #008993 100%)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (!loading) {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 156, 166, 0.3)';
                            e.currentTarget.style.background = 'linear-gradient(135deg, #009ca6 0%, #007c85 100%)';
                        }
                    }}
                >
                    {loading && (
                        <span
                            className="spinner"
                            style={{
                                width: '20px',
                                height: '20px',
                                border: '3px solid rgba(255, 255, 255, 0.3)',
                                borderRadius: '50%',
                                borderTopColor: '#ffffff',
                                animation: 'spin 1s ease-in-out infinite',
                                marginRight: '10px',
                                display: 'inline-block'
                            }}
                        >
                            <style jsx>{`
                                    @keyframes spin {
                                        to { transform: rotate(360deg); }
                                    }
                                    .spinner {
                                        animation: spin 1s ease-in-out infinite;
                                    }
                                `}</style>
                        </span>
                    )}
                    <span>{loading ? "Loading..." : "Load More Posts"}</span>
                    {!loading && (
                        <i
                            className="flaticon-down-arrow"
                            style={{ marginLeft: '10px' }}
                        ></i>
                    )}
                </button>
            </div>
        </>
    );
};

export default LoadMorePosts;
