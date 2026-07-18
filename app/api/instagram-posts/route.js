// app/api/instagram-posts/route.js

export async function GET() {
  const INSTAGRAM_ACCESS_TOKEN = process.env.INSTAGRAM_ACCESS_TOKEN;
  const INSTAGRAM_USER_ID = process.env.INSTAGRAM_USER_ID;

  try {
    const response = await fetch(
      `https://graph.instagram.com/v18.0/${INSTAGRAM_USER_ID}/media?fields=id,caption,media_type,media_url,permalink,timestamp,like_count,comments_count&access_token=${INSTAGRAM_ACCESS_TOKEN}`
    );

    const data = await response.json();

    if (!response.ok || data.error) {
      throw new Error(
        `Instagram API error: ${data.error?.message || response.status} (code: ${data.error?.code}, subcode: ${data.error?.error_subcode})`
      );
    }

    return Response.json(data);

  } catch (error) {
    console.error('Instagram API Error:', error);
    return Response.json(
      { error: error.message || 'Failed to fetch Instagram posts' },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}