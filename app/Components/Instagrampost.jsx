"use client";

import React, { useState, useEffect } from "react";
import {
  Instagram,
  Heart,
  MessageCircle,
  ExternalLink,
  RefreshCw,
  Play,
} from "lucide-react";

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchInstagramPosts = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("/api/instagram-posts", {
        cache: "no-store",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || `HTTP error! status: ${response.status}`
        );
      }

      if (data.error) {
        throw new Error(data.error);
      }

      const sortedPosts = Array.isArray(data.data)
        ? [...data.data].sort(
            (a, b) =>
              new Date(b.timestamp) - new Date(a.timestamp)
          )
        : [];

      setPosts(sortedPosts);
    } catch (err) {
      console.error("Instagram frontend error:", err);

      setError(
        `Failed to load Instagram posts: ${
          err instanceof Error ? err.message : "Unknown error"
        }`
      );

      setPosts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInstagramPosts();

    // Refresh every 5 minutes
    const interval = setInterval(fetchInstagramPosts, 300000);

    return () => clearInterval(interval);
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "";

    const date = new Date(dateString);
    const now = new Date();

    const diff = now - date;

    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (hours < 1) return "now";
    if (hours < 24) return `${hours}h`;
    if (days < 7) return `${days}d`;
    if (days < 30) return `${Math.floor(days / 7)}w`;

    return `${Math.floor(days / 30)}mo`;
  };

  const truncateCaption = (caption, maxLength = 100) => {
    if (!caption) return "";

    return caption.length <= maxLength
      ? caption
      : `${caption.slice(0, maxLength)}...`;
  };

  // Loading
  if (loading) {
    return (
      <div className="w-full min-h-screen bg-black flex flex-col items-center justify-center px-4">
        <h1 className="text-white text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-10">
          Our Instagram
        </h1>

        <div className="animate-spin rounded-full h-16 w-16 border-4 border-gray-700 border-t-cyan-500" />

        <p className="text-gray-400 text-lg mt-6 animate-pulse">
          Loading latest posts...
        </p>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-black px-4 py-12 flex flex-col items-center">

      {/* Heading */}
      <h1 className="text-white text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-10">
        Our Instagram
      </h1>

      {/* Error */}
      {error && (
        <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 max-w-md mx-auto text-center mb-6">

          <p className="text-red-400 text-sm">
            {error}
          </p>

          <button
            onClick={fetchInstagramPosts}
            className="mt-2 text-red-300 hover:text-red-100 text-sm underline flex items-center justify-center mx-auto"
          >
            <RefreshCw className="w-4 h-4 mr-1" />
            Try Again
          </button>

        </div>
      )}

      {/* No posts */}
      {!error && posts.length === 0 && (
        <div className="text-gray-400 text-center">
          No Instagram posts found.
        </div>
      )}

      {/* Instagram Cards */}
      <div className="flex flex-wrap justify-center gap-6">

        {posts.slice(0, 4).map((post) => (

          <div
            key={post.id}
            className="w-72 bg-black rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:scale-105 group border border-gray-700/30"
          >

            {/* Media */}
            <div className="relative aspect-square overflow-hidden bg-gray-950">

              {/* VIDEO / REEL */}
              {post.media_type === "VIDEO" && post.media_url && (
                <>
                  <video
                    src={post.media_url}
                    poster={post.thumbnail_url || undefined}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      console.error(
                        "Instagram video failed:",
                        post.media_url
                      );
                    }}
                  />

                  {/* Reel indicator */}
                  <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white p-2 rounded-full">
                    <Play className="w-4 h-4 fill-white" />
                  </div>
                </>
              )}

              {/* IMAGE */}
              {post.media_type === "IMAGE" && post.media_url && (
                <img
                  src={post.media_url}
                  alt={post.caption || "Instagram post"}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    console.error(
                      "Instagram image failed:",
                      post.media_url
                    );

                    e.currentTarget.style.display = "none";
                  }}
                />
              )}

              {/* CAROUSEL */}
              {post.media_type === "CAROUSEL_ALBUM" && (
                <div className="relative w-full h-full">

                  {post.media_url ? (
                    <img
                      src={post.media_url}
                      alt={post.caption || "Instagram post"}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                  ) : post.thumbnail_url ? (
                    <img
                      src={post.thumbnail_url}
                      alt={post.caption || "Instagram post"}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      Instagram carousel
                    </div>
                  )}

                  {/* Carousel indicator */}
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-3 py-1 rounded-full">
                    Multiple photos
                  </div>

                </div>
              )}

              {/* Date */}
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-gray-600/30">
                {formatDate(post.timestamp)}
              </div>

            </div>

            {/* Content */}
            <div className="p-4">

              {/* Caption */}
              <p className="text-gray-300 text-sm leading-snug mb-3 line-clamp-3">
                {truncateCaption(post.caption)}
              </p>

              {/* Likes / Comments */}
              <div className="flex justify-between items-center text-white text-xs mb-3">

                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-red-400" />
                  <span>{post.like_count || 0}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4 text-blue-400" />
                  <span>{post.comments_count || 0}</span>
                </div>

              </div>

              {/* Instagram Link */}
              {post.permalink && (
                <a
                  href={post.permalink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition duration-200"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View on Instagram
                </a>
              )}

            </div>

          </div>

        ))}

      </div>

      {/* Follow Button */}
      <div className="mt-14">

        <a
          href="https://www.instagram.com/torquedetailingstudio/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-base flex items-center px-4 py-3 rounded-xl shadow-lg transform hover:scale-105 transition-all"
        >
          <Instagram className="mr-2 w-5 h-5" />
          Follow @torquedetailingstudio
        </a>

      </div>

    </div>
  );
};

export default InstagramFeed;