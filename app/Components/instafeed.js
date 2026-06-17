// pages/api/instafeed.js  (if using pages router)
// or app/api/instafeed/route.js (if using app router)

export default async function handler(req, res) {
  // ⚡ Hardcoded Access Token & User ID
  const INSTAGRAM_ACCESS_TOKEN =
    "EAAZBMg4G9OnABRswmYvwXxPo9UouIOZCdcPBiA3iVZAQYgldLvxihsxAWGlRZARdhvYuJMVaqsFIKQ1m9CYrjrdN3rZCwMxfoQFIEKkQIYiHNRuDFKJtKp1AbfGYHflfnD1gTwEgWCWZBYbM2elAjA9UMiSCwlnEjC3WgWYLZAwT7m7NGG6KQ4QZAg1XxZCZAwxp2GBtZBtspZBWyEjzYV6TR0Kq082RHuDTo9YxytvKScUgoZCdiZAFhToFQT4pLa95a4vgFxvyIoVtaqh4yEoT3KnbzLZB2GluNWSz22gWYeOJPdsKHuvXYJ3tuMoVDZCweC2DZBZBxDQEfW1CDuM57xcTh8DBlm8ZBRgLQZDZD";

  const INSTAGRAM_USER_ID = "17841470271684652";

  try {
    const response = await fetch(
      `https://graph.facebook.com/v23.0/${INSTAGRAM_USER_ID}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,like_count,comments_count&limit=12&access_token=${INSTAGRAM_ACCESS_TOKEN}`
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({ error: data });
    }

    // ✅ Send the Instagram feed JSON to frontend
    res.status(200).json(data);
  } catch (err) {
    console.error("Instagram API error:", err);
    res.status(500).json({ error: "Server error fetching Instagram posts" });
  }
}
