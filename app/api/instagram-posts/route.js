// app/api/instagram-posts/route.js

export async function GET() {
  const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
  const INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID;

  // Check environment variables
  if (!INSTAGRAM_ACCESS_TOKEN || !INSTAGRAM_USER_ID) {
    console.error("Instagram environment variables are missing");

    return Response.json(
      {
        error: "Instagram API configuration is missing.",
        details: {
          userId: !!INSTAGRAM_USER_ID,
          accessToken: !!INSTAGRAM_ACCESS_TOKEN,
        },
      },
      { status: 500 }
    );
  }

  try {
    const fields = [
      "id",
      "caption",
      "media_type",
      "media_url",
      "thumbnail_url",
      "permalink",
      "timestamp",
      "like_count",
      "comments_count",
    ].join(",");

    const url =
      `https://graph.instagram.com/v18.0/${INSTAGRAM_USER_ID}/media` +
      `?fields=${fields}` +
      `&access_token=${encodeURIComponent(INSTAGRAM_ACCESS_TOKEN)}`;

    const response = await fetch(url, {
      method: "GET",
      cache: "no-store",
    });

    const data = await response.json();

    console.log(
  "INSTAGRAM MEDIA:",
  data.data?.map((post) => ({
    id: post.id,
    type: post.media_type,
    media_url: post.media_url,
    thumbnail_url: post.thumbnail_url,
  }))
);

    console.log("Instagram API status:", response.status);

    if (!response.ok || data.error) {
      console.error("Instagram API response:", data);

      return Response.json(
        {
          error:
            data.error?.message ||
            "Instagram API request failed.",
          code: data.error?.code || null,
          subcode: data.error?.error_subcode || null,
          type: data.error?.type || null,
        },
        { status: response.status || 500 }
      );
    }

    return Response.json(data, {
      status: 200,
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate",
      },
    });
  } catch (error) {
    console.error("Instagram API Error:", error);

    return Response.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to fetch Instagram posts",
      },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}