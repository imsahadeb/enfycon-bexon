"use client";

import { useState, useEffect, useRef } from "react";
import BlogCard1 from "@/components/shared/cards/BlogCard1";
import { mapPostToCard } from "@/libs/mappers";
import styles from "./blog-feed.module.scss";

/**
 * BlogFeed Component
 * Implements "Zero-Visible-Loading" via a double-buffer prefetch strategy.
 * 
 * Strategy:
 * 1. Initial Load: Server renders first 15 posts. Client immediately prefetches next 15 (buffer).
 * 2. Load More:
 *    - If buffer is ready: Instantly append buffer to visible list & start fetching next batch in background.
 *    - If buffer empty (rare): Fallback to normal fetch.
 */
const BlogFeed = ({ initialPosts, initialPageInfo, category }) => {
    // VISIBLE STATE: What the user currently sees
    const [visiblePosts, setVisiblePosts] = useState(initialPosts);
    const [hasNextPage, setHasNextPage] = useState(initialPageInfo?.hasNextPage);

    // INTERNAL STATE: Tracking cursors and buffer
    const currentCursorRef = useRef(initialPageInfo?.endCursor); // Cursor of the last visible post
    const [bufferPosts, setBufferPosts] = useState(null); // The next batch waiting in memory
    const [bufferPageInfo, setBufferPageInfo] = useState(null); // PageInfo for the buffer batch

    const [isPrefetching, setIsPrefetching] = useState(false); // Validating if background fetch is running
    const [isLoadingMore, setIsLoadingMore] = useState(false); // Validating if user clicked Button and we are waiting

    // Helper removed, using imported mapPostToCard utility

    // FETCH LOGIC
    const fetchNextBatch = async (cursor) => {
        try {
            const res = await fetch("/api/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    after: cursor,
                    category: category || null
                }),
            });
            const json = await res.json();

            if (json.posts) {
                return {
                    posts: json.posts.edges.map(edge => mapPostToCard(edge.node, category)),
                    pageInfo: json.posts.pageInfo
                };
            }
            return null;
        } catch (error) {
            console.error("Prefetch error:", error);
            return null;
        }
    };

    // 1. ON MOUNT: Trigger first prefetch immediately
    useEffect(() => {
        if (hasNextPage && !bufferPosts && !isPrefetching) {
            prefetchNextBatch(currentCursorRef.current);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // Only run on mount or when hasNextPage changes effectively, but we control it via refs/state logic below

    // PREFETCH FUNCTION
    const prefetchNextBatch = async (cursor) => {
        if (!cursor) return;
        setIsPrefetching(true);

        const data = await fetchNextBatch(cursor);

        if (data) {
            setBufferPosts(data.posts);
            setBufferPageInfo(data.pageInfo);
        }
        setIsPrefetching(false);
    };

    // HANDLER: User clicks "Load More"
    const handleLoadMore = async () => {
        if (!hasNextPage || isLoadingMore) return;

        // SCENARIO A: Buffer is ready (Happy Path - Zero Latency)
        if (bufferPosts) {
            // 1. Append buffer to visible
            setVisiblePosts(prev => [...prev, ...bufferPosts]);

            // 2. Update pointers
            const newCursor = bufferPageInfo.endCursor;
            currentCursorRef.current = newCursor;
            setHasNextPage(bufferPageInfo.hasNextPage);

            // 3. Clear used buffer
            setBufferPosts(null);
            setBufferPageInfo(null);

            // 4. Trigger NEXT prefetch immediately
            if (bufferPageInfo.hasNextPage) {
                prefetchNextBatch(newCursor);
            }
        }
        // SCENARIO B: Buffer not ready (User clicked too fast or network slow)
        else {
            setIsLoadingMore(true); // Show spinner only in this rare case
            const data = await fetchNextBatch(currentCursorRef.current);

            if (data) {
                setVisiblePosts(prev => [...prev, ...data.posts]);
                currentCursorRef.current = data.pageInfo.endCursor;
                setHasNextPage(data.pageInfo.hasNextPage);

                // Start prefetching next batch after this manual load
                if (data.pageInfo.hasNextPage) {
                    prefetchNextBatch(data.pageInfo.endCursor);
                }
            }
            setIsLoadingMore(false);
        }
    };

    return (
        <>
            <div className="row row-gap-4">
                {visiblePosts.map((blog, idx) => (
                    <div key={`${blog.id}-${idx}`} className="col-md-6 col-lg-4">
                        <BlogCard1 blog={blog} idx={idx} />
                    </div>
                ))}
            </div>

            {hasNextPage && (
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tj-pagination-box text-center mt-4">
                            <button
                                className={styles.loadMoreBtn}
                                onClick={handleLoadMore}
                                disabled={isLoadingMore}
                            >
                                {isLoadingMore && <span className={styles.spinner}></span>}
                                <span>{isLoadingMore ? "Loading..." : "Load More"}</span>
                                {!isLoadingMore && (
                                    <span className={styles.iconWrapper}>
                                        <i className="tji-arrow-down"></i>
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div >
            )}
        </>
    );
};

export default BlogFeed;
