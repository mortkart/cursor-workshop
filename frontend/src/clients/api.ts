const API_URL = "http://localhost:3009";

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  author: string;
  publishedAt: string;
  tags: string[];
  imageUrl: string;
}

export async function getPosts(options?: {
  tag?: string;
  limit?: number;
}): Promise<Post[]> {
  const params = new URLSearchParams();
  if (options?.tag) params.set("tag", options.tag);
  if (options?.limit) params.set("limit", options.limit.toString());

  const url = `${API_URL}/api/posts${params.toString() ? `?${params}` : ""}`;
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export async function getPost(slug: string): Promise<Post> {
  const res = await fetch(`${API_URL}/api/posts/${slug}`);

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  return res.json();
}

export async function getTags(): Promise<string[]> {
  const res = await fetch(`${API_URL}/api/tags`);

  if (!res.ok) {
    throw new Error("Failed to fetch tags");
  }

  return res.json();
}
