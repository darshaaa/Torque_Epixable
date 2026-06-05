// app/api/instagram-posts/route.js

export async function GET() {
  const INSTAGRAM_ACCESS_TOKEN = 'EAAPHZBijhj30BPYVfYa9Smdjrx39WMuEN5dRZB3invhxZCgItZBt4aZAO4ZC6TwhEwFFvxtEJk1x5HwMgIOAzBe8Q5bUsEFFRTfDAMGjZBlmdJzxg4X9LM9zVoo1n624X7ctdZCPnJ7k39227TZCCHkO7v1Fteyx1haV3Jq2biL8ZCFlBWJfsp4FwgbFgl782g0mxX4xutCkVLPEltg6ur';
  const INSTAGRAM_USER_ID = '17841470271684652';

  try {
    const response = await fetch(
      `https://graph.facebook.com/v18.0/17841470271684652/media?fields=id,caption,media_type,media_url,permalink,timestamp,like_count,comments_count&access_token=EAAPHZBijhj30BPYVfYa9Smdjrx39WMuEN5dRZB3invhxZCgItZBt4aZAO4ZC6TwhEwFFvxtEJk1x5HwMgIOAzBe8Q5bUsEFFRTfDAMGjZBlmdJzxg4X9LM9zVoo1n624X7ctdZCPnJ7k39227TZCCHkO7v1Fteyx1haV3Jq2biL8ZCFlBWJfsp4FwgbFgl782g0mxX4xutCkVLPEltg6ur`
    );

    if (!response.ok) {
      throw new Error(`Instagram API error: ${response.status}`);
    }

    const data = await response.json();

    // Check for Instagram API errors
    if (data.error) {
      throw new Error(`Instagram API error: ${data.error.message}`);
    }

    // Return the data using Next.js 13+ Response API
    return Response.json(data);

  } catch (error) {
    console.error('Instagram API Error:', error);
    
    // Return error response
    return Response.json(
      { error: error.message || 'Failed to fetch Instagram posts' },
      { status: 500 }
    );
  }
}

// Handle CORS if needed
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